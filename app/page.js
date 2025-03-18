'use client';
import Link from 'next/link';
import Image from 'next/image';
import Fish from './components/Acab';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div  className="flex items-center justify-center min-h-full"><div className="bg-black bg-opacity-50 rounded-lg border-[#62102f] border py-2 px-4"><p className="">Loading FishOS...</p></div></div>;  // You can show a loading spinner until it's ready
  }

  return (
    <div className="w-full h-full grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-1">
      <div className="lg:col-start-2 lg:row-start-2"><Fish></Fish></div>
    </div>
  );
}
