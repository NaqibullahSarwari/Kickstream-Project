"use client";

import Image from "next/image";
import Link from "next/link";
import fallbackThumbnail from "../public/aot-thumbnail.png";

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const StreamCard = ({ title, streams = [], emptyMessage }) => {
  return (
    <div className="bg-[#0E0E10] p-4 sm:p-6 rounded-xl border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-base sm:text-lg font-semibold">{title}</h2>
        <span className="text-xs text-gray-500">{streams.length} stream(s)</span>
      </div>

      {streams.length === 0 ? (
        <div className="text-gray-400 text-sm bg-[#18181B] border border-dashed border-gray-700 rounded-lg p-6 text-center">
          {emptyMessage}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {streams.map((stream) => (
            <StreamCardItem key={stream._id} stream={stream} />
          ))}
        </div>
      )}
    </div>
  );
};

const StreamCardItem = ({ stream }) => {
  const isLive = stream.isLive;
  const thumbnailSrc = stream.thumbnailUrl || fallbackThumbnail;
  const description = stream.category || "Just Chatting";
  const viewerLabel = isLive
    ? `${stream.viewerCount || 0} watching now`
    : stream.endedAt
    ? `Ended ${formatDate(stream.endedAt)}`
    : "Replay";

  const tags = [description].filter(Boolean);

  return (
    <Link href={`/streams/${stream._id}`} className="block">
      <div className="bg-[#18181B] rounded-lg overflow-hidden w-full hover:bg-[#1f1f23] transition-colors duration-200 cursor-pointer border border-transparent hover:border-purple-600/40">
        <div className="relative group">
          <Image
            src={thumbnailSrc}
            alt={stream.title || stream.name}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={600}
            height={320}
            unoptimized={Boolean(stream.thumbnailUrl)}
          />
          <div
            className={`absolute top-2 left-2 text-white text-xs font-bold px-3 py-1 rounded-full ${
              isLive ? "bg-red-600" : "bg-gray-700"
            }`}
          >
            {isLive ? "LIVE" : "REPLAY"}
          </div>
          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {viewerLabel}
          </div>
        </div>
        <div className="p-3 space-y-2">
          <h3 className="text-white text-sm font-semibold line-clamp-2 hover:text-[#A970FF] transition-colors duration-200">
            {stream.title || stream.name || "Live Stream"}
          </h3>
          <p className="text-gray-300 text-sm hover:text-[#A970FF] transition-colors duration-200 truncate">
            {stream.userName}
          </p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#34343B] hover:bg-[#414149] text-gray-300 text-xs px-2 py-1 rounded transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StreamCard;
