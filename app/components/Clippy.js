import Link from "next/link";

export default function Clippy() {
    return (
        <div className="bg rounded-lg border-[#62102f] border p-4 py-2">
            <div className="flex items-center justify-center gap-4 ">
                <img src="/chat/clippy.png" alt="" className="w-24"/>
                <div className="">
                    <p>Have fun and be(have) urself,<br /> else i&apos;ll take your kneecaps</p>
                    <div className="flex items-center justify-center gap-12 pt-4">
                        <button className="border border-[#62102f] rounded-lg p-2 px-4 hover:text-[#8b1547]">YES</button>
                        <button className="border border-[#62102f] rounded-lg p-2 px-4 hover:text-[#8b1547]">YES</button>
                    </div>
                </div>
            </div>
        </div>

    );
}