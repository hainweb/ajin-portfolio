import  { useState } from 'react';
import { FaEnvelope, FaRocket } from 'react-icons/fa';
import emailjs from 'emailjs-com';  // Import EmailJS
import './contactMe.css'; // Import custom CSS for animations

function ContactMe() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);  // Track errors during submission

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_mkrdh0d', // Your service ID
        'template_9m8jq1q', // Your template ID
        event.target, // The form element
        'user_xxxxxxx' // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setError(null);  // Reset any previous errors
          // Reset form after submission
          setFormData({ fullName: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitted(false), 3000); // Reset the submitted state after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setError("There was an issue sending the message. Please try again later.");
        }
      );
  };

  return (
    <section className="container mx-auto py-12 flex flex-col items-center" id="contact">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s chat.</h2>
        <p className="text-lg mb-4">Tell me about your project.</p>
        <p className="text-sm">Let&apos;s create something together. 🚀</p>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-md p-8 w-full max-w-md">
        <form >
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Tell us more about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <FaRocket className={`mr-2 ${submitted ? 'animate-rocket' : ''}`} />
            {submitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error message */}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm">Mail me at</p>
        <a href="mailto:ajinaji6110@gmail.com" className="text-blue-500 hover:underline">
          ajinaji6110@gmail.com <FaEnvelope className="inline-block ml-1" />
        </a>
      </div>
    </section>
  );
}

export default ContactMe;
