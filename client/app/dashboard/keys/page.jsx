"use client";

import { useState, useEffect } from "react";
import { createIngress, resetIngress, getStreamByUserId } from "../../services/streamApi";
import { Copy, Eye, EyeOff, RefreshCw, AlertCircle, CheckCircle2, Info } from "lucide-react";

export default function KeysPage() {
  const [streamData, setStreamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState({ key: false, server: false, url: false });
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // TODO: Replace with actual user authentication
  const userId = "user123"; // Replace with actual userId from auth
  const userName = "Streamer"; // Replace with actual userName from auth

  useEffect(() => {
    loadStreamData();
  }, []);

  const loadStreamData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let data = await getStreamByUserId(userId);
      
      if (!data) {
        // Create ingress if it doesn't exist
        data = await createIngress(userId, userName);
      }
      
      setStreamData(data);
    } catch (err) {
      setError(err.message || "Failed to load stream data");
      console.error("Error loading stream data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateNewKey = async () => {
    if (!confirm("Are you sure you want to generate a new key? Your current stream will be disconnected.")) {
      return;
    }

    try {
      setGenerating(true);
      setError(null);
      const data = await resetIngress(userId);
      setStreamData(data);
      setShowKey(false);
      setCopied({ key: false, server: false, url: false });
    } catch (err) {
      setError(err.message || "Failed to generate new key");
      console.error("Error generating new key:", err);
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied({ ...copied, [type]: true });
      setTimeout(() => {
        setCopied({ ...copied, [type]: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen flex items-center justify-center">
        <div className="text-white text-lg">Loading stream keys...</div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Stream Keys
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-white font-medium text-sm sm:text-base"
          >
            <Info size={18} />
            <span className="hidden sm:inline">OBS Setup Guide</span>
            <span className="sm:hidden">Guide</span>
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-900/50 border border-red-600 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        {streamData && (
          <div className="space-y-4">
            {/* Server URL Card */}
            <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <CheckCircle2 size={20} className="text-green-500" />
                Server URL
              </h2>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  RTMP Server
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-[#34343B] text-white border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors"
                    value={streamData.serverUrl || ""}
                    readOnly
                  />
                  <button
                    onClick={() => copyToClipboard(streamData.serverUrl, "server")}
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2"
                  >
                    {copied.server ? (
                      <>
                        <CheckCircle2 size={18} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Stream Key Card */}
            <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                Your Stream Key
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Stream Key
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type={showKey ? "text" : "password"}
                      className="flex-1 bg-[#34343B] text-white border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors font-mono"
                      value={streamData.streamKey || ""}
                      readOnly
                    />
                    <button
                      onClick={() => setShowKey(!showKey)}
                      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                      <span>{showKey ? "Hide" : "Show"}</span>
                    </button>
                    <button
                      onClick={() => copyToClipboard(streamData.streamKey, "key")}
                      className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      {copied.key ? (
                        <>
                          <CheckCircle2 size={18} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={18} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleGenerateNewKey}
                  disabled={generating}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-white text-sm sm:text-base w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  {generating ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw size={18} />
                      <span>Generate New Key</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Stream URL Card */}
            {streamData.streamUrl && (
              <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                  Stream URL
                </h2>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Your Stream URL
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-[#34343B] text-white border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors"
                      value={streamData.streamUrl || ""}
                      readOnly
                    />
                    <button
                      onClick={() => copyToClipboard(streamData.streamUrl, "url")}
                      className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      {copied.url ? (
                        <>
                          <CheckCircle2 size={18} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={18} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Status Indicator */}
            <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${streamData.isLive ? "bg-red-500 animate-pulse" : "bg-gray-500"}`}></div>
                <span className="text-white font-medium">
                  Status: {streamData.isLive ? "Live" : "Offline"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* OBS Setup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#18181B] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">OBS Studio Setup Guide</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 1: Download OBS Studio</h3>
                  <p>Download and install OBS Studio from <a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">obsproject.com</a></p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 2: Configure Stream Settings</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Open OBS Studio</li>
                    <li>Go to <strong>Settings</strong> → <strong>Stream</strong></li>
                    <li>Set <strong>Service</strong> to <strong>Custom</strong></li>
                    <li>Paste the <strong>Server URL</strong> from above into the <strong>Server</strong> field</li>
                    <li>Paste the <strong>Stream Key</strong> from above into the <strong>Stream Key</strong> field</li>
                    <li>Click <strong>OK</strong></li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 3: Add Sources</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Click the <strong>+</strong> button in the Sources section</li>
                    <li>Add sources like <strong>Display Capture</strong>, <strong>Window Capture</strong>, or <strong>Video Capture Device</strong></li>
                    <li>Configure your sources as needed</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Step 4: Start Streaming</h3>
                  <p>Click the <strong>Start Streaming</strong> button in OBS Studio. Your stream status will automatically update when you go live!</p>
                </div>
                <div className="bg-[#0E0E10] p-4 rounded-lg mt-4">
                  <p className="text-sm text-yellow-300">
                    <strong>Note:</strong> Make sure your Server URL and Stream Key are correctly copied. If you generate a new key, you'll need to update OBS with the new credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
