


export default function Video() {
    return (
<div className="hidden w-1/3 lg:flex items-start h-[100vh]">
<div className="bg rounded-lg border-[#62102f] border w-full overflow-hidden mt-12 ml-4">
    <div className="p-2 border-b-[#62102f] border-b flex justify-between">      
      <div className="">cat.mp4</div>
      <div className="">- x</div>
    </div>
    <video width="1152" height="480" controls preload="none">
      <source src="/the_cassandra_cat_1963.mp4" type="video/mp4" />
      <track
        default
        src="/sub.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support this video 3:
    </video>
  </div>
</div>
    );
}
