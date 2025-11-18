"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStreamById } from "../../services/streamApi";
import { ArrowLeft, Loader2, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function StreamDetailPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const data = await getStreamById(id);
        setStream(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStream();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-white flex items-center gap-3">
        <Loader2 className="animate-spin" />
        Loading stream…
      </div>
    );
  }

  if (error || !stream) {
    return (
      <div className="p-6 text-red-300">
        {error || "Unable to find this stream."}
        <button
          onClick={() => router.back()}
          className="block mt-4 text-purple-400 hover:text-purple-200"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-[#0E0E10] min-h-screen space-y-6">
      <div className="flex items-center gap-3 text-white">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      <div className="bg-[#18181B] rounded-xl border border-gray-800 p-4 sm:p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              stream.isLive ? "bg-red-600 text-white" : "bg-gray-700 text-gray-200"
            }`}
          >
            {stream.isLive ? "LIVE NOW" : "REPLAY"}
          </div>
          <p className="text-gray-400 text-sm">
            {stream.isLive
              ? "Streaming from OBS through LiveKit"
              : stream.endedAt
              ? `Ended on ${new Date(stream.endedAt).toLocaleString()}`
              : "Stream offline"}
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{stream.title}</h1>
          <p className="text-gray-300">
            by <span className="text-purple-400 font-semibold">{stream.userName}</span>
          </p>
        </div>

        {stream.isLive ? (
          <div className="bg-[#0E0E10] border border-purple-700/40 rounded-lg p-5 text-purple-100 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <PlayCircle className="text-purple-400" />
              You're live!
            </div>
            <p className="text-sm text-purple-200">
              Viewers can join your LiveKit room right now. Keep OBS running to continue streaming.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <Field label="Server URL" value={stream.serverUrl} copy />
              <Field label="Stream Key" value={stream.streamKey} copy secret />
            </div>
          </div>
        ) : stream.replayUrl ? (
          <div className="bg-black rounded-xl overflow-hidden border border-gray-800">
            <video controls className="w-full bg-black" poster={stream.thumbnailUrl}>
              <source src={stream.replayUrl} />
            </video>
          </div>
        ) : (
          <div className="bg-[#151515] border border-gray-800 rounded-lg p-4 text-gray-400">
            Replay is not available for this stream. Add a replay URL from the Go Live page to let
            viewers watch past broadcasts.
          </div>
        )}
      </div>
    </div>
  );
}

const Field = ({ label, value, copy, secret }) => {
  if (!value) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <p className="flex-1 bg-[#1e1e1e] border border-gray-800 rounded px-3 py-2 text-white text-sm font-mono break-all">
          {secret ? "•••••••••••••••" : value}
        </p>
        {copy && (
          <button
            onClick={handleCopy}
            className="text-xs text-purple-300 hover:text-white underline"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

