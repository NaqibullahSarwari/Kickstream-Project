export default function KeysPage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Stream Keys</h1>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Stream Key</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Stream Key</label>
              <div className="flex gap-2">
                <input
                  type="password"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none"
                  value="sk_live_xxxxxxxxxxxxxxxxxx"
                  readOnly
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                  Show
                </button>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition-colors">
              Generate New Key
            </button>
          </div>
        </div>
      </div>
    );
  }
  