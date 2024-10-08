export default function Footer() {
  const service = [
    " 1-on-1 Coaching",
    "Company Review",
    "Accounts Review",
    "HR Consulting",
    "SEO Optimisation",
  ];
  const company = ["About", "Meet the Team", "Accounts Review"];
  const helping = ["Contact", "FAQs", "Live Chat"];
  const legal = [
    "Accessibility",
    "Returns Policy",
    "Refund Policy",
    " Hiring Statistics",
  ];

  return (
    <div id="footer" className="mt-[5px]">
      <div className="bg-white  pt-0 lg:pt-[100px]">
        <div
          className="max-w-[1140px] bg-blue-500 rounded-xl  px-[20px] sm:px-[64px] py-[64px] m-auto"
          style={{ transform: "translate(0px, 70px)" }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="text-[30px] text-white text-center lg:text-start">
                Adriano Gratani Web Developer
              </p>
              <p className="text-white font-sans text-center lg:text-start">
                Thank you, for visiting my site.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3"></div>
          </div>
        </div>
      </div>

      <footer className="bg-[#232323]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="container mx-auto p-4 md:hidden block mt-10">
            <div className="md:hidden block">
              <div className="text-teal-600 flex justify-center mt-10"></div>
              <p className="mt-4 max-w-xs text-[#7b858b] font-sans text-center"></p>
              <p className="text-xs text-[#7b858b] font-sans text-center mt-5">
                &copy; 2024. Adriano Gratani.
              </p>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-5 md:pt-20">
            <div className="md:block hidden">
              <div className="text-blue-500"></div>
              <p className="mt-4 max-w-xs text-[#7b858b] font-sans "></p>
              <p className="text-xs text-[#7b858b] font-sans ">
                &copy; 2024. Adriano Gratani.
              </p>
            </div>
          </div>
          <div className="xl:max-w-6xl 2xl:max-w-7xl px-10 md:px-20 xl:px-44 mx-auto sm:py-10 overflow-hidden">
            <div className="flex  flex-wrap justify-between items-center">
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://x.com/AdrianoDev1"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Twitter
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://github.com/AdrianoGratani"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    GitHub
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://dribbble.com/Adribbblian/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22Adribbblian%22&utm_content=%22About%20Adribbblian%22&utm_medium=Social_Share"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M90.2 228.2c8.9-42.4 37.4-77.7 75.7-95.7 3.6 4.9 28 38.8 50.7 79-64 17-120.3 16.8-126.4 16.7zM314.6 154c-33.6-29.8-79.3-41.1-122.6-30.6 3.8 5.1 28.6 38.9 51 80 48.6-18.3 69.1-45.9 71.6-49.4zM140.1 364c40.5 31.6 93.3 36.7 137.3 18-2-12-10-53.8-29.2-103.6-55.1 18.8-93.8 56.4-108.1 85.6zm98.8-108.2c-3.4-7.8-7.2-15.5-11.1-23.2C159.6 253 93.4 252.2 87.4 252c0 1.4-.1 2.8-.1 4.2 0 35.1 13.3 67.1 35.1 91.4 22.2-37.9 67.1-77.9 116.5-91.8zm34.9 16.3c17.9 49.1 25.1 89.1 26.5 97.4 30.7-20.7 52.5-53.6 58.6-91.6-4.6-1.5-42.3-12.7-85.1-5.8zm-20.3-48.4c4.8 9.8 8.3 17.8 12 26.8 45.5-5.7 90.7 3.4 95.2 4.4-.3-32.3-11.8-61.9-30.9-85.1-2.9 3.9-25.8 33.2-76.3 53.9zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-64 176c0-88.2-71.8-160-160-160S64 167.8 64 256s71.8 160 160 160 160-71.8 160-160z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Dribble
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/gratani"
                >
                  {" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    LinkedIn
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://www.instagram.com/adriano.gratani/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Instagram
                  </h5>
                </a>
              </div>
              <div className="w-1/3 sm:w-auto sm:mx-4 mb-10 sm:mb-0">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="mailto:adriano.gratani1@gmail.com"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-8 h-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                  <h5 className="font-recoleta mt-1 lg:mt-3 xl:mt-5 text-sm sm:text-base font-sans text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE]">
                    Gmail
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
