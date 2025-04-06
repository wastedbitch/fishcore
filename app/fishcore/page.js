'use client';
import Link from "next/link";

export default function Game() {

  return (
    <div className="bg rounded-lg border-[#62102f] border w-full h-full overflow-hidden lg:mb-20 pb-[2.5rem]">
        <div className="p-2 border-b-[#62102f] border-b flex justify-between">      
            <div className="ml-2">fishcore.exe</div>
            <div className="hover:text-[#8b1547] mr-2"><Link href="/">x</Link></div>
        </div>
        <iframe
            src="/games/fishcore/fishcore.html"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className=""
        />
    </div>
  );
}