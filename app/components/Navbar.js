import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
    return (
      <div className="">
        {/* Desktop */}
        <nav className="hidden h-[100vh] w-24 lg:flex items-center justify-end my-auto">
          <div className="bg rounded-lg border-[#62102f] border flex flex-col w-20 gap-4 items-center py-2">
              <div className="text-center hover:text-[#8b1547] hover:underline"><Link href="/" ><Image src="/icons/home.ico" width="64" height="64" alt="Home" className="mb-0.5"></Image>Home</Link></div>
              {/* <div className="text-center hover:text-[#62102f] hover:underline"><Link href="/"><Image src="/icons/dark/browser.png" width="64" height="64" alt="Browser" className="mb-0.5"></Image>Browser</Link></div> */}
              <div className="text-center hover:text-[#8b1547] hover:underline"><Link href="/gallery"><Image src="/icons/gallery.ico" width="64" height="64" alt="Files" className="mb-0.5"></Image>Gallery</Link></div>
              {/* <div className="text-center hover:text-[#62102f] hover:underline"><Link href="/"><Image src="/icons/dark/steam.png" width="64" height="64" alt="Games" className="mb-0.5"></Image>Games</Link></div> */}
              <div className="text-center text-neutral-600 opacity-50"><Link href="/"><Image src="/icons/mail.ico" width="64" height="64" alt="Mail" className="mb-0.5"></Image>Mail</Link></div>
              <div className="text-center hover:text-[#8b1547] hover:underline"><Link href="/music"><Image src="/icons/music.ico" width="64" height="64" alt="Music" className="mb-0.5"></Image>Music</Link></div>
              <div className="text-center hover:text-[#8b1547] hover:underline"><Link href="/chat"><Image src="/icons/chat.ico" width="64" height="64" alt="Chat" className="mb-0.5"></Image>Chat</Link></div>
              <div className="text-center text-neutral-600 opacity-50"><Link href="/"><Image src="/icons/fishos.ico" width="64" height="64" alt="System" className="mb-0.5"></Image>System</Link></div>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="lg:hidden w-full h-24 flex items-center justify-center my-auto">
          <div className="bg rounded-lg border-[#62102f] border flex flex-row h-16 gap-4 items-center py-2 mx-4">
              <div className=""><Link href="/"><Image src="/icons/home.ico"  width="64" height="64" alt="Home"></Image></Link></div>
              <div className=""><Link href="/gallery"><Image src="/icons/gallery.ico"  width="64" height="64" alt="Files"></Image></Link></div>
              <div className=""><Link href="/music"><Image src="/icons/music.ico"  width="64" height="64" alt="music"></Image></Link></div>
              <div className="opacity-50"><Link href="/"><Image src="/icons/mail.ico"  width="64" height="64" alt="mail"></Image></Link></div>
              <div className=""><Link href="/chat"><Image src="/icons/chat.ico"  width="64" height="64" alt="Chat"></Image></Link></div>
          </div>
        </nav>
      </div>
    );
  }