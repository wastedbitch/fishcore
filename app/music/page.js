"use client";

import Link from "next/link";
import { useState } from "react";


const playlists = {
  Schizotwinkcore: {
    emoji: "😼",
    coverImage: "/music/schizo.jpg",
    link: "https://open.spotify.com/playlist/1gF5i7D4z0dBYqDZFiYNCg?si=M3ayQCZpSkmdggz-Up9A5w",
    desc: "Dear Federal Agents, all my posts are 100% serious & i am a threat to society",
    tracks: [
      "https://open.spotify.com/track/6P8MQad00pfzD3XSLS2cDe?si=1a785c8e603947be",
      "https://open.spotify.com/track/5hnktvtMR96jGKA54FEi7U?si=83702ceda1934b4b",
      "https://open.spotify.com/track/0QAx0ZM4h0tPmOtXGHQVqU?si=715d972adb9f40c1",
      "https://open.spotify.com/track/0kGAoSq5IEG8JyZ8W4swyL?si=95393bd811184522",
      "https://open.spotify.com/track/4ZapAR5XjoPEtsDHUG6cad?si=eb3e7e641c7a4480",
      "https://open.spotify.com/track/2Zj1mz5b791QYiY388iBC5?si=dc6312f8cffe4783",
      "https://open.spotify.com/track/0bMYQjhqOV3CoqE7OcRIBv?si=0aa9a20a3dea41d6",
      "https://open.spotify.com/track/4wFeMmJDlgkAxlQ07PbdGZ?si=7fd67c76b4cd46fa",
      "https://open.spotify.com/track/5jUQFLVwMtB1YBqrD22cDH?si=937b43c618a945e5",
      "https://open.spotify.com/track/3wbZL3jeYCiuG8e5hRbofl?si=a7c9c026f16643d1",
      "https://open.spotify.com/track/2kwKk1pkWM6ywaC4gQaByB?si=6e6a4ba81afb4bea",
      "https://open.spotify.com/track/2o1Deu2r99ZkkQwQ27LnZd?si=e0669d3945fc4c04",
      "https://open.spotify.com/track/4T1oZ3UAFKbraSp5JAISWW?si=428881a0224b4d16",
      "https://open.spotify.com/track/0gibqBM6LEYReGW1ZjyEKY?si=ce04b4261fe343f9",
      "https://open.spotify.com/track/6d67Xv8ms2noA8wWFLiPDN?si=1a092bee1b2c4065",
      "https://open.spotify.com/track/0Pie5DFAHHxpkONFUsAI6s?si=35d95e0ef069495b",
      "https://open.spotify.com/track/65ZatbSElf6kAzqQ79xzPb?si=bff295c0280d4492",
      "https://open.spotify.com/track/4Nf3j6BzVhqf0AFTQPgaTC?si=3119ae42922443f2",
      "https://open.spotify.com/track/4WXonRUcCdP2xmfRkLDoL7?si=3f0b6e5b137d480a",
      "https://open.spotify.com/track/0RD3NWnHlyBCRwgNZy8QAn?si=687825a6498c496b",
      "https://open.spotify.com/track/3MF3Zj7bYl1PdARlzqfwYC?si=adf646fee3c84b56",
    ],
  },
  SuicidalGirlypopClassics: {
    emoji: "🎀",
    coverImage: "/music/girlypop.jpg",
    link: "https://open.spotify.com/playlist/6nMKr1GgKXLE0RZ7GQVlVq?si=CZElYHUPQ5K47pjrVv08rQ",
    desc: "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow",
    tracks: [
      "https://open.spotify.com/track/1Myqi1Jjaz7n3M67BXQI4C?si=aae5c1c810914831",
      "https://open.spotify.com/track/2Htw2wEVQhzJhO5iRDTwkG?si=576c5950f5fe4e4c",
      "https://open.spotify.com/track/43m6TDNjIYvDjkjUW9eraa?si=bf81c534921444f4",
      "https://open.spotify.com/track/4ZWvxigw0eCW3Lvi7dtQIM?si=87096b62670c470e",
      "https://open.spotify.com/track/0dlXj3DP3br6lhddh0Tr8k?si=c6834a4dd79c42c9",
      "https://open.spotify.com/track/1MU2Gb5aCAYWvT6qbU2Rk7?si=709773d58e6f4432",
      "https://open.spotify.com/track/6TU5KcMHtNgybYLnyUdQ5d?si=16ba983197054a2b",
      "https://open.spotify.com/track/2CmzxBxC5mOlIWDLMRSAwZ?si=a11c35a45c274b09",
      "https://open.spotify.com/track/5JbnCOb18ygGlIviobB0iV?si=e7981577ac7a48d6",
      "https://open.spotify.com/track/7JHKi65fhsh12B86z4C9FM?si=995aa3e1218e49af",
      "https://open.spotify.com/track/1jxGTlQh6vJBgn6DCKP67O?si=fc50623af593415c",
      "https://open.spotify.com/track/5Sj3A3Nr0jLiJoet9fxuzz?si=67f50457c6b74c88",
      "https://open.spotify.com/track/4oULiI3U4vzm6QsqZH9HI9?si=1ce08c59f29548b0",
      "https://open.spotify.com/track/0cfT50hK1oqNc47VahyegT?si=7a19ff65aaa34df3",
      "https://open.spotify.com/track/3qaMprRWLGggArD14diXYz?si=d44965e7e3934e49",
      "https://open.spotify.com/track/3xGqpwa2HDYOomN6X0pene?si=390708e1dc004320",
      "https://open.spotify.com/track/5C85mGeek4UhNoTFliN29L?si=8c4600d2c7834f11",
      "https://open.spotify.com/track/0MaxvnFJG2FlpLMR9Hr20d?si=5fcc965e13a94e6d",
      "https://open.spotify.com/track/0lJor2xK9yTKpR7EAxKAZk?si=91c545df196d4999",
      "https://open.spotify.com/track/4EyRzm7uOdc9PNV9lzs3Tr?si=5f2694ce100844e0",
    ],
  },
  Lobotomycore: {
    emoji: "🧠",
    coverImage: "/music/lobotomy.jpg",
    link: "https://open.spotify.com/playlist/52GEyJJcsIUdc03OkZPygT?si=6JO0UcQURf6bUt8r9HCL2w",
    desc: "Live Laugh Lobotomy",
    tracks: [
      "https://open.spotify.com/track/3YbMdHrZlBALzNw3LFyZWp?si=b7d8722a6252490d",
      "https://open.spotify.com/track/10HsOaiUUodfgEfhwl6xiD?si=21658315f5884dfc",
      "https://open.spotify.com/track/5egAk3R4HLzlB7wPCaU0ow?si=9e211c2ceeb148a5",
      "https://open.spotify.com/track/0l9IiOVG9Uqn8tArEMfvBw?si=63c5fa196611405b",
      "https://open.spotify.com/track/3QjzkfE5lCcs0JTrpqABpa?si=8f1e689acb8d4f93",
      "https://open.spotify.com/track/0V36ohSgy0Fq4MyqNORyFO?si=4698b2aad2024e48",
      "https://open.spotify.com/track/46yq4nc3C7BHtvypKhqfnP?si=aa3d6c77ccc445e9",
      "https://open.spotify.com/track/06yZoObVFRQqPhQNTdCHV5?si=7895f73a8538489c",
      "https://open.spotify.com/track/54MIP08c9VnoWcs0hAZIkg?si=fb6f06c592614f1a",
      "https://open.spotify.com/track/3sGHk7kt8tobGR3NSkg9QO?si=7b536dc2056e4a15",
      "https://open.spotify.com/track/3AqSjZYCTQmrExko0zOIgF?si=be00e3ed18cf4665",
      "https://open.spotify.com/track/6tpXGyQlgkRAp75N1aJD9z?si=355162e39e624b7c",
      "https://open.spotify.com/track/7t7LJcNxwfN9HhosWBBTSA?si=6b6213c8400e4717",
      "https://open.spotify.com/track/0V7lyAvWChiwVdIB9jwR8g?si=62538159cb624b27",
      "https://open.spotify.com/track/4LsYdWDeumtYjMndQVcA94?si=c2d5722a93184e83",
      "https://open.spotify.com/track/4stVO8v5EBQEcnFXU7sppf?si=b34725300e8d4e30",
    ],
  },
  GecGecGec: {
    emoji: "🦎",
    coverImage: "/music/gecs.jpg",
    link: "https://open.spotify.com/playlist/17uHB2XggX9BXnxwBOTRO8?si=KXFJPuzkSc2TvoO_5Iq2UA",
    desc: "Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec Gec ",
    tracks: [
      "https://open.spotify.com/track/0qMZXgcLfkl5RI3q50KHMH?si=93856df89f0540f8",
      "https://open.spotify.com/track/4vwHBxN5OGtUqqUWvWClGd?si=92b84cb46eca482c",
      "https://open.spotify.com/track/0oigSejhoNen2EdNAIFcm5?si=c0d87a2352ad47e3",
      "https://open.spotify.com/track/5YgXVo1eBpGSsLFhRkrwQw?si=316416fb39ba486d",
      "https://open.spotify.com/track/2T93MtJuKMzcGRTR8fdizV?si=a9ed5d88d57d4de7",
      "https://open.spotify.com/track/7CUkeiG7QtB7tPU9f8SANS?si=c8b736d434774d6d",
      "https://open.spotify.com/track/1hJN8hZvzEvOvqX32jSSrw?si=4205bb1505ee435d",
      "https://open.spotify.com/track/1j581GCDFQ9P8xd6fyjgLt?si=7134590d4f8c455c",
      "https://open.spotify.com/track/6jgkLS7ADwuNskZyQ4cNbm?si=b2a4eb6dcbf34cff",
    ],
  },
};

export default function Musicplayer() {
  const [currentPlaylist, setCurrentPlaylist] = useState(Object.keys(playlists)[0]);

  const handlePlaylistChange = (playlist) => {
    setCurrentPlaylist(playlist);
  };

  return (
    <div className="bg rounded-lg border-[#62102f] border w-full h-full overflow-hidden lg:mb-20 pb-12">
      <div className="p-2 border-b-[#62102f] border-b flex justify-between">
        <div className="ml-2">FishTunes</div>
        <div className="hover:text-[#8b1547] mr-2">
          <Link href="/">x</Link>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="block lg:hidden p-2 text-center border-b border-[#62102f]">
        <Link href={playlists[currentPlaylist].link} className="hover:text-[#62102f] font-bold underline">
          {currentPlaylist}
        </Link>
      </div>

      {/* Main Grid + Sidebars */}
      <div className="flex h-full">

        {/* Left Sidebar */}
        <div className="w-1/5 p-4 border-r border-[#62102f]">
          <h2 className="text-lg font-bold mb-4 hidden lg:block">Playlists</h2>
          {Object.keys(playlists).map((playlist) => (
            <button
              key={playlist}
              onClick={() => handlePlaylistChange(playlist)}
              className={`w-full text-left p-2 mb-2 rounded flex items-center ${
                currentPlaylist === playlist
                  ? "bg-[#62102f] text-white"
                  : "text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              <span className="lg:hidden">{playlists[playlist].emoji}</span>
              <span className="hidden lg:inline">{playlist}</span>
            </button>
          ))}
        </div>

        {/* Music Grid */}
        <div className="flex-1 p-4 overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4">
            {playlists[currentPlaylist].tracks.map((link, index) => (
              <div key={index} className="w-full">
                <iframe
                  src={`https://open.spotify.com/embed/track/${link.split("/track/")[1]}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            ))}
            <Link href={playlists[currentPlaylist].link} className="font-bold mt-2 hover:text-[#62102f] underline text-center pb-8">Full Playlist</Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-1/5 p-4 border-l border-[#62102f]">
          <div className="">
            <img
              src={playlists[currentPlaylist].coverImage}
              alt={`${currentPlaylist} cover`}
              className="w-full rounded-lg"
            />
            <div className=" mt-6 mb-2"><Link href={playlists[currentPlaylist].link} className="text-lg font-bold hover:text-[#62102f] underline">{currentPlaylist}</Link></div>
            <p className="text-neutral-400">{playlists[currentPlaylist].desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}