"use client";

import { useEffect, useState } from "react";
import StreamCard from "../components/StreamCard.jsx";
import { getStreams } from "./services/streamApi";

export default function Home() {
  const [liveStreams, setLiveStreams] = useState([]);
  const [replayStreams, setReplayStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStreams = async () => {
    try {
      setError("");
      const [live, recent] = await Promise.all([getStreams("live"), getStreams("replay")]);
      setLiveStreams(live);
      setReplayStreams(recent);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStreams();
    const interval = setInterval(fetchStreams, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 p-4 sm:p-6 bg-[#0E0E10] min-h-screen">
      {error && (
        <div className="bg-red-900/40 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-gray-400 text-center py-10">Loading streams…</div>
      ) : (
        <>
          <StreamCard
            title="Live channels we think you'll like"
            streams={liveStreams}
            emptyMessage="No one is live right now. Start streaming from the Go Live page!"
          />

          <StreamCard
            title="Recent Streams"
            streams={replayStreams}
            emptyMessage="Once a stream ends, the replay will appear here."
          />
        </>
      )}
    </div>
  );
}
