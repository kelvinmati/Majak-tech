import React, { useState } from "react";
import Navbar from "./Navbar";
import blog from "../images/meeting.jpeg";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [articleText, setArticleText] = useState("");
  const handleShowMore = (text) => {
    setArticleText(text);
  };
  console.log("articleText is", articleText);

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
          <div>
            <Navbar />
          </div>
          <div className="w-[60%] mx-auto pt-10 space-y-6">
            <div className="text-4xl text-center">
              <h2>Become smarter with majaktech articles</h2>
            </div>
            <form action="" className="flex">
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
        <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-3 gap-10">
          <div className="sm:col-span-2 space-y-2 ">
            {articles?.map((article, index) => {
              const { title, author, text, articleImg } = article;
              return (
                <div key={index} className=" p-2 rounded">
                  <div className="grid grid-cols-2 gap-5  items-center  ">
                    <div className="h-[170px] flex justify-center ">
                      <img
                        src={articleImg}
                        alt={title}
                        className=" object-cover  w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl">{title}</h2>
                        <p className="text-gray-700">Author:{author}</p>
                        <p className="text-gray-700">23rd August 2022</p>
                      </div>
                      <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                        {text}
                      </p>
                      <button
                        onClick={() => handleShowMore(text)}
                        className="text-blue-500  "
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>{articleText}</p>
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
const articles = [
  {
    articleImg:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Building futer with tech",
    author: "Majak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem ut sapiente architecto aperiam, tenetur fugit debitis obcaecati optio odio ipsa? Expedita commodi corrupti sequi rem fuga enim omnis! Quam?",
  },
  {
    articleImg: `${blog}`,
    title: "Preserving possibilities",
    author: "Majak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatem u",
  },
  {
    articleImg:
      "https://img.freepik.com/free-vector/isometric-data-analysis-flowchart_1284-21521.jpg?size=338&ext=jpg&uid=R76010349&ga=GA1.2.940152230.1659185871",
    title: "Preserving possibilities",
    author: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus excepturi totam placeat repellat enim nam. Quidem saepe itaque praesentium dignissimos minus nostrum alias sunt ab modi nesciunt pariatur animi a, consectetur incidunt corporis qui sit voluptatibus quibusdam! Laborum cum enim excepturi, quia, corrupti accusamus minima labore doloremque deserunt ipsam, ut sequi eveniet officia quod doloribus dicta tempora tenetur in illo autem. Delectus cum, dolores nam deserunt corporis consequuntur consectetur provident porro commodi repellendus recusandae, error repellat et, exercitationem quaerat saepe! Temporibus quidem in aspernatur vero, exercitationem eaque quae eligendi laborum beatae, veritatis, placeat perspiciatis molestias voluptatibus architecto. Deserunt, debitis?",
  },
  {
    articleImg:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Preserving possibilities",
    author: "Kelvin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus sunt ab modi nesciunt pariatur animi a, consectetur incidunt corporis qui sit voluptatibus quibusdam! Laborum cum enim excepturi, quia, corrupti accusamus minima labore doloremque deserunt ipsam, ut sequi eveniet officia quod doloribus dicta tempora tenetur in illo autem. Delectus cum, dolores nam deserunt corporis consequuntur consectetur provident porro commodi repellendus recusandae, error repellat et, exercitationem quaerat saepe! Temporibus quidem in aspernatur vero, exercitationem eaque quae eligendi laborum beatae, veritatis, placeat perspiciatis molestias voluptatibus architecto. Deserunt, debitis?",
  },
  {
    articleImg:
      "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Preserving possibilities",
    author: "Doe",
    text: "Lorem ipsum dolor sit amet ?",
  },
];
