import Stream from "../model/Stream.js";
import { IngressClient, IngressInput } from "livekit-server-sdk";

const ingressClient = new IngressClient(
  process.env.LIVEKIT_API_URL,
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

const buildMetadata = ({ userName, title, category, thumbnailUrl, replayUrl }) => ({
  title: title?.trim() || `${userName}'s Stream`,
  category: category?.trim() || "Live",
  thumbnailUrl:
    thumbnailUrl?.trim() ||
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  replayUrl: replayUrl?.trim() || "",
});

// Create or get RTMP ingress for a user
export const createIngress = async (req, res) => {
  try {
    const { userId, userName, title, category, thumbnailUrl, replayUrl } = req.body;

    if (!userId || !userName) {
      return res.status(400).json({ error: "UserId and userName are required" });
    }

    let stream = await Stream.findOne({ userId });

    if (stream && stream.ingressId) {
      try {
        const ingresses = await ingressClient.listIngress({ roomName: `room-${userId}` });
        const existingIngress = ingresses.find((ing) => ing.ingressId === stream.ingressId);

        if (existingIngress) {
          stream = await Stream.findOneAndUpdate(
            { userId },
            { ...buildMetadata({ userName, title, category, thumbnailUrl, replayUrl }) },
            { new: true }
          );

          return res.json(stream);
        }
      } catch (error) {
        console.log("Ingress not found, creating a new one:", error.message);
      }
    }

    const ingress = await ingressClient.createIngress(IngressInput.RTMP_INPUT, {
      name: `${userName}-stream`,
      roomName: `room-${userId}`,
      participantName: userName,
      participantIdentity: userId,
    });

    const streamData = {
      ingressId: ingress.ingressId,
      serverUrl: ingress.serverUrl,
      streamKey: ingress.streamKey,
      streamUrl: ingress.url || ingress.streamUrl,
      userId,
      userName,
      name: ingress.name,
      ...buildMetadata({ userName, title, category, thumbnailUrl, replayUrl }),
    };

    if (stream) {
      stream = await Stream.findOneAndUpdate({ userId }, streamData, { new: true });
    } else {
      stream = await Stream.create(streamData);
    }

    res.json(stream);
  } catch (error) {
    console.error("Error creating ingress:", error);
    res.status(500).json({
      error: "Failed to create ingress",
      details: error.message,
    });
  }
};

// Reset ingress (delete and create new)
export const resetIngress = async (req, res) => {
  try {
    const { userId, userName, title, category, thumbnailUrl, replayUrl } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }

    const stream = await Stream.findOne({ userId });

    if (stream && stream.ingressId) {
      try {
        await ingressClient.deleteIngress(stream.ingressId);
      } catch (error) {
        console.log("Error deleting ingress (may not exist):", error.message);
      }
    }

    await Stream.findOneAndDelete({ userId });

    const createReq = {
      body: {
        userId,
        userName: userName || stream?.userName || "User",
        title: title || stream?.title,
        category: category || stream?.category,
        thumbnailUrl: thumbnailUrl || stream?.thumbnailUrl,
        replayUrl: replayUrl || stream?.replayUrl,
      },
    };

    return createIngress(createReq, res);
  } catch (error) {
    console.error("Error resetting ingress:", error);
    res.status(500).json({ error: "Failed to reset ingress", details: error.message });
  }
};

// Get stream by userId
export const getStreamByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }

    const stream = await Stream.findOne({ userId });

    if (!stream) {
      return res.status(404).json({ error: "Stream not found" });
    }

    res.json(stream);
  } catch (error) {
    console.error("Error getting stream:", error);
    res.status(500).json({ error: "Failed to get stream", details: error.message });
  }
};

export const getStreams = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};

    if (status === "live") {
      filter.isLive = true;
    } else if (status === "replay") {
      filter.isLive = false;
    filter.replayUrl = { $ne: "" };
    filter.endedAt = { $ne: null };
    }

    const streams = await Stream.find(filter).sort({ updatedAt: -1 });
    res.json(streams);
  } catch (error) {
    console.error("Error fetching streams:", error);
    res.status(500).json({ error: "Failed to fetch streams", details: error.message });
  }
};

export const getStreamById = async (req, res) => {
  try {
    const { id } = req.params;

    const stream = await Stream.findById(id);

    if (!stream) {
      return res.status(404).json({ error: "Stream not found" });
    }

    res.json(stream);
  } catch (error) {
    console.error("Error fetching stream:", error);
    res.status(500).json({ error: "Failed to fetch stream", details: error.message });
  }
};