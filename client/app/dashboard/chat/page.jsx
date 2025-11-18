"use client"

export default function ChatPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Chat Settings</h1>
      <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg max-w-3xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Manage Chat Options</h2>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3 className="font-medium text-white text-sm sm:text-base">Slow Mode</h3>
              <p className="text-xs sm:text-sm text-gray-400">Limit how often users can send messages</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#34343B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3 className="font-medium text-white text-sm sm:text-base">Follower Only Mode</h3>
              <p className="text-xs sm:text-sm text-gray-400">Only followers can chat</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#34343B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <h3 className="font-medium text-white text-sm sm:text-base">Emote Only Mode</h3>
              <p className="text-xs sm:text-sm text-gray-400">Users can only send emotes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#34343B] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}