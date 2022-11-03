import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import blog from "../images/meeting.jpeg";
import giving_back from "../images/giving_back.jpeg";
import { format } from "date-fns";
const Blog = () => {
  // get posts from the API
  const [posts, setPosts] = useState([]);

  let AUTH_TOKEN =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjI4ODAxMTUsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w3d3h1OTRiMmt0NzAxdWozenQ1MHAwdi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYTEwYTI0NjAtZTAxYS00YzZiLTg2OTAtNWJlYzBmNTk4MTNjIiwianRpIjoiY2w3d3p2d3VwMmwzMzAxcnJibXlhM3ZyeiJ9.ZK3zwPoenuAMOWeKldQZQYBQWH3rdnFhLcBLsjo-VXJ36akdCYoDlibnmZutoxM2Edkzc7WpnbMaB0Qh9Z8-B9Bk-_c4iDuuUSOgcL8e2CQ0tKokxeaxIfGRw3gY83VWlMncWRqRjVRmuyDqqErDV6UHa82j26H1C7fhnszu7JgSx0-W_8am3rA6S6RA0e-hKilr6LCYvo9vwj_foTxZ_JqynDaRR7E2Gj2NPETueGfZ2u4IXyWegQHOQta1vm_GtDKlWgp_RGlFJCN07JUaSwLalmPzTNfC4vumcw9KX0pCb-vEhvdyWiCmjWxOcbmQR5WC9ytV5vR2ekzGQybjSA_0tVN8ZJIUALY_Se8gBicozx6HZ75UP1icJGkxkOuYX8tD40BS8yHVtsRAfUFXB-EFuEYg9CPNJZaz4NHBSAk4Wv8k5PiRLOML6JXbpT-WRsysCUvDUt45Qh672hMGwr3LveuQtB9goPiibUmFbKYGmHiQtTnZPJoNxbEQR-JLWkKlPsqUKbsozUFUParpofCo45uTOvRn2TvSlHLcG_LWUyB5H2nEFY-BRBHlSqeG06p0JiElpeDJQmVPc53uhMX-ujZ50-jG2kVQeLSgfOQd-BYumEMcGhQMBcutx6r-NieHmHO_IMVBiNpcldP3rpIvQMzmXubjG0Rap3AXXIM";

  useEffect(() => {
    fetch(
      "https://api-eu-west-2.hygraph.com/v2/cl7wxu94b2kt701uj3zt50p0v/master",

      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query {
              posts {
                id
                title
                slug
                subTitle
                title
                datePublished
                content {
                  raw
                  html
                  markdown
                  text
                }
                photo {
                  id
                  handle
                  fileName
                  mimeType
                  url
                }
                authors {
                  id
                  name
                }

              }
            }
          `,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => setPosts(result?.data?.posts));
  }, []);

  console.log("posts are", posts);
  // .then((result) => {
  // 	 result.data.posts.forEach((post) => {
  // 		const {
  // 			author,
  // 			title,
  // 			subTitle,
  // 			category,
  // 			photo,
  // 			content: { markdown, html },
  // 			datePublished,
  // 		} = post;

  // show more text
  const [articleText, setArticleText] = useState("");
  const handleShowMore = (text) => {
    setArticleText(text);
  };

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
          <div className="sm:w-[60%] w-[90%] mx-auto pt-10 space-y-6">
            <div className="text-4xl text-start sm:text-center">
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
            {posts?.map((post, index) => {
              const {
                id,
                title,
                subTitle,
                authors,
                photo,
                datePublished,
                content,
              } = post;

              return (
                <div key={id} className=" p-2 rounded">
                  <div className="grid grid-cols-2 gap-3 md:gap-0  items-center  ">
                    <div className="h-[170px] md:w-[300px] w-full  bg-gray-100  flex justify-center ">
                      <img
                        src={photo?.[0]?.url}
                        alt={title}
                        className=" object-contain  w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-gray-700">
                          {`By: ${authors?.[0]?.name} `}
                        </p>
                        <p className="text-gray-700">
                          {/* {datePublished} */}
                          {format(
                            new Date(datePublished),
                            "do MMM yyyy HH:mm aaaaa'm' "
                          )}
                        </p>
                      </div>
                      <p className="text-ellipsis overflow-hidden whitespace-nowrap italic">
                        {content?.text}
                      </p>{" "}
                      <button
                        onClick={() => handleShowMore(content?.text)}
                        className="text-blue-500  "
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                  {/* <div className="mt-3">
           
                    <p>{content?.text}</p>
                  </div> */}
                  <div className="mt-3">
                    <p>{articleText === content?.text ? articleText : ""}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-2">
            <h2 className="font-bold mb-3 ">RECENT POSTS</h2>
            <div className="border-b p-2 cursor-pointer">
              <li>Giving back to the society</li>
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
const articles = [
  {
    articleImg: `${giving_back}`,
    title: "Giving back to the society",
    author: "Majak",
    text: "East or west,home is best .With the help of Shirley Smith i made it to myh former secondary school today  to appreciate my former principle ,former teachers and students.I had a beautiful talk with brilliant ,intelligent and ressilient students with a lot of dreams of making changes in the nearest future .Am not that better than them but i called it 'giving back to the society' #Krss #weshallovercome ",
  },
];

// category {
//   entryId: id
//   title
// }
// author {
//   id
//   name
// }
// updatedBy {
//   entryId: id
//   name
//   picture
//   kind
//   isActive
// }
