'use client';
import Link from 'next/link';
import Image from 'next/image';
import Chatbox from '../components/Chatbox';
import Acab from '../components/Acab';
import Fish from '../components/Fish';
import Clippy from '../components/Clippy';

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
    <div className="w-full h-full grid grid-cols-1 grid-rows-3 lg:grid-rows-3 lg:grid-cols-3 px-4 lg:px-0">
        <div className="hidden col-start-1 row-start-1 my-auto lg:block mx-auto"><Clippy></Clippy></div>
        <div className="hidden lg:block col-start-2 row-start-2"><Acab></Acab></div>
        {/* <div className="col-start-1 row-start-1 lg:hidden"><Fish></Fish></div> */}
        <div className="flex flex-col-reverse lg:mb-24 row-span-3 col-start-1 row-start-1 lg:col-start-3 lg:row-start-2 mt-8 lg:mt-0"><div className="h-full"><Chatbox></Chatbox></div></div>
    </div>
  );
}