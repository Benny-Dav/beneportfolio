const Contact = () => {
  return (
      <section id="contact-section" className="h-auto lg:h-[100vh] py-8">
          <h2 className="text-center font-bold text-[1.5em] mb-4">Get in Touch</h2>
          <p className="w-[80%] mx-auto text-center mb-6">
              Send a quick message to me about your enquiries
          </p>
          <div className="h-auto lg:h-[60%] w-[90%] mx-auto rounded-2xl flex flex-col lg:flex-row shadow-lg">
              <div id="contact-img" className="w-full lg:w-[30%] border h-[200px] lg:h-[95%] mt-4 lg:mt-[1%] rounded-2xl mx-auto lg:mx-0">
                  {/* Image or Placeholder Here */}
              </div>
              <div className="w-full lg:w-[70%] h-auto lg:h-[95%] mt-4 lg:mt-[1%] rounded-2xl mx-auto lg:mx-0">
                  <form className="w-[90%] h-full p-4 mx-auto">
                      <div className="flex flex-col mb-4">
                          <label htmlFor="name">Enter your name</label>
                          <div className="flex flex-col lg:flex-row gap-4">
                              <input
                                  type="text"
                                  className="border-[2px] border-black rounded-md h-[40px] w-full lg:w-[45%] required"
                                  placeholder="First Name"
                              />
                              <input
                                  type="text"
                                  className="border-[2px] border-black rounded-md h-[40px] w-full lg:w-[45%] required"
                                  placeholder="Last Name"
                              />
                          </div>
                      </div>
                      <div className="flex flex-col mb-4">
                          <label htmlFor="subject">Subject of your message</label>
                          <input
                              type="text"
                              className="h-[40px] border-[2px] border-black rounded-md required"
                          />
                      </div>
                      <div className="flex flex-col mb-4">
                          <label htmlFor="email">Enter your email</label>
                          <input
                              type="email"
                              className="h-[40px] border-[2px] border-black rounded-md required"
                          />
                      </div>
                      <div className="flex flex-col mb-4">
                          <label htmlFor="message">Enter your message</label>
                          <textarea
                              className="h-[100px] border-[2px] border-black rounded-md required"
                              placeholder="Your message here"
                          />
                      </div>
                      <button className="bg-black text-white p-2 px-4 border text-[1em] font-bold">
                          Send
                      </button>
                  </form>
              </div>
          </div>
      </section>
  );
};

export default Contact;
