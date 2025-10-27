import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kickstream",
  icons: {
    icon: "/Twitch-Icon.png",
    shortcut: "/Twitch-Icon.png",
    apple: "/Twitch-Icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#0E0E10]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0E0E10]`}
      >
        <Navbar />
        <div className="flex min-h-screen bg-[#0E0E10]">
          <Sidebar />
          <div className="flex-1 bg-[#0E0E10] min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
