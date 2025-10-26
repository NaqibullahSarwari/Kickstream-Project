import Navbar from "../components/Navbar.jsx";
import StreamCard from "../components/StreamCard.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <header>
        <title>Kickstream</title>
      </header>
      <Navbar />
      <div className="flex justify-baseline">
        <Sidebar />
        <div className="bg-[#0E0E10] w-7xl">
          <StreamCard />
        </div>
      </div>
    </>
  );
}
