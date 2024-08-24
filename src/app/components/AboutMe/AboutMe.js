"use client"; // hooks are NOT allowed in Server Components;

import { AboutData } from "@/app/data";
import { Hind } from "next/font/google";
import React, { useState } from "react";

import "./aboutme.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunction = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);
    setTimeout(() => myFunction(data), 600);
  };

  const handleNext = () => {
    if (selectedIndex < 5) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[5], 5);
    }
  };

  return (
    <React.Fragment>
      <div
        id="about-me-component"
        className="bg-[#e0f3fd] pt-[250px] mt-10 pb-[100px] lg:pb-[600px] relative lg:h-[800px] "
      >
        <div className="container m-auto ">
          <h1 className="text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px] text-[#eaf7fc]">
            AboutMe
          </h1>
          <h1 className="relative font=recoletaBlack text-5xl text-[#48afde] mb-5 -mt-40 md:px-24 px-5  ">
            About Myself
          </h1>
          <h4 className="relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24  ">
            My life... in short!
          </h4>
          <section className="relative flex flex-col lg:flex-row px-5 md:px-24 ">
            <p
              className={`w-full  text-[#223740] mr-0 mb-5 lg:mr-4 ${hind.className} `}
            >
              Hi there, welcome to my website!
              My name is Adriano Gratani, here I'm going to tell you something about me! I was born and raised in Sardinia, Italy.
              There, I studied Classical Guitar at the college and I worked in that field for a few years. 
              Soon I felt lack of enthusiasm in my pupils, and too much distraction in their eyes: because of my passion towards music and its discipline, I though there
              was no point striving for such a career, so I moved to other paths (though Classical music is still a great passion of mine).
              <br></br>

              I started travelling around europe, while doing different jobs, until I moved to Seoul, South Korea, where I lived for about 18 months.
              It was in Seoul that I firstly discovered the existence of cooding meetups. It was June 2023 (time really flies..) I attended many meetups in which I had the privilege to meet
              many coders and wanna be coders as well - just like me!
              <br></br>

              At first was really, really intimidating: declaring variables, function parameters, recursion and async methods... I just couldn't get it!!
              So, after one month I decided to apply for a Coursera Front-end developer program (The most famous one, which is provided by a famous SNS company). Bad decision!!! 
              (even though many peers at meetups told me not to choose that... My fault..) It was mostly theory, and I didn't like the practical exercise. But I supposed it was good to get the degree,
              so I decided to stick to it 'till the end. 
              after finishing that, I built many projects, mostly in ReactJs, but I also learned Java and studied many algorithms (as you can see in my portfolio section).
              Most of my project are retro games because coding a videogame requires a lot of problem-solving abilities and a bit of algorithms as well... So in my opinion
              a video game can be the best showcase of anyone's skill!!!
              <br></br>
              Over this year, I prepared mostly for front-end positions, so I studied JavaScript, the React Library, and NextJs framework (actually, this website
              is bulit in NextJs, TailwindCss and JavaScript), plus HTML, CSS, and Bootstrap as well! 

            </p>

          </section>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #eaf7fc 70%, #48afde 30%)",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex flex-col m-auto sm:flex-row px-5 md:px-24 mt-[50px] sm:mt-0 transform translate-y-[-100px] ">
          <div className="hidden sm:flex w-full sm:w-1/2 lg:w-7/12 mt-[100px]">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6  mr-0 lg:mr-10 ">
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#48afde -5px 10px 0px" }}
                  className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center items-center ${
                    selectedIndex === index ? " translate-x-2" : ""
                  }`}
                >
                  <div className="w-16 h-16 sm:w-10 sm:h-10 lg:w-16 lg:h-16 ">
                    <img src={item.img} alt="internet issues" />
                  </div>
                  <h4
                    className={` 
											text-center text-sm lg:text-xl font-recoletaBold transition-colors duration-500 group-hover:text-white text-[#47626d] mt-3
											selectedIndex === index
												? "text-white"
												: "" 
											`}
                  >
                    {item.title}
                  </h4>
                  <div
                    className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-green-500 flex justify-center items-center font-bold text-white font-recoletaBold text-xl ${
                      selectedIndex === index
                        ? "opacity-100 -rotate-12"
                        : "group-hover:rotate-12"
                    }
										`}
                  >
                    {item.count}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-5/12 overflow-visible px-0 sm:pl-6 xl:px-10 mt-[150px]">
            <div className="bg-white rounded-xl p-10 xl:p-12 shadow-accent-color relative ">
              <section
                className={`fade-left overflow-hidden ${
                  isFaded ? "fade-out" : ""
                }`}
              >
                <p
                  className={`text-[#47626d] ${hind.className} text-lg sm:text-base lg:text-xl transition duration-500 transform opacity-100 `}
                >
                  My Tech skills are:
                </p>
                <h2 className="font-recoletaBold text-[#47626d] text-3xl md:text-3xl sm:text-2xl mb-6 w-44 md:w-56 transition duration-500 transform opacity-100">
                  {mapData.title}
                </h2>
                <ul
                  className={`${hind.className} font-[300] list-disc text-[#47626d] ml-8 lg:ml-10 text-base lg:text-lg  transition duration-500 transform opacity `}
                >
                  {mapData.array.map((skills) => (
                    <li>{skills}</li>
                  ))}
                </ul>
              </section>
              <div
                className={`absolute perspective-500 -top-7 sm:-top-30 right-0 sm:right-20 card ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <div className="card-inner">
                  <div className="rounded-2xl cursor-pointer text-7xl xl:text-9xl font-recoletaBlack text-white bg-[#47626d] p-5 xl:p-8 w-28 h-28 xl:w-48 xl:h-48 transform transition duration-500 transform-preserve -rotate-6 ">
                    <span className="text-2xl xl:text-6xl mr-2 sm:mr-3">*</span>
                    {mapData.count}
                  </div>
                </div>
              </div>
              <div className="absolute right-10 -bottom-5 flex">
                <a
                  className="w-12 h-12 rounded-xl mr-1 transform transition duration-500  cursor-pointer  hover:-translate-y-1 hover:shadow-lg -rotate flex justify-center items-center bg-[#47626D]"
				  onClick={handlePrevious}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </a>
                <a
                  className="w-12 h-12 rounded-xl bg-[#47626d] mr-1 transform transition duration-300 cursor-pointer hover:translate-y-1 flex justify-center items-center"
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
