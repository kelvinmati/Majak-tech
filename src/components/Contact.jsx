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
      <div className="py-10 w-mobile md:container_width md:w-4/5 mx-auto grid md:grid-cols-2 gap-16 sm:gap-5  items-center">
        <div className="space-y-5 text-white">
          <div>
            <p className="text-3xl">We would love to hear from you</p>
            <p className="text-xl py-3">Get in touch</p>
          </div>

          <div className="flex items-center space-x-2  ">
            <ion-icon size="large" name="call-outline"></ion-icon>
            <span>+254 714 851 266</span>
          </div>
          <div className="flex items-center space-x-2">
            <ion-icon size="large" name="mail-outline"></ion-icon>
            <p>info@majaktech.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <ion-icon size="large" name="location-outline"></ion-icon>
            <p>TRM Drive,Nairobi</p>
          </div>
        </div>
        <div className="bg-white  p-4 rounded-sm">
          <p className="text-xl  text-hoverColor  text-center py-3 ">
            Kindly enter your details and we will get back to you within 24
            hours.
          </p>
          <p></p>
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
