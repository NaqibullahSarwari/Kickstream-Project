"use client";

export default function KeysPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Stream Keys
      </h1>
      <div className="bg-[#18181B] p-4 sm:p-6 rounded-lg max-w-3xl">
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
                type="password"
                className="flex-1 bg-[#34343B] text-white border border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-purple-500 transition-colors"
                value="sk_live_xxxxxxxxxxxxxxxxxx"
                readOnly
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors text-white font-medium text-sm sm:text-base">
                Show
              </button>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-white text-sm sm:text-base w-full sm:w-auto">
            Generate New Key
          </button>
        </div>
      </div>
    </div>
  );
}
