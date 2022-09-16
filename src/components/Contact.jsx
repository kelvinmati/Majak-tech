import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
const Contact = () => {
  const form = useRef();
  // initialize react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    shouldUnregister: true,
    shouldFocusError: true,
  });

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_oaunv3h",
  //       "template_di8ivjs",
  //       form.current,
  //       "EZHWt5-Ol6N8-mNua"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Succesfully sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  // Email js
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      emailjs
        .sendForm(
          "service_oaunv3h",
          "template_di8ivjs",
          form.current,
          "EZHWt5-Ol6N8-mNua"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Succesfully sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("error occured");
    }
  };
  return (
    <div className="bg-gray-50 py-10 ">
      <div className="py-10 w-mobile md:container_width md:w-4/5 mx-auto grid md:grid-cols-2 gap-16 sm:gap-5  items-center">
        <div className="space-y-5">
          <div>
            <p className="text-5xl">We would love to hear from you</p>
            {/* <p className="text-xl py-3">Get in touch</p> */}
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
        <div className="bg-white  p-4 rounded shadow">
          <p className="text-xl  text-hoverColor  text-center py-3 ">
            Kindly enter your details and we will get back to you within 24
            hours.
          </p>
          <p></p>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            <input
              className="border p-2 outline-none rounded"
              type="text"
              name="from_name"
              placeholder="Enter your name"
              {...register("from_name", {
                required: false,
              })}
            />

            <input
              className="border p-2 outline-none rounded"
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <p className="text-red-500">Email is required </p>}

            <textarea
              className="border p-2 outline-none"
              placeholder="Leave message here.."
              name="message"
              id=""
              cols="20"
              rows="6"
              {...register("message", {
                required: true,
              })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500">Message is required </p>
            )}
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
