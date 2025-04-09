'use client';
import Chatbox from '../components/Chatbox';
import Logo from '../components/about/Logo';
import Me from '../components/about/Me';
import Thoughts from '../components/about/Thoughts';
import Video from '../components/Video';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Chat() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);



  if (!isClient) {
    return <div  className="flex items-center justify-center min-h-full"><div className="bg-black bg-opacity-50 rounded-lg border-[#62102f] border py-2 px-4"><p className="">Loading FishOS...</p></div></div>;  // You can show a loading spinner until it's ready
  }

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-rows-3 lg:grid-cols-5 lg:px-0 overflow-x-scroll">
        <div className="hidden lg:block col-start-2 row-start-1"><Logo ></Logo></div>
        <div className="col-start-1 lg:col-start-5 row-start-2 lg:row-start-1 row-span-6"><Me className=""></Me></div>
        <div className=""><Thoughts></Thoughts></div>
        <div className=""><Video></Video></div>
    </div>
  );
}