"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
require('dotenv').config();

const playlists = {
  Schizotwinkcore: {
    emoji: "🐟",
    coverImage: "/music/schizo.jpg",
    link: "https://open.spotify.com/playlist/1gF5i7D4z0dBYqDZFiYNCg?si=M3ayQCZpSkmdggz-Up9A5w",
    desc: "Dear Federal Agents, all my posts are 100% serious & i am a threat to society",
    tracks: [
      "0uC12dZW5lmali7cC3N6VS",
      "0QAx0ZM4h0tPmOtXGHQVqU",
      "25SRFuJqLVrgApeFw4vFCb",
      "79bwd4ABtA6XubH5KNGoAr",
      "7Ed3Pt1iwsZo4Ro4kq2ujm",
      "4ZapAR5XjoPEtsDHUG6cad",
      "2SVjV9ASa0HZFnKVYVmvAD",
      "0Pie5DFAHHxpkONFUsAI6s",
      "4vwHBxN5OGtUqqUWvWClGd",
      "5xCDpuwEplVkm6C3eABxGy",
      "04HEIjbQv90voHu65MWmId",
      "0bMYQjhqOV3CoqE7OcRIBv",
      "3zixzwkqDUbkGYTz9QALGN",
      "66fOyR2G0kf8hH9NMTbIBQ",
      "1rU8C0FoUSQBVQLX1gwFH9",
      "4wFeMmJDlgkAxlQ07PbdGZ",
      "7c1wpOqC67svZIJR4N8nJA",
      "5fwGZXqyNtktLPVVUrVn0F",
      "2kwKk1pkWM6ywaC4gQaByB",
      "6ozkDhMnz56X34jZAJBioy",
      "3YUC6sdWjRHqBmD48Bb3ya",
      "7plKqrVNqhtQ6mmNEyBPNl",
      "0RD3NWnHlyBCRwgNZy8QAn",
    ],
  },
  Lobotomycore: {
    emoji: "🧠",
    coverImage: "/music/lobotomy.jpg",
    link: "https://open.spotify.com/playlist/52GEyJJcsIUdc03OkZPygT?si=6JO0UcQURf6bUt8r9HCL2w",
    desc: "Live Laugh Lobotomy",
    tracks: [
      "3YbMdHrZlBALzNw3LFyZWp",
      "10HsOaiUUodfgEfhwl6xiD",
      "0V7lyAvWChiwVdIB9jwR8g",
      "6AnVsHU2UBgotXkwIIiccl",
      "0V36ohSgy0Fq4MyqNORyFO",
      "54MIP08c9VnoWcs0hAZIkg",
      "6tpXGyQlgkRAp75N1aJD9z",
      "06yZoObVFRQqPhQNTdCHV5",
      "09mXjDUGHd0Wsc1XvK7AZ4",
      "3sGHk7kt8tobGR3NSkg9QO",
      "3AqSjZYCTQmrExko0zOIgF",
      "7t7LJcNxwfN9HhosWBBTSA",
      "2Pe4v3NYuvjeV1qCOMoAgR",
      "35qKVXD1R34c4KRUXHbJSb",
      "3QjzkfE5lCcs0JTrpqABpa",
      "0lJor2xK9yTKpR7EAxKAZk",
      "6fX36zMIsn8kAQFEBQIQWq",
      "2DBu4JWU3dwtPZZsDprrbs",
      "5aw7B9GYVO1GR1Mq2mQn83",
      "6QGIKvF1GAMWjYhBJA3rIy",
      "0Grb4paXdFDqSgGvPK07p4",
      "7bYwcYwvmMFtRrwOhwUwQm",
      "6wk75FvDzYWTirtXYvYEgH",
    ],
  },
  SuicidalGirlypopClassics: {
    emoji: "🎀",
    coverImage: "/music/girlypop.jpg",
    link: "https://open.spotify.com/playlist/6nMKr1GgKXLE0RZ7GQVlVq?si=CZElYHUPQ5K47pjrVv08rQ",
    desc: "meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow",
    tracks: [
        "1Myqi1Jjaz7n3M67BXQI4C",
        "49PU6Z1Mzlsf9OSu0pgw2u",
        "3okPUcnHOZ57Wzjc8cvaK9",
        "3hXwlWfjPADePN28QRxOn8",
        "1jxGTlQh6vJBgn6DCKP67O",
        "2CmzxBxC5mOlIWDLMRSAwZ",
        "7x6J9kurieqnLCYjLpkRbS",
        "5Sj3A3Nr0jLiJoet9fxuzz",
        "66FnhZd2teeIz8TZrr0omv",
        "0cfT50hK1oqNc47VahyegT",
        "0vqOcnyTzyCjmsoF51Ma4F",
        "3qaMprRWLGggArD14diXYz",
        "4UQijskfH7GRycjz77buzW",
        "7Kp3FKbdDiQEWm01H05Yu1",
        "6TU5KcMHtNgybYLnyUdQ5d",
        "0dlXj3DP3br6lhddh0Tr8k",
        "5dRQwKAbINDNsblNZ9b8ex",
        "4oULiI3U4vzm6QsqZH9HI9",
        "3xGqpwa2HDYOomN6X0pene",
        "6yt46G7lWn0oC2FEZZDsi6",
        "37KOuKPPKkwwWzp1Zg0etM",
        "4EyRzm7uOdc9PNV9lzs3Tr",
        "3MF3Zj7bYl1PdARlzqfwYC",
    ],
  },
};

const loadingAnimation2 = [
  "⋆｡˚ 𓆞 𓆝 𓆟 𓆞 𓆝 𓆟 ⋆｡˚",
  "⋆｡˚ 𓆝 𓆟 𓆞 𓆝 𓆟 𓆞 ⋆｡˚",
  "⋆｡˚ 𓆟 𓆞 𓆝 𓆟 𓆞 𓆝 ⋆｡˚",
];

const loadingAnimation1 = [
  "⋆｡˚ __ __ __ __ 𓆝 ⋆｡˚",
  "⋆｡˚ __ __ __ 𓆟 __ ⋆｡˚",
  "⋆｡˚ __ __ 𓆞 __ __ ⋆｡˚",
  "⋆｡˚ __ 𓆟 __ __ __ ⋆｡˚",
  "⋆｡˚ 𓆝 __ __ __ __ ⋆｡˚"
];

const loadingAnimation = [
  "[__________________<:3><]",
  "[_________________<:3><_]",
  "[________________<:3><__]",
  "[_______________<:3><___]",
  "[______________<:3><____]",
  "[_____________<:3><_____]",
  "[____________<:3><______]",
  "[___________<:3><_______]",
  "[__________<:3><________]",
  "[_________<:3><_________]",
  "[________<:3><__________]",
  "[_______<:3><___________]",
  "[______<:3><____________]",
  "[_____<:3><_____________]",
  "[____<:3><______________]",
  "[___<:3><_______________]",
  "[__<:3><________________]",
  "[_<:3><_________________]",
  "[<:3><__________________]",
  "[:3><___________________]",
  "[3><____________________]",
  "[><_____________________]",
  "[<______________________]",
  "[______________________<]",
  "[_____________________<:]",
  "[____________________<:3]",
  "[___________________<:3>]",
];

export default function MusicPlayer() {
  const [currentPlaylist, setCurrentPlaylist] = useState(Object.keys(playlists)[0]);
  const [tracksData, setTracksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [loadingFrame, setLoadingFrame] = useState(0);
  const [showPlaylistInfo, setShowPlaylistInfo] = useState(false); // New state for mobile view toggle
    const [playlistCache, setPlaylistCache] = useState({});
  // New state for skeleton loading
  const [initialLoad, setInitialLoad] = useState(true);
  
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingFrame((prev) => (prev + 1) % loadingAnimation.length);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
        setCurrentTrackIndex(null);

        setLoading(true);
        setError(null);
        
        const trackIds = playlists[currentPlaylist].tracks;
        const tracks = [];
        
        for (const id of trackIds) {
          try {
            const res = await fetch(`/api/spotify/tracks/${id}`);
            if (!res.ok) throw new Error('Failed to fetch track', res.status);
            
            const track = await res.json();
            tracks.push({
              ...track,
              id: id,
              previewUrl: `/preview/${id}.mp3`
            });
          } catch (err) {
            console.error(`Error fetching track ${id}:`, err);
          }
        }
        
        setTracksData(tracks);
      } catch (err) {
        console.error("Error fetching tracks:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [currentPlaylist]);

  const playTrack = (index) => {
    if (currentTrackIndex === index && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!audioRef.current || currentTrackIndex === null) return;

    const playAudio = async () => {
      try {
        audioRef.current.src = tracksData[currentTrackIndex]?.previewUrl || '';
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback failed:", err);
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      playAudio();
    } else {
      audioRef.current.pause();
    }
  }, [currentTrackIndex, isPlaying, tracksData]);

  const handleNext = () => {
    if (currentTrackIndex === null || currentTrackIndex >= tracksData.length - 1) {
      // End of playlist - pause and reset to first track
      setCurrentTrackIndex(0);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex === null || currentTrackIndex <= 0) {
      setCurrentTrackIndex(tracksData.length - 1);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (currentTrackIndex === null) {
      setCurrentTrackIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg rounded-lg border-[#62102f] border w-full h-full flex flex-col">
      <audio
        ref={audioRef}
        onEnded={handleNext}
        onError={() => setIsPlaying(false)}
      />
      
      {/* main window header */}
      <div className="p-2 border-b-[#62102f] border-b flex justify-between">
        <div className="ml-2">FishTunes</div>
        <div className="hover:text-[#8b1547] mr-2">
          <Link href="/">x</Link>
        </div>
      </div>

      {/* mobile top bar */}
      <div className="lg:hidden p-2 text-center  flex justify-between items-center">
        <button 
          onClick={() => setShowPlaylistInfo(!showPlaylistInfo)}
          className="ml-2 text-lg"
        >
          {showPlaylistInfo ? '×' : '☰'}
        </button>
        <Link 
          href={playlists[currentPlaylist].link}  
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#62102f] font-bold underline"
        >
          {currentPlaylist}
        </Link>
        <div className="w-6"></div> {/* Spacer for balance */}
      </div>

      {/* main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* left sidebar - hidden on mobile */}
        <div className="hidden lg:block w-1/5 border-r border-[#62102f] flex-col">
          <div className="p-4 flex-1 overflow-y-hidden max-h-[30rem]">
            <img
              src={playlists[currentPlaylist].coverImage}
              alt={`${currentPlaylist} cover`}
              className="w-full rounded-lg"
            />
            <div className="mt-6 mb-2">
              <Link href={playlists[currentPlaylist].link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-[#62102f] underline">
                {currentPlaylist}
              </Link>
            </div>
            <p className="text-neutral-400 h-24">{playlists[currentPlaylist].desc}</p>
          </div>

          <div className="p-4 border-t border-t-[#62102f]">
            <h2 className="text-lg font-bold mb-4">Playlists</h2>
            <div className="overflow-y-auto max-h-[200px]">
              {Object.keys(playlists).map((playlist) => (
                <button
                  key={playlist}
                  onClick={() => {
                    if (currentPlaylist !== playlist) {
                      setCurrentPlaylist(playlist);
                    }
                  }}
                  className={`w-full text-left p-2 mb-2 rounded flex items-center ${
                    currentPlaylist === playlist
                      ? "bg-[#62102f] text-white"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  <span>{playlist}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* music grid container */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile playlist info view (replaces tracks when toggled) */}
          {showPlaylistInfo ? (
            <div className="lg:hidden p-4 pt-0 overflow-y-auto flex flex-col gap-4">
              <div className="flex gap-4 h-1/3">
                <img
                  src={playlists[currentPlaylist].coverImage}
                  alt={`${currentPlaylist} cover`}
                  className="mx-auto rounded-lg mb-6 w-1/3 h-full"
                />
              <div className="mb-4 w-2/3">
                <p className="text-neutral-400 mb-4">{playlists[currentPlaylist].desc}</p>
              </div>
              </div>
              
              
              <div className="space-y-2 h-2/3">
                {Object.keys(playlists).map((playlist) => (
                  <button
                    key={playlist}
                    onClick={() => {
                      if (currentPlaylist !== playlist) {
                        setCurrentPlaylist(playlist);
                        setShowPlaylistInfo(false);
                      }
                    }}
                    className={`w-full text-left p-3 rounded flex items-center ${
                      currentPlaylist === playlist
                        ? "bg-[#62102f] text-white"
                        : "text-neutral-400 hover:bg-neutral-800"
                    }`}
                  >
                    <span>{playlist}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Original tracks view */
            <div className="flex-1 p-4 overflow-y-auto">
              {loading ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <div className="text-center font-mono whitespace-pre">
                    {loadingAnimation[loadingFrame]}
                  </div>
                  <div className="text-center text-xl">Loading tracks</div>
                </div>
              ) : error ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-xl text-red-500">Error: {error}</div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-2">
                    {tracksData.map((track, index) => (
                      <div 
                        key={track.id} 
                        className={`p-3 rounded-lg cursor-pointer hover:bg-neutral-800 ${
                          currentTrackIndex === index ? 'bg-[#62102f]' : 'bg-neutral-900'
                        }`}
                        onClick={() => playTrack(index)}
                      >
                        <div className="flex items-center">
                          <div className="mr-2 w-4 h-4 md:w-8 md:h-8 flex items-center justify-center">
                            {currentTrackIndex === index && isPlaying ? (
                              <span className="text-white">&gt;</span>
                            ) : (
                              <span className="text-neutral-400">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <div className="font-medium text-white truncate">{track.name}</div>
                            <div className="text-sm text-neutral-400 truncate">
                              {track.artists[0]?.name}
                            </div>
                          </div>
                          <div className="text-xs text-neutral-500 hidden md:block">
                            {track.previewUrl ? (
                              <span>30s Preview</span>
                            ) : (
                              <span className="text-red-400">No Preview</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href={playlists[currentPlaylist].link} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#62102f] underline text-center block">
                      Full Playlist
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

  {/* controls section - hidden while loading */}
  {!loading && !error && (
    <div className="border-t border-[#62102f] p-3 ">
      <div className="flex items-center justify-around">
        <div className="md:w-1/3 flex items-center min-w-0">
          {currentTrackIndex !== null && tracksData[currentTrackIndex] && (
            <Link href={`https://open.spotify.com/track/${tracksData[currentTrackIndex].id}`} target="_blank" rel="noopener noreferrer" className="">
              <div className="flex items-center">
              <img 
                src={tracksData[currentTrackIndex].album.images[0]?.url} 
                alt="Album cover" 
                className="w-12 h-12 rounded mr-3 flex-shrink-0"
              />
              <div className="min-w-0 truncate">
                <div className="font-medium text-white text-sm truncate">
                  {tracksData[currentTrackIndex].name}
                </div>
                <div className="text-xs text-neutral-400 truncate">
                  {tracksData[currentTrackIndex].artists[0]?.name}
                </div>
              </div>
              </div>

            </Link>
          )}
        </div>
        
        <div className="flex-1 flex items-center justify-end md:justify-center md:space-x-6">
          <button 
            onClick={handlePrevious}
            className="text-white hover:text-[#62102f] text-xl hidden md:block"
          >
            &lt;
          </button>
          <button 
            onClick={handlePlayPause}
            className="bg-[#62102f] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8b1547] flex-shrink-0"
          >
            {isPlaying ? 'X' : 'O'}
          </button>
          <button 
            onClick={handleNext}
            className="text-white hover:text-[#62102f] text-xl hidden md:block"
          >
            &gt;
          </button>
        </div>
        
        <div className="w-1/3 text-right text-xs text-neutral-400 hidden md:block">
          {currentTrackIndex !== null && tracksData[currentTrackIndex] && (
            <div className="truncate">
              <Link href={`https://open.spotify.com/track/${tracksData[currentTrackIndex].id}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Listen on Spotify
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )}
</div>
  );
}
