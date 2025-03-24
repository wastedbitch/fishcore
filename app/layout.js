import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

export const metadata = {
  title: {default: 'FISHCORE',template: 'FISH-%s'},
  description: "FISH'S IN SPACE, ALL'S RIGHT WITH THE WORLD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="text-white font-ibm-500 fish-cursor">
        <div className="visible lg:invisible absolute text-gray-600 flex items-center justify-center w-[100vw] text-right text-nowrap "><marquee>&lt;:3&gt;&lt; view on desktop for the full fishcore experience! &lt;:3&gt;&lt; don&apos;t be a chum, use a computer!! &lt;:3&gt;&lt;</marquee></div>
        <div className="bg-[url(/ass/starz.gif)] w-[100%]] h-[100%] overflow-hidden grid grid-cols-1 grid-rows-9 lg:grid-rows-1 lg:grid-cols-14 pb-6 lg:pb-0 lg:pr-6">
          <div className="row-span-8 lg:col-span-13 pt-8 px-4 lg:px-0 lg:py-4">{children}</div>
          <div className="lg:row-start-1"><Navbar></Navbar></div>
        </div>
      </body>
    </html>
  );
}