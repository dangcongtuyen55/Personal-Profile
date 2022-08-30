import React from "react";
import SendIcon from "@mui/icons-material/Send";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-800 flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/7d9d9e55-b01e-4328-b994-f28e1b8629f5"
        method="post"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            ## Contact me by email:
            <span className="font-bold">dangcongtuyen55@gmail.com</span> and
            phone:<span className="font-bold">0815312150</span> or fill in your
            information in the form below 😁😁
          </p>
        </div>
        <input
          type="text"
          className="bg-white p-2 "
          placeholder="fullname"
          name="fullname"
        />

        <input
          type="email"
          className="bg-white p-2 my-4 peer border border-slate-400"
          placeholder="email"
          name="email"
        />

        <textarea
          className="bg-white p-2"
          name="message"
          id=""
          cols="10"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="w-[200px] group text-white rounded-lg border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex justify-center items-center">
          Submit
          <span>
            <SendIcon className="ml-2" />
          </span>
        </button>
      </form>
    </div>
  );
};
