import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import { useState } from "react";

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
    <section id="contact-section" className="lg:bg-[#FFEFD5] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="p-8 lg:p-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Have a question or want to work together? Send me a message below!
          </p>
          <form
            action="https://formspree.io/f/mldelera"
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                name="subject"
                id="subject"
                placeholder="How can I help you?"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                placeholder="Your message here..."
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-[#DC143C] focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 h-32 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center bg-[#DC143C] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
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
