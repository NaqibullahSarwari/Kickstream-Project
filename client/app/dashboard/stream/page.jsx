"use client"

export default function StreamPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Stream Settings</h1>
      <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg max-w-3xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">Configure Your Stream</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Stream Title</label>
            <input
              type="text"
              className="w-full bg-[#34343B] text-white border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter stream title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Category</label>
            <select className="w-full bg-[#34343B] text-white border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors">
              <option>Gaming</option>
              <option>Just Chatting</option>
              <option>Music</option>
              <option>Creative</option>
            </select>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-white text-sm sm:text-base w-full sm:w-auto">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}