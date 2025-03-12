import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { useState } from "react";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully. I'll respond to you as soon as possible.");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-8 h-[80vh] lg:h-[100vh] w-full lg:px-[12%] ">
      <h3 className="text-4xl lg:text-4xl font-bold leading-tight text-center mb-6">Contact Me</h3>
      <div className="flex gap-8 ">

        {/* contact info */}
        <div className="hidden lg:flex flex-col w-[50%] pt-16">
          {/* Contact Section */}
          <div className="">
            <h3 className="font-bold text-xl mb-8">Let's Connect & Collaborate</h3>
            <ul className="space-y-8 text-lg mb-8">
              <li>📍 Lapaz, Accra, GHANA</li>
              <li>📧 benedictadavour777@gmail.com</li>
              {/* <li>📞 +233 595 742 231</li> */}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold mb-8">My Socials</h2>
            <div className="flex space-x-8">

              {/* <a
                                      href="#"
                                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"
                                      
                                  >
                                      <img src={instagram} alt="" />
                                  </a> */}

              <a
                href="https://www.linkedin.com/in/eba-davour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"

              >
                <img src={linkedin} alt="" />
              </a>
              <a
                href="https://github.com/Benny-Dav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"

              >
                <img src={github} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="p-4 lg:p-6 border-[#DC143C] border-4 ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-4 text-sm">
            Have a question or want to work together? Send me a message below!
          </p>
          <form
            action="https://formspree.io/f/mldelera"
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-4 "
          >
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1 text-sm">
                Full Name
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1 text-sm">
                Subject
              </label>
              <input
                type="text"
                required
                name="subject"
                id="subject"
                placeholder="How can I help you?"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1 text-sm">
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                placeholder="Your message here..."
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-sm h-24 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center hover:bg-[#DC143C] text-white font-bold py-2 rounded-lg shadow-lg bg-black transition text-sm ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} spin className="mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
