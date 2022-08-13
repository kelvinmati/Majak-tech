import React from "react";
import missionImg from "../images/pexels.jpg";
const Mission = () => {
  return (
    <section className="py-10">
      <div className="w-mobile md:w-container_width mx-auto grid grid-cols-5   gap-20 ">
        <div
          className="col-span-2 bg-mainGreen bg-blend-multiply p-2 h-[420px] bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: `url(${missionImg})` }}
        ></div>
        <div className="relative col-span-3 space-y-20 ">
          <div>
            <div className="absolute -left-[130px] top-[85px] rounded-full text-white p-2 bg-mainGreen shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="absolute -left-[130px] top-[255px] shadow-lg rounded-full  p-2 text-mainGreen  bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Mission</h2>
            <p>
              To Make the Technological Worlds Real, Accessible, and Useful. Our
              objective is to build a continent in Africa where money and
              resources are mobile. We will do this by making internet
              communication and transactions as simple as possible for
              businesses.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Vission</h2>
            <p>
              We anticipate that in a decade, Africa will have completely
              embraced digital business. As a result of their capacity to
              operate digitally and reach clients internationally, they
              collaborate on global development and super-sized projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
