import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
const Contact = () => {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_fp2uqzn",
  //         "template_ggrja3v",
  //         form.current,
  //         "user_GQR0KqhGk7eUTDPiSP1Of"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //           alert("Succesfully sent");
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  //   };
  return (
    <div className="bg-hoverColor py-10 ">
      <div className="py-10 w-mobile_width md:w-4/5 mx-auto grid md:grid-cols-2 gap-5  items-center">
        <div className="space-y-14 text-white">
          <div>
            <p className="text-5xl">We would love to hear from you</p>
            <p className="text-xl py-3">Get in touch</p>
          </div>

          <div className="flex items-center space-x-2 text-orange ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
            <span>+254 714 851 266</span>
          </div>
        </div>
        <div className="bg-white  p-4 rounded-sm">
          <p className="text-2xl  text-hoverColor  text-center py-3 ">
            Kindly enter your details
          </p>
          <form
            // ref={form}
            // onSubmit={sendEmail}
            className="flex flex-col space-y-6"
          >
            <input
              className="border p-2 outline-none rounded"
              type="text"
              name="user_name"
              placeholder="Enter your name"
            />
            <input
              className="border p-2 outline-none rounded"
              type="email"
              name="user_email"
              placeholder="Enter your email"
            />

            <textarea
              className="border p-2 outline-none"
              placeholder="Leave message here.."
              name="message"
              id=""
              cols="20"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className=" p-2 rounded-lg
                            bg-hoverColor hover:bg-mainGreen text-white"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
