export default function StreamPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Stream Settings</h1>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Configure Your Stream</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Stream Title</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Enter stream title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500">
                <option>Gaming</option>
                <option>Just Chatting</option>
                <option>Music</option>
                <option>Creative</option>
              </select>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    );
  }