import { useState } from "react";
import React from 'react'
import axios from "axios";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='form-container pt-[40px] pb-[60px]'>
      <h2 className='text-gray-500 tracking-widest mb-8 font-bold text-2xl ml-6'>Send Us A Message</h2>
      <form className="flex flex-col gap-8 ml-8 bg-[url('/Vector.png')] bg-cover bg-center p-8 rounded-md" onSubmit={handleMessage}>
        <div className="flex gap-8">
          <input className="flex-1 text-2xl p-2 pl-10 rounded-md border border-gray-400"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input className="flex-1 text-2xl p-2 pl-10 rounded-md border border-gray-400"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex gap-8">
          <input className="flex-1 text-2xl p-2 pl-10 rounded-md border border-gray-400"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="flex-1 text-2xl p-2 pl-10 rounded-md border border-gray-400"
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <textarea className="flex-1 text-2xl p-2 pl-10 rounded-md border border-gray-400"
          rows={7}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button className="px-9 py-2 text-white bg-slate-600 font-bold w-fit border-none rounded-lg text-2xl mb-8" type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
