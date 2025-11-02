export default function GoLivePage() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Go Live</h1>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-300 mb-4">Ready to start streaming?</p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-medium text-lg transition-colors">
            Start Stream
          </button>
        </div>
      </div>
    );
  }