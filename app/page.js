import Navbar from "@/Components/Home/Navbar";
import "./styles/home.css";
import Image from "next/image";
import Feeds from "@/Components/Home/Feeds";
import Music from "@/Components/Home/Music";
import Link from "next/link";
import Events from "@/Components/Home/Events";
import About from "@/Components/Home/About";
import Footer from "@/Components/Home/Footer";

const page = async () => {
  return (
    <>
      <div className="w-0 h-0  " id='top'></div>
      <Navbar />
      <div className=" hero-section">
        <div className="w-full h-full  hero-bg">
          {/* <Image
            src={`/images/background-hero.jpg`}
            alt="odyzon hero background"
            fill="true"
            className="object-contain"
          /> */}
          <h1 className="out-now text-[3rem]">Odyzon</h1>
        </div>
      </div>
      <div className="w-screen h-screen  "></div>
      <div id='feed' className="feeds  z-[11] relative bg-white">
        <div  className="feed-heading">
          <h2>Feeds</h2>
        </div>

        <div   className="flex feed-container flex-row  justify-center items-center w-full h-full    ">
          <Feeds />
        </div>
      </div>
      <div id='discography' className="feeds  z-[11] relative bg-white">
        <div   className="feed-heading discropgraphy-heading">
          <h2>Discography</h2>
        </div>

        <div className="flex   justify-around items-center w-full h-full flex-wrap   ">
          <Music />
        </div>
      </div>
      <div  className="feeds  z-[11] relative bg-white">
        <div className="feed-heading discropgraphy-heading">
          <h2>Events</h2>
        </div>

        <div id='events' className="flex   justify-around items-center w-full h-full flex-wrap   ">
          <Events />
        </div>
      </div>
      <div className="feeds about  z-[11] relative bg-black ">
        <div className="feed-heading about-heading">
          <h2  className=" ">About</h2>
        </div>

        <div id='about' className="flex   justify-around items-center w-full h-full flex-wrap   ">
          <About />
        </div>
      </div>{" "}
      <div className="feeds about  z-[11] relative bg-black ">
        
        <div className="flex   justify-around items-center w-full h-full flex-wrap   ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
