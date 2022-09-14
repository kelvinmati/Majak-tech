import React from "react";
import communication_dir from "../../src/images/Team/communications_dir-removebg-preview.png";
import programs_dir from "../../src/images/Team/programs_dir.png";
import management_dir from "../../src/images/Team/management_dir-removebg-preview.png";

const Team = () => {
  return (
    <section className=" sm:py-16 py-10 sm:mb-60 mb-0">
      <div className="w-mobile md:w-container_width mx-auto space-y-6">
        <div className="sm:bg-blue-300 bg-white sm:h-[300px] h-full   p-3 relative">
          <div className="sm:text-white text-blue-400  text-center sm:mt-10 mt-0 mb-10 sm:mb-0">
            <h2 className="text-lg font-bold ">OUR TEAM MEMBERS.</h2>
            <p className="text-black sm:text-white">
              This is the team behind Majaktech's success.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 left-0 right-0  static sm:absolute top-0  sm:top-[170px]">
            <div className="flex flex-col items-center space-y-1 justify-center text-center">
              <div className=" h-[300px]  w-[300px] flex">
                <img
                  src={communication_dir}
                  alt=""
                  className=" object-contain bg-gray-50  rounded-full "
                />
              </div>
              <h2 className="text-lg font-bold">DENG WOL AKECH</h2>
              <p>Director Communications and blogger</p>
            </div>
            <div className="flex flex-col items-center space-y-1 justify-center text-center ">
              <div className=" h-[300px]  w-[300px] flex">
                <img
                  src={programs_dir}
                  alt=""
                  className=" object-contain bg-gray-50  rounded-full "
                />
              </div>
              <h2 className="text-lg font-bold uppercase">Madieu Kuot Ayii</h2>
              <p>Director Technical lead, Designer and programming</p>
            </div>{" "}
            <div className="flex flex-col items-center space-y-1 justify-center text-center">
              <div className=" h-[300px]  w-[300px] flex">
                <img
                  src={management_dir}
                  alt=""
                  className=" object-contain bg-gray-50  rounded-full "
                />
              </div>
              <h2 className="text-lg font-bold">WILLIAM DENG MAYEN</h2>
              <p>Director in Management and planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
