import React, { useState } from "react";
import { FaEnvelope, FaRocket } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS
import "./contactMe.css"; // Import custom CSS for animations

function ContactMe1() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null); // Track errors during submission

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log(formData); // Debugging to check form data
  
    emailjs
      .sendForm(
        "service_vp9icik", // Your EmailJS service ID
        "template_sr9zkp8",
      
        
        event.target,       // The form element (must be correctly structured)
        "wxAbDjDKtuRvSeYZv" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitted(true);
          setError(null); // Reset any previous errors
  
          // Reset form after submission
          setFormData({ fullName: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000); // Reset the submitted state after 3 seconds
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setError("There was an issue sending the message. Please try again later.");
        }
      );
  };
  

  return (
    <section className="w-full min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-gray-900 text-white flex flex-col items-center" id="contact">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">Let's Chat.</h2>
        <p className="text-lg sm:text-xl text-gray-300">Tell me about your project.</p>
        <p className="text-sm text-gray-400">Let's create something together. 🚀</p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-gray-800/70 border border-gray-700 shadow-lg rounded-xl p-6 sm:p-10 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
              placeholder="Enter your full name"
            />
          </div>

          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
              placeholder="What's the topic?"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Tell us more about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full transition-all duration-300  py-3 px-4 rounded-lg flex items-center justify-center"
            >
              <FaRocket className={`mr-2 ${submitted ? "animate-bounce" : ""}`} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>

      {/* Contact Email */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">Mail me at</p>
        <a href="mailto:ajinaji6110@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center justify-center space-x-1">
          <span>ajinaji6110@gmail.com</span> <FaEnvelope className="ml-1" />
        </a>
      </div>
    </section>
  );
}

export default ContactMe1;
