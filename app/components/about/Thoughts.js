const quotes = [
    { text: "meow", date: "2025-04-01" },
    { text: "they upped the jiggle physics on my balls today :/", date: "2025-04-02" },
    { text: "kill twink with rock", date: "2025-04-04" },
    { text: "your flesh will embarrass you", date: "2025-04-05" },
    { text: "^_^ :3 >.< :p ^.^", date: "2025-04-08" },    
    { text: "it really makes sense if you think about it..", date: "2025-04-08" },
    { text: "i am normal and sane", date: "2025-04-09" },

  ];
  
  export default function Thoughts() {
    return (
      <div className="bg rounded-lg border-[#62102f] border w-full h-full lg:mb-20 pb-[2.5rem] overflow-hidden">
        <div className="p-2 border-b-[#62102f] border-b flex justify-between">      
          <div className="ml-2 font-semibold text-lg">&lt;:3&gt;&lt;.net</div>
          <div className="hover:text-[#8b1547] mr-2"></div>
        </div>
        <div className="p-2 overflow-y-auto h-full flex gap-2 flex-col-reverse">
          {quotes.map((quote, idx) => (
            <div key={idx} className="border-[#62102f] border rounded-lg p-2 bg">
              <div className="text-sm text-gray-300 italic">{quote.text}</div>
              <div className="text-xs text-right text-gray-500 mt-2">
                {new Date(quote.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  