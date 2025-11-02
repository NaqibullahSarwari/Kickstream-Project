"use client";
export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-[#0E0E10] min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#18181B] hover:bg-[#1f1f23] p-4 sm:p-6 rounded-lg transition-colors">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            Total Views
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-purple-500">
            15,234
          </p>
        </div>
        <div className="bg-[#18181B] hover:bg-[#1f1f23] p-4 sm:p-6 rounded-lg transition-colors">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            Followers
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-purple-500">
            1,432
          </p>
        </div>
        <div className="bg-[#18181B] hover:bg-[#1f1f23] p-4 sm:p-6 rounded-lg transition-colors">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            Stream Hours
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-purple-500">127</p>
        </div>
      </div>
    </div>
  );
}
