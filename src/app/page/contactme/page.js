"use client";
import { Hind } from "next/font/google";
import React, { useState } from "react";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones, FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
// import { ToastClassName, ToastContainer, toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function page() {
  const [state, setState] = useState({ name: "", email: "", phoneNumber: "", subject: "", message: "", });
  const [loading, setLoading] = useState(false);
  
  const clearState = () => {  setState({  name: "", email: "", phoneNumber: "", subject: "", message: "", });  };

  const handleChange = (e) => { const key = e.target.name;  const value = e.target.value;  setState({ ...state, [key]: value }); }; console.log(state);

  const handlePhoneChange = (e) => {
    const value = e.target.value;   const numericValue = value.replace(/[^0-9]/g, "");  setState({ ...state, phoneNumber: numericValue });   
  };

  const handleSubmit = (e) => {
    e.preventDefault();   setLoading(true);   let data = { ...state, };
    fetch("/api/contact", 
          {  method: "POST",  
             headers: {  Accept: "application/json, text/plain, */*", "Content-Type": "application/json", },
             body: JSON.stringify(data),
          }
    ).then(async (res) => { setLoading(false);   const response = await res.json();
        if (!response.error) {  clearState();  ToastClassName(response.message);} else {  clearState();  ToastClassName("something went wrong..."); }
      }).catch((e) => {   setLoading(false);  clearState(); toast("something went wrong");  });  
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center w-full pt-[80px] mt-4">
        <div className="flex flex-col items-center justify-center bg-[#48afde] bg-cover bg-center w-full h-[400px]">
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#223740]">
            <div className="text-center bg-[#48afde] py-[3px] px-[11px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
              <a href="#contact" className="cursor-pointer">
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#48afde] p-2 text-center tracking-wide">
                Hire Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-white font-[300px] text-center text-xl">
                My skills and my will to learn more everyday about coding are available for your goals, Let's stay in touch!
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* card */}
          <div className="px-[20px]">
            <div className="sm:flex  gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <FaLocationDot size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="">Location</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>I currently live in:</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">Geoje</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">S. Gyeongsang Province</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">South Korea</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 2*/}
          <div className="px-[20px]">
            <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <FiPhoneCall size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="">Phone Contacts</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Call Me at:</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">+39 351 519 3695</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">+39 347 199 0421 (WhatsApp)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 3*/}
          <div className="px-[20px]">
            <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <AiFillMail size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="">My Email</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Write me at:</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">adriano.gratani1@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">adriano.gratani2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="px-[20px]">
            <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <AiOutlineFieldTime size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="">Working Time</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>7 days / week</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">Mon - Sat: 9am - 9pm</p>
                    </div>
                    <div>
                      <p className="text-[#666666]">Sun: 9am - 13 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact me page layout: */}
        <div
          id="#contact"
          className="flex flex-col xl:flex-row justify-center gap-[60px] mt-[10px] px-[30px] max-w-[1105px] m-auto p-10 mb-[-150px] "
        >
          <div className="hidden md:block relative w-[50px] xl:w-[550px] rounded-xl md:w-full lg:w-[50%]">
            <div className="absolute h-full w-full bg-gradient-to-t from-[#223740] via-[#223740] shadow-inner opacity-70">
              <div className="absolute inset-0 flex flex-col gap-[20px] items-center justify-center text-white shadow-lg">
                <div className="text-4xl xl:mt-[150px] mt-0 rounded-full px-[15px] py-[15px] bg-[#48afde] text-white">
                  <FaHeadphones />
                </div>
                <div className="font-semibold text-[24px]">
                  Contact Me for more infos!!!
                </div>
                <div className="">
                  <p className="text-center mt-5 font-[200px] text-xl">
                    {" "}
                    say something here...
                  </p>
                </div>
                <button className="bg-[#48afde] text-white mb-[30px] px-4 py-2 hover:bg-[#223740] transition-color rounded-xl">
                  Send Me a Text
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  don't need this.... delete it */}
        <div className="flex flex-col gap-[20px]">
          <div className="">Contact Us</div>
          <div className="">
            <p>I dont really need this section</p>
          </div>

          {/* form: */}
          <form
            className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            onSubmit={handleSubmit}
          >
            <div
              className={`flex flex-col sm:flex-row gap-[20px] ${hind.className}`}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                required
                onChange={handleChange}
                value={state.name}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Name..."
                required
                onChange={handleChange}
                value={state.email}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter Your Name..."
                required
                onChange={handlePhoneChange}
                value={state.phoneNumber}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Name..."
                required
                onChange={handleChange}
                value={state.subject}
                className="px-[12px] outline-none rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>

            <div className={`${hind.className}`}>
              <textarea
                required
                name="message"
                placeholder="Text your message here..."
                className="px-[12px] w-full outline-none h-[180px] rounded-md py-[12px] flex-1 bg-gray-200"
              />
            </div>
            {
                loading && (<div className="mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rouned-full"></div> )
            }
            <div>
              <button className="bg-[#48afde] w-full sm:w-auto px-[30px] py-[12px] hover:bg-[#223740] transition-colors duration-300 font-semibold rounded-lg text-white ">
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
