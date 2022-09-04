import React from "react";
import missionImg from "../images/pexels.jpg";
const Mission = () => {
  return (
    <section className="sm:py-10 py-0">
      <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-5   gap-20 ">
        <div
          className="col-span-2 bg-mainGreen bg-blend-multiply p-2 h-full bg-no-repeat bg-cover bg-center hidden sm:block"
          style={{ backgroundImage: `url(${missionImg})` }}
        ></div>
        <div className="relative sm:col-span-3 space-y-5 sm:space-y-20 ">
          <div className="">
            <div className="absolute  -left-[130px] top-[85px] rounded-full text-white p-2 bg-mainGreen shadow-lg">
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
            <div className="absolute -left-[130px] top-[440px] shadow-lg rounded-full  p-2 text-mainGreen  bg-white">
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
                  // d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Mission</h2>
            <p>
              To Make the Technological Worlds Real, Accessible, and Useful.
            </p>
            <p>
              {" "}
              Our objective is to build a platforms in Africa where money and
              resources are mobile.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Vision</h2>
            <p>
              We anticipate that in a decade, Africa will have completely
              embraced digital business issues. As a result of their capacity to
              operate digitally and reach clients internationally, they
              collaborate on global development and super-sized projects.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Core values</h2>
            <p>
              <span className="font-bold"> Aggressive</span> :We are ever ready
              to confront challenges that our clients face in day in day out
              engagements.
            </p>

            <p>
              <span className="font-bold">Innovation</span> :We feature new
              ideas that are aimed at producing the desired key results by our
              customers.
            </p>
            <p>
              <span className="font-bold">Effective</span> :It is in our blood
              to deliver pleasant results
            </p>
            <p>
              <span className="font-bold">Integrity</span> :Majaktech does what
              is legal,right and aligns with the moral principles.
            </p>
            <p>
              <span className="font-bold">Expertise</span> :We have a team of
              properly skilled expertise who deliver products and services as
              requested without compromise whatsoever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
