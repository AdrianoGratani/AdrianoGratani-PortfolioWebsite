"use client";
import { Hind } from "next/font/google";
import React, { useState, useEffect} from "react";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
// import { ToastClassName, ToastContainer, toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

// input-on-hover styling:
import  "../contactme/styles.css"



const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
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
    ).then(async (res) => { setLoading(false);   const response = await res.json(); console.log(response)
        if (!response.error) {  clearState();  toast(response.message);} else {  clearState();  toast("Thank you for sending a message."); }
      }).catch((e) => {   console.log(e); setLoading(false);  clearState(); toast("something went wrong...");  });  
  };


  useEffect(()=> {
    document.title = "ContactMe | AdrianoGratani"
  },[])


  return (
    <React.Fragment>
      <Head>
        <title>Dynamic Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
      <ToastContainer />
      {/* whole page container: */}
      <div className=" flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        {/*upper title container:  */}
        <div className="flex flex-col items-center justify-center w-full h-[300px]">
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* blue line: */}
            <div className=" bg-[#48afde] py-[3px] xl:px-[600px] px-[400px] rounded-lg"></div>
            <div className="mt-[20px]">
              <h1 className=" recoletaBold text-5xl text-[#48afde] p-2 text-center tracking-wide">
                Hire Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-black font-[300px] text-center text-xl">
                My skills are available for your goals.<br/> Let&apos;s stay in touch!
              </p>
            </div>
          </div>
        </div>

        {/* all contact cards container: */}
        <div className="md:flex xl:flex mb-[60px]">
          {/* single card container: */}
          <div className="px-[20px]">
            <div className="sm:flex  gap-[20px] mt-[50px] max-w-[1105px] w-full h-[300px]">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-black hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <FaLocationDot size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="mt-[10px]">Location</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p className="mt-[10px]">I currently live in:</p>
                    </div>
                    <div>
                      <p className="text-[#48afde] text-2xl mt-[10px]">Geoje,</p>
                    </div>
                    <div>
                      <p className="text-[#48afde] text-2xl" >S. Gyeongsang Province,</p>
                    </div>
                    <div>
                      <p className="text-[#48afde] text-2xl">South Korea</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 2*/}
          <div className="px-[20px]">
            <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-[300px]">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-black hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <FiPhoneCall size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="mt-[10px]">Phone Contacts</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p className="mt-[10px]">Call Me at:</p>
                    </div>
               
                    <div>
                      <p className="text-[#48afde] text-2xl mt-[10px]">+39 347 199 0421 (WhatsApp)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 3*/}
          <div className="px-[20px]">
            <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-[300px]">
              <div className="flex flex-col flex-1 xl:flex-row gap-[20px]">
                <div
                  className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-black hover:text-white hover:-translate-y-4 bg-white "
                  style={{ boxShadow: "#48afde -1px 1px 10px 0px" }}
                >
                  <div className="flex items-center gap-[15px] ">
                    <AiFillMail size={40} color="#48afde" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[#48afde] text-[14px]">
                      <p className="mt-[10px]">My Email</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p className="mt-[10px]">Write me at:</p>
                    </div>
                    <div>
                      <p className="text-[#48afde] text-2xl mt-[10px]">adriano.gratani1@gmail.com</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className=" bg-[#48afde] py-[3px] px-[600px] rounded-lg mb-[40px]">
            </div>
   
        <div className="bg-white h-[600px] w-[400px] rounded-md">
            <h2 className="text-5xl text-center">Contact Me</h2>
            {/* form input and button container */}
            <div className="bg-slate-500 mt-[20px]">
              <form onSubmit={handleSubmit} className="bg-white">

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name..."
                  required
                  onChange={handleChange}
                  value={state.name}
                  className={`input_selected bg-[#48afde] placeholder:text-white w-[360px] my-[20px] ml-[20px] p-[20px] outline-none rounded-md ${hind.className}`}

                />
                <br/>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your e-mail..."
                  required
                  onChange={handleChange}
                  value={state.email}
                  className={`input_selected bg-[#48afde] placeholder:text-white w-[360px] my-[20px] ml-[20px] p-[20px] outline-none rounded-md ${hind.className}`}
                />
                <br/>

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number..."
                  required
                  onChange={handlePhoneChange}
                  value={state.phoneNumber}
                  className={`input_selected bg-[#48afde] placeholder:text-white w-[360px] my-[20px] ml-[20px] p-[20px] outline-none rounded-md ${hind.className}`}
                />
                <br/>

                <input
                  type="text"
                  name="subject"
                  placeholder="Which Subject..."
                  required
                  onChange={handleChange}
                  value={state.subject}
                  className={`input_selected bg-[#48afde] placeholder:text-white w-[360px] my-[20px] ml-[20px] p-[20px] outline-none rounded-md ${hind.className}`}
                />
                <br/>
                <textarea
                  required
                  name="message"
                  onChange={handleChange}
                  placeholder="Text goes here..."
                  className={`input_selected bg-[#48afde] placeholder:text-white w-[360px] my-[20px] ml-[20px] p-[20px] outline-none rounded-md ${hind.className}`}
                />
                <br/>
                {
                  loading && (<div className="mb-3 text-center ml-5 w-6 h-6 border-t-2 border-blue-600 border-solid animate-spin rounded-full"></div> )
                }
                <button className="button_selected bg-[#48afde] w-[360px] my-[20px] ml-[20px] p-[15px] outline-none rounded-md text-4xl">
                  Send Your Message
                </button>
            
              </form>
            </div>
        </div>

      

      </div>
    </React.Fragment>
  );
}
