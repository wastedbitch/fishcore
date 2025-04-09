export default function Me() {
    return (
        <div className="bg rounded-lg border-[#62102f] border w-full h-full overflow-hidden lg:mb-20 pb-[2.5rem]">
          <div className="p-2 border-b-[#62102f] border-b flex justify-between">      
            <div className="ml-2">About.json</div>
            <div className="hover:text-[#8b1547] mr-2"></div>
          </div>
          <div className="">
            <img src="/ass/luv.jpg" alt="Me irl" />
            <div className="">
                <ul>
                    <li>Name: Fish</li>
                    <li>Age: Time is Relative</li>
                    <li>Sex: ✔</li>
                    <li>Location: Space Atlantis</li>
                    <li>Status: mrow :3</li>
                    <li>Last Updated:</li>
                </ul>
            </div>
          </div>
        </div>
    );
}