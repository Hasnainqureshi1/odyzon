import React from "react";
import Navbar from "@/Components/Home/Navbar";
import "../../styles/home.css";

// Define your music data
const musicData = {
  summer: {
    Spotify:
      "https://open.spotify.com/intl-fr/track/32S2Fg82FshlH74C2Cm2iZ?si=ea21ea8dd34c482c",
    Deezer: "https://deezer.page.link/No4nXNQbJphM8WdLA",
    "Apple Music": "https://music.apple.com/si/album/summer-single/1740293152",
    YouTube: "https://www.youtube.com/watch?v=Twix-iQZA0k",
  },
  isolophilia: {
    Spotify:
      "https://open.spotify.com/intl-fr/track/7FnzQqOExicPivv81gYUvi?si=073c1d003d744b58",
    Deezer: "https://deezer.page.link/zNX8KzZQ8YY51F6E7",
    "Apple Music":
      "https://music.apple.com/si/album/isolophilia-single/1736819224",
    YouTube: "https://www.youtube.com/watch?v=Ze2d0CqP-gg",
  },
  "spring-world": {
    Spotify:
      "https://open.spotify.com/intl-fr/track/2AmuYLoQkeWhzSm5vbWWHq?si=001ebfa59ec44997",
    // No Deezer link
    "Apple Music":
      "https://music.apple.com/us/album/spring-world/1736819052?i=1736819053",
    YouTube: "https://www.youtube.com/watch?v=M1GL9TzKVrQ",
  },
  "arctic-dream": {
    Spotify:
      "https://open.spotify.com/intl-fr/track/4ExstbMaLPy1V8ANOSHEIO?si=65ccfb3e4a9c4760",
    Deezer: "https://deezer.page.link/DPeU7U4GHfdVo6KQ7",
    "Apple Music":
      "https://music.apple.com/fr/album/arctic-dream/1736428650?i=1736428651",
    YouTube:
      "https://www.youtube.com/watch?v=WpmPAYO9daE&ab_channel=%C3%98dyzon-Topic",
  },
  // Add more music entries here...
};

const Page = ({ params }) => {
  const { musicname } = params;
  const musicDetails = musicData[musicname];

  if (!musicDetails) {
    return (
      <div className="bg-black text-white w-full h-screen flex justify-center items-center">
        {" "}
        Music not found
      </div>
    );
  }

  return (
    <div className="h-screen bg-black">
      <div className="w-0 h-0" id="top"></div>
      <Navbar />
      <div className="pt-[10px] music-detail-container flex-col h-full w-full bg-black">
        <div className="mt-10 text-white flex flex-col music-detail p-5">
          <div className="flex flex-row text-white w-full justify-between items-center pr-5">
            <h1 className="text-[1.8rem] font-[400]">{musicname} </h1>
          </div>
          <div className="music-detail-box">
            <div className="flex flex-1 flex-col w-full h-full">
              {/* Display music image */}
              <div className="mt-3 w-full h-full">
                <img
                  src={`/images/${musicname}.jpg`}
                  className="  w-full h-auto max-w-[34rem] max-h-[32rem] object-cover     rounded-md "
                  alt={musicname}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-row w-full pr-5">
                <h1 className="text-[1.8rem] font-bold">About Album</h1>
              </div>
              {/* Display music description */}
              <div>
                <p className="text-white ">
                  Artist: <span className="text-gray-300">Odyzon</span>
                </p>
                <p className="text-white">
                  Label: <span className="text-gray-200"> </span>
                </p>
                <p className="text-white ">
                  Release Date:{" "}
                  <span className="text-gray-200">20-5-2024 </span>
                </p>
              </div>

              <div className="flex flex-row w-full  mt-8">
                <h1 className="text-[1.8rem] font-bold"> Available On</h1>
              </div>
              {/* Display links for different platforms */}
              {Object.entries(musicDetails).map(([platform, url]) => (
                <div key={platform} className="mt-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2  hover:underline"
                  >
                    <h1 className="text-[1.6rem] font-[400]">{platform}</h1>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
