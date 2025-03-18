import Link from "next/link";

export default function Chatbox() {
    return (
        <div className="bg rounded-lg border-[#62102f] border w-full h-full overflow-hidden lg:mb-20 pb-12">
          <div className="p-2 border-b-[#62102f] border-b flex justify-between">      
            <div className="ml-2">fishchat.exe</div>
            <div className="hover:text-[#8b1547] mr-2"><Link href="/">x</Link></div>
          </div>
          <iframe src="https://www5.cbox.ws/box/?boxid=955934&boxtag=7SVaRe" width="100%" height="100%" allowtransparency="yes" allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="auto"></iframe>	
        </div>
    );
}