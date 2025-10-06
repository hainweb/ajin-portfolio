import { useState } from "react";
import { FaEnvelope, FaRocket } from "react-icons/fa";
import "./contactMe.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz0DyrRmUPTFtTImujyBThMtOW-TbP9AHf18JdXTNvyFrNwqvK9m21hwC5LUIObu0sN/exec";

function ContactMe1() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      

      
      const formToSend = new FormData();
      formToSend.append("name", formData.fullName);
      formToSend.append("email", formData.email);
      formToSend.append("subject", formData.subject);
      formToSend.append("message", formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formToSend,
      });

     
      setSubmitted(true);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Form Submission Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-gray-900 text-white flex flex-col items-center"
      id="contact"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Let&apos;s Connect
        </h2>
        <p className="text-lg sm:text-xl text-gray-300">
          Whether you&apos;re an HR, recruiter, or collaborator feel free to
          reach out!
        </p>
        <p className="text-sm text-gray-400">
          I&apos;d love to hear from you 
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-gray-800/70 border border-gray-700 shadow-lg rounded-xl p-6 sm:p-10 backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-300"
            >
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
              required
            />
          </div>

          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
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
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300"
            >
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
              required
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 p-3 w-full bg-gray-700 border border-gray-600 rounded-md focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 py-3 px-4 flex items-center justify-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              <FaRocket
                className={`mr-2 ${submitted ? "animate-bounce" : ""}`}
              />
              {loading
                ? "Sending..."
                : submitted
                ? "Message Sent!"
                : "Send Message"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>

      {/* Contact Email */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">Mail me at</p>
        <a
          href="mailto:ajinaji6110@gmail.com"
          className="text-purple-400 hover:text-purple-300 transition-colors flex items-center justify-center space-x-1"
        >
          <span>ajinaji6110@gmail.com</span> <FaEnvelope className="ml-1" />
        </a>
      </div>
    </section>
  );
}

export default ContactMe1;
