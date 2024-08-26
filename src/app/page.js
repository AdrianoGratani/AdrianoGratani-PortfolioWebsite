'use client'

import { Hind } from "next/font/google";
import AboutMe from "./components/AboutMe/AboutMe";
import CallToAction from "./components/CallToAction/CallToAction";
import HomeComponent from './components/HomeComponent/HomeComponent';
import MySlider from "./components/SliderCard/MySlider";

const hind = Hind({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
})

export default function Home() {
  return (
    <main className="min-h-screen relative">
	    <HomeComponent />
	    <div
		    id="portfolio"
		    className="mt-0 pt-5 -mb-40 "
		    style={{
			backgroundImage: "linear-gradient(-62deg, #eef7fb 0 45%, white 0% 100%)",
			width: "100%"
		    }}
	    >
	    	<div className="container m-auto">
	    		<p className="text-[300px] text-[#F7fbfd] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
			style={{
				transform: "translate(0px, -20px)"
			}}
	    		>
	    		Portfolio
	    		</p>
	    		<div
				style={{
				transform:"translate(0px, -250px)"
				}}
	    		>
				<p
				className="text-[#48afde] md:pl-[80px] px-5 font-extrabold text-5xl"
				>
				Recent Works
				</p>
				<p
				className={`max-w-4xl md:pl-[80px] px-5 text-[16px] text-[#47626d] leading-8 mt-5 ${hind.className}`}
				>
				In this section you can check five recent projects of mine. I created games such as PacMan, Pong and Space Invaders, a portfolio website in Sass, and also 
				a few lessons for basic algorithm and data structure. 
				<br></br>
				Please, click on each link to see more. There&apos;s a link attached to my GitHub profile as well where you can read 
				and download the source code as well.
				</p>
	    		</div>
	    	</div>
	    	<div
			style={{transform: "translate(0px, -170px" }}>
	    		<MySlider />
	    	</div>
	    </div>

	    <AboutMe />
	    <CallToAction />
    </main>
  );
}
