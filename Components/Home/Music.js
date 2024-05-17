import React from "react";

const Music = () => {
  return (
    <>
    <div className=" music-grid   ">
      <div className="flex justify-center music-card items-center   flex-col ">
        <a href="#" className=" card-music">
          <img
            src="/images/Summer downloaded from SpotiSongDownloader.com_.jpg"
            alt="music"
            className="object-contain w-full h-full rounded-lg"
          />
        </a>
        <div className="w-full ">
          <div className="flex justify-between items-center py-2 px-3 w-full ">
            <a href="https://open.spotify.com/album/4uiuv0HTQz0tK1qaKwuRGc?go=1" target="_blank"  className="text-[1.5rem]">
              Listen
            </a>
            <span className="text-[1.2rem]">2024 </span>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center music-card items-center   flex-col ">
        <div className=" card-music ">
          <img
            src="/images/isoloph.jpg"
            alt="music"
            className="object-contain w-full h-full rounded-lg  "
          />
        </div>
        <div className="w-full ">
          <div className="flex justify-between items-center py-2 px-3 w-full ">
            <a href="https://lnk.dmsmusic.co/dyzon_isolophilia-1/ms-spotify-9" target="_blank" className="text-[1.5rem]">
              Listen
            </a>
            <span className="text-[1.2rem]">2024 </span>
          </div>
        </div>
      </div>{" "}
      <div className="flex justify-center music-card items-center   flex-col ">
        <div className=" card-music">
          <img
            src="/images/spring.jpg"
            alt="music"
            className="object-contain w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full ">
          <div className="flex justify-between items-center py-2 px-3 w-full ">
            <a href="https://found.ee/odyzon-spring-world/ms-spotify-4" target="_blank"  className="text-[1.5rem]">
              Listen
            </a>
            <span className="text-[1.2rem]">2024 </span>
          </div>
        </div>
      </div>   <div className="flex justify-center music-card items-center   flex-col ">
        <div className=" card-music">
          <img
            src="/images/Arctic.jpg"
            alt="music"
            className="object-contain w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full ">
          <div className="flex justify-between items-center py-2 px-3 w-full ">
            <a href="https://lnk.dmsmusic.co/dyzon_arcticdream/ms-spotify-9" target="_blank"  className="text-[1.5rem]">
              Listen
            </a>
            <span className="text-[1.2rem]">2024 </span>
          </div>
        </div>
      </div>
  
    </div>
    <a className="mt-5 mb-2 ">
        <button
            
        className="px-10 py-3 font-bold border rounded shadow-md"
      >
        View More
      </button>
      </a>
      </>
  );
};

export default Music;
