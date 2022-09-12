import React, { useState } from "react";
import ceo_img from "../images/ceo.jpg";
const WhyUs = () => {
  const [moreContent, setMoreContent] = useState(false);

  return (
    <section className="py-0 sm:py-16">
      <div className="w-mobile md:w-container_width mx-auto grid sm:grid-cols-2 items-center gap-10 sm:gap-0  py-16">
        <div>
          <div className="bg-white w-[300px] h-[300px]  flex justify-center mx-auto ">
            <img src={ceo_img} alt="" className=" shadow-xl rounded-full " />
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl">About the Founder</h2>
          <p>
            Majak Mayol was born in the small village of Twic County, Warrap
            state, South Sudan. He was the fifth of five children born to
            parents whose sole source of income was farming. His father was a
            cattle keeper and community leader, and his mother was a home-keeper
            mom. Majak grew up in Twic County and attended BULYOM and AWENG
            schools. He was a good student who participated in extracurricular
            activities.
          </p>
          <p>
            Majak is a natural-born leader who overcame all obstacles while
            living for over ten years in Kenya's Kakuma Refugee Camp. He was
            President of the student body at Kakuma Refugee High School and was
            involved in the Debating and Peace clubs.
          </p>
          <div className={moreContent ? "block" : "hidden"}>
            <p>
              Majak Mayol is a forward-thinking, young person who works for
              progressive organizations that support and reward the
              implementation of new ideas and exponential employee growth to
              meet today's and tomorrow's organizational issues. Majak is an
              information technology-skilled youth who created MajakTech to
              empower women and engage youth in research and technology use.{" "}
            </p>
            <p>
              He got the sponsorship of a kindhearted Canadian mother called
              Shirley Smith, who believed in his need to realize his potential
              in order to make his dream a reality. He attended university in
              Kenya for four years after graduating from high school, thanks to
              Shirley for her tireless support.  Mayol was an outstanding
              student who graduated with honors. He is now a young man with
              knowledge of information technology and a Bachelor's degree in
              that field. His interpersonal and analytical skills are
              outstanding.
            </p>
            <p>
              He worked for a few different tech companies in the Nairobi area
              before and after graduation. He then made the decision to start
              his own software development firm. Majak Mayol is a young
              progressive thinker who works for forward-thinking companies that
              encourage and reward the adoption of novel concepts and rapid
              employee growth in order to address current and future
              organizational problems.
            </p>
            <p>
              He is proficient in Python, HTML, CSS, JavaScript, Visual Basic,
              and SQL all skills he possessed. Through research and development,
              he founded MajakTech to better the lives of his communities.
            </p>
          </div>
          <button
            onClick={() => setMoreContent(!moreContent)}
            className="bg-hoverColor text-white p-2 rounded"
          >
            {moreContent ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
