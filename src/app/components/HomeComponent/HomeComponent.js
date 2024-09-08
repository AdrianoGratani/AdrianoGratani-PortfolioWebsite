import { Hind } from "next/font/google";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponent() {
  var settings = {
    // slider settings, for responsiveness purpose;
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(62deg, #eef7fb 0 50%, #48afde 0% 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#47aede] text-3xl md:text-base lg:text-2xl	${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3">
                    I&apos;m Adriano
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    Your Web Dev! &amp; UI enthusiast
                  </h2>
                  {/* <a> is used to implement the body. */}
                  <a
                    href="/#portfolio"
                    className={`cursor-pointer inline-block bg-[#47aede] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xl lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    Projects
                  </a>
                  {/* link al PDF (scaricabile) del tuo CV  */}
                  <a
                    href="(ENG) CV-AdrianoGratani.pdf.png"
                    download="(ENG) CV-AdrianoGratani.pdf.png"
                    className={`ml-10 cursor-pointer inline-block bg-[#47aede] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xl lg:text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 pt=[50px] md:pt-[130px] md:bg-transparent bg-[#d9eef7] md:pt[130px] md:col-span-7">
              {/* profile picture container: */}
              <div className="container m-auto">
                <div className=" max-w-sm  m-auto">
                  <img className="m-auto rounded-[5%] opacity-85" src="/adrianosmall2.jpg" decoding="async" alt="profile picture of Adriano" />
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white 	rounded-2xl z-20"
                style={{
                  boxShadow: "#48afde -10px 25px 50px 10px",
                }}
              >
                {/* skillbox: */}
                <div className="lg:py-3 md:py-2 sm:py-6 cursor-all-scroll">
                  <Slider {...settings}>
                    <img src="/sass.png" alt="sass" className="h-12" />
                    <img src="/reactjs.png" alt="reactjs" className="h-12" />
                    <img src="/nextjs.png" alt="nextjs" className="h-12" />
                    <img src="/java5.png" alt="java" className="h-12" />
                    <img src="/nodejs.png" alt="nodejs" className="h-12" />
                    <img
                      src="/expressjs.png"
                      alt="expressjs"
                      className="h-12"
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
