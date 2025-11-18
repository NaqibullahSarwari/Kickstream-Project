"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Video, Link as LinkIcon } from "lucide-react";
import {
  createIngress,
  getStreamByUserId,
  resetIngress,
} from "../../services/streamApi";

const DEFAULT_USER_ID = "user123";
const DEFAULT_USER_NAME = "Streamer";

const statusMessages = {
  idle: "Configure your stream and click start.",
  starting: "Creating stream ingress…",
  waiting: "Waiting for LiveKit to receive video from OBS…",
  live: "You're live! Your channel is now visible on the homepage.",
  error: "Something went wrong. Check the error below.",
};

export default function GoLivePage() {
  const [title, setTitle] = useState("My Kickstream Show");
  const [category, setCategory] = useState("Gaming");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [replayUrl, setReplayUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [streamInfo, setStreamInfo] = useState(null);
  const [polling, setPolling] = useState(false);
  const [resetting, setResetting] = useState(false);

  const userId = DEFAULT_USER_ID;
  const userName = DEFAULT_USER_NAME;

  const metadataPayload = useMemo(
    () => ({
      title,
      category,
      thumbnailUrl,
      replayUrl,
    }),
    [title, category, thumbnailUrl, replayUrl]
  );

  const handleStart = async () => {
    setError("");
    setStatus("starting");
    try {
      const stream = await createIngress(userId, userName, metadataPayload);
      setStreamInfo(stream);
      setStatus("waiting");
      setPolling(true);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  const handleReset = async () => {
    setResetting(true);
    setError("");
    try {
      const stream = await resetIngress(userId, metadataPayload);
      setStreamInfo(stream);
      setStatus("waiting");
      setPolling(true);
    } catch (err) {
      setError(err.message);
      setStatus("error");
    } finally {
      setResetting(false);
    }
  };

  const pollStatus = async () => {
    try {
      const data = await getStreamByUserId(userId);
      if (data) {
        setStreamInfo(data);
        if (data.isLive) {
          setStatus("live");
          setPolling(false);
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!polling) return;
    const interval = setInterval(() => {
      pollStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, [polling]);

  useEffect(() => {
    // Load initial data if it exists
    pollStatus();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
        <Video className="text-purple-400" />
        Go Live
      </h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg">
          <h2 className="text-white text-xl font-semibold mb-4">Stream Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-[#0E0E10] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                placeholder="What are you streaming today?"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0E0E10] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                placeholder="Gaming, Just Chatting, Music..."
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Thumbnail URL (optional)
              </label>
              <input
                value={thumbnailUrl}
                onChange={(e) => setThumbnailUrl(e.target.value)}
                className="w-full bg-[#0E0E10] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                placeholder="https://example.com/thumbnail.jpg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Replay URL (optional)
              </label>
              <input
                value={replayUrl}
                onChange={(e) => setReplayUrl(e.target.value)}
                className="w-full bg-[#0E0E10] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                placeholder="Link to your recorded VOD (MP4, HLS, etc.)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Viewers will see this video once the stream ends.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleStart}
                disabled={status === "starting" || status === "waiting"}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:cursor-not-allowed transition-colors text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                {status === "starting" ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Creating ingress…
                  </>
                ) : (
                  "Start Stream"
                )}
              </button>
              <button
                onClick={handleReset}
                disabled={resetting}
                className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-900 disabled:cursor-not-allowed transition-colors text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                {resetting ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Resetting…
                  </>
                ) : (
                  "Generate new key"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg space-y-4">
          <div className="flex items-start gap-3">
            {status === "live" ? (
              <CheckCircle2 className="text-green-400 w-6 h-6 mt-1" />
            ) : (
              <Loader2 className="text-purple-400 w-6 h-6 mt-1 animate-spin" />
            )}
            <div>
              <p className="text-white font-semibold">Status</p>
              <p className="text-gray-300 text-sm">{statusMessages[status]}</p>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-3 text-red-300 bg-red-900/30 border border-red-700 rounded-lg p-3">
              <AlertCircle className="mt-1" />
              <div>
                <p className="font-semibold">Something went wrong</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {streamInfo && (
            <div className="space-y-3 border border-gray-700 rounded-lg p-4 bg-[#0E0E10]">
              <div className="flex items-center gap-2 text-white font-semibold">
                <LinkIcon className="w-4 h-4 text-purple-400" />
                Stream Credentials
              </div>
              <CredentialRow
                label="Server URL"
                value={streamInfo.serverUrl}
                placeholder="Still generating…"
              />
              <CredentialRow
                label="Stream Key"
                value={streamInfo.streamKey}
                secret
                placeholder="Still generating…"
              />
            </div>
          )}

          <div className="bg-[#0E0E10] border border-gray-700 rounded-lg p-4 space-y-3">
            <h3 className="text-white font-semibold">Checklist</h3>
            <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
              <li>Open OBS and paste the Server URL & Stream Key above.</li>
              <li>Click “Start Streaming” in OBS.</li>
              <li>
                Keep this page open — once LiveKit receives video, your stream appears on the
                homepage automatically.
              </li>
              <li>
                When you stop streaming, we’ll move your stream into the “Recent Streams” section
                so viewers can watch the replay.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const CredentialRow = ({ label, value, secret, placeholder }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="space-y-1">
      <p className="text-sm text-gray-400">{label}</p>
      {value ? (
        <div className="flex items-center gap-2">
          <p className="flex-1 bg-[#18181B] border border-gray-700 rounded px-3 py-2 text-white font-mono text-sm break-all">
            {secret && !revealed ? "••••••••••••••••••••••" : value}
          </p>
          {secret && (
            <button
              onClick={() => setRevealed((prev) => !prev)}
              className="text-xs text-purple-300 hover:text-white"
            >
              {revealed ? "Hide" : "Show"}
            </button>
          )}
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(value);
              } catch (err) {
                console.error("Failed to copy", err);
              }
            }}
            className="text-xs text-purple-300 hover:text-white"
          >
            Copy
          </button>
        </div>
      ) : (
        <p className="bg-[#18181B] border border-gray-800 rounded px-3 py-2 text-gray-500 font-mono text-sm">
          {placeholder || "Not ready yet"}
        </p>
      )}
    </div>
  );
};
