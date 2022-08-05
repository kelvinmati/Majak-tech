import React from "react";
import Navbar from "./Navbar";
import blog from "../images/meeting.jpeg";

const Blog = () => {
  return (
    <>
      <section>
        <div
          className=" h-[65vh]  bg-no-repeat bg-cover bg-[rgba(0,0,0,0.7)] text-white bg-right  bg-blend-multiply"
          style={{
            backgroundImage:
              "url(https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png)",
          }}
        >
          <Navbar />
          <div className="w-[60%] mx-auto pt-10 space-y-6">
            <div className="text-4xl text-center">
              <h2>Become smarter with majaktech articles</h2>
            </div>
            <form action="" className="flex ">
              <input
                type="text"
                placeholder="Search articles here.."
                className="border p-4 w-full outline-none text-black rounded-tl-full rounded-bl-full"
              />
              <input
                type="submit"
                value="Search"
                className="rounded-tr-full rounded-br-full p-4 bg-hoverColor cursor-pointer"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="py-7">
        <div className="w-mobile md:w-container_width mx-auto grid grid-cols-3 gap-10">
          <div className="col-span-2 space-y-8">
            {loop.map((artciles, index) => {
              return (
                <div className="grid grid-cols-2 gap-5  p-2">
                  <div className="h-[200px] flex justify-center">
                    <img src={blog} alt="" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl">Article title</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Non nesciunt deserunt iste eaque soluta quo....
                    </p>
                    <button className="text-blue-500  ">Read more</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-2">
            <h2 className="font-bold mb-3 ">RECENT POSTS</h2>
            <div className="border-b p-2 cursor-pointer">
              <li>Building the future with technology</li>
              <p className="text-mainGreen">August,2022</p>
            </div>
            <div className="border-b p-2 cursor-pointer">
              <li>Building the future with technology</li>
              <p className="text-mainGreen">August,2022</p>
            </div>{" "}
            <div className="border-b p-2 cursor-pointer">
              <li>Building the future with technology</li>
              <p className="text-mainGreen">August,2022</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const loop = [1, 2, 3];
