import React from "react";
import Link from "next/link";

const MusicCard = ({ imageUrl, listenUrl, year, name }) => {
  return (
    <div className="flex justify-center music-card items-center flex-col">
      <Link href={`/music/${name}`} className="card-music">
     
          <img
            src={imageUrl}
            alt="music"
            className="object-contain w-full h-full rounded-lg"
          />
     
      </Link>
      <div className="w-full">
        <div className="flex justify-between items-center py-2 px-3 w-full">
          <a href={listenUrl} target="_blank" className="text-[1.5rem]">
            Listen
          </a>
          <span className="text-[1.2rem]">{year}</span>
        </div>
      </div>
    </div>
  );
};

const Music = () => {
  const musicData = [
    {
      imageUrl: "/images/Summer downloaded from SpotiSongDownloader.com_.jpg",
      listenUrl: "https://open.spotify.com/album/4uiuv0HTQz0tK1qaKwuRGc?go=1",
      year: "2024",
      name: "summer",
    },
    {
      imageUrl: "/images/isoloph.jpg",
      listenUrl: "https://lnk.dmsmusic.co/dyzon_isolophilia-1/ms-spotify-9",
      year: "2024",
      name: "isolophilia",
    },
    {
      imageUrl: "/images/spring.jpg",
      listenUrl: "https://found.ee/odyzon-spring-world/ms-spotify-4",
      year: "2024",
      name: "spring-world",
    },
    {
      imageUrl: "/images/Arctic.jpg",
      listenUrl: "https://lnk.dmsmusic.co/dyzon_arcticdream/ms-spotify-9",
      year: "2024",
      name: "arctic-dream",
    }
  ];

  return (
    <>
      <div className="music-grid">
        {musicData.map((music, index) => (
          <MusicCard key={index} {...music} />
        ))}
      </div>
      <a href="#" className="mt-5 mb-2">
        <button className="px-10 py-3 font-bold border rounded shadow-md">
          View More
        </button>
      </a>
    </>
  );
};

export default Music;
