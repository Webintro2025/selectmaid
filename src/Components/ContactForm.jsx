"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message, phoneNumber }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Failed to send message: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-slate-50 via-red-50 to-slate-100 p-2 sm:p-3 md:p-5 mt-4 sm:mt-6 md:mt-10 lg:mt-14 border border-red-400/40 max-w-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <input
        type="text"
        name="fullName"
        placeholder="Your Name:"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
        required
        className="w-full mb-4 px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 rounded text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email:"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full mb-4 px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 rounded text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Your Phone Number:"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        required
        className="w-full mb-4 px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 rounded text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
      />
      <input
        type="text"
        name="message"
        placeholder="Your Message:"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        className="w-full mb-4 px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 rounded text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300 hover:scale-105 focus:scale-105"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-red-600 to-slate-700 text-white font-bold px-4 py-3 rounded-lg hover:from-red-700 hover:to-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 text-sm shadow-lg w-full disabled:opacity-60"
      >
        <span className="flex items-center justify-center gap-2">
          {loading ? "Sending..." : "SUBMIT NOW"}
          <i className="fas fa-paper-plane animate-pulse" />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
