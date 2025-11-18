import express from "express";
import { WebhookReceiver } from "livekit-server-sdk";
import Stream from "../model/Stream.js";

const router = express.Router();

// Initialize webhook receiver
const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY,
  process.env.LIVEKIT_API_SECRET
);

// Webhook endpoint - must receive raw text, not JSON
// Note: Raw body parsing is handled at server level before this router
router.post("/livekit", async (req, res) => {
  try {
    // Verify webhook signature
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Convert body to string if it's a Buffer
    const body = req.body instanceof Buffer ? req.body.toString("utf8") : req.body;

    // Receive and verify webhook
    const event = receiver.receive(body, authHeader);

    // Handle different event types
    if (event.event === "ingress_started") {
      // Stream started
      const roomName = event.ingress?.roomName || event.room?.name;
      const userId = roomName?.replace("room-", "") || event.ingress?.participantIdentity;

      if (userId) {
        await Stream.findOneAndUpdate(
          { userId },
          {
            isLive: true,
            startedAt: new Date(),
            endedAt: null,
          },
          { new: true }
        );
        console.log(`Stream started for user: ${userId}`);
      }
    } else if (event.event === "ingress_ended") {
      // Stream ended
      const roomName = event.ingress?.roomName || event.room?.name;
      const userId = roomName?.replace("room-", "") || event.ingress?.participantIdentity;

      if (userId) {
        await Stream.findOneAndUpdate(
          { userId },
          {
            isLive: false,
            endedAt: new Date(),
          },
          { new: true }
        );
        console.log(`Stream ended for user: ${userId}`);
      }
    } else if (event.event === "room_started") {
      // Room started (alternative event)
      const roomName = event.room?.name;
      const userId = roomName?.replace("room-", "");

      if (userId) {
        await Stream.findOneAndUpdate(
          { userId },
          {
            isLive: true,
            startedAt: new Date(),
            endedAt: null,
          },
          { new: true }
        );
        console.log(`Room started for user: ${userId}`);
      }
    } else if (event.event === "room_finished") {
      // Room finished (alternative event)
      const roomName = event.room?.name;
      const userId = roomName?.replace("room-", "");

      if (userId) {
        await Stream.findOneAndUpdate(
          { userId },
          {
            isLive: false,
            endedAt: new Date(),
          },
          { new: true }
        );
        console.log(`Room finished for user: ${userId}`);
      }
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ error: "Webhook processing failed", details: error.message });
  }
});

export default router;

