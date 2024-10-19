

const Contact = () => {
  return (
    <section id="contact-section" className="h-[100vh] ">
      <h2 className="text-center font-bold text-[1.5em] mb-[0.5em]">Get in Touch</h2>
      <p className="w-[60%] ml-[20%] text-center mb-[1em]">Send a quick message to me about your enquiries</p>
      <div className="bg-[#FFF0F5] h-[60%] w-[70%] ml-[15%] rounded-2xl flex shadow-lg">
        <div id="contact-img" className="w-[30%] border h-[95%] mt-[1%] ml-[1%] rounded-2xl ">
          
        </div>
        <div className="w-[60%] h-[95%] mt-[1%] mr-[1%] ml-[10%] rounded-2xl ">
          <form className="w-[80%] h-[80%] p-[1em] ml-[10%] mt-[5%]">

            <div className="mt-[-3em] h-[25%] w-[100%] flex flex-col mb-[0.5em]">
              <label htmlFor="name">Enter your name</label>
              <div className="h-[100%]">
                <input type="text" className="border-[2px] border-[black] rounded-md h-[100%] w-[45%] mr-[10%] required" />
                <input type="text" className="border-[2px] border-[black] rounded-md h-[100%] w-[45%]" />
              </div>
            </div>
            <div className="h-[25%] w-[100%] flex flex-col mb-[0.5em]">
              <label for="subject">Subject of your message</label>
              <input type="text" className="h-[100%] border-[2px] border-[black] required" />
            </div>
            <div className="h-[25%] w-[100%] flex flex-col mb-[0.5em]">
              <label for="subject">Enter your email</label>
              <input type="email" className="h-[100%] border-[2px] border-[black] required" />
            </div>

            <div className="h-[40%] w-[100%] flex flex-col mb-[0.5em]">
              <label for="subject">Enter your message</label>
              <input type="text" className="h-[100%] border-[2px] border-[black] required" />
            </div>
            <button className="bg-[black] text-[white] p-[0.5em] px-[1em] border ml-[83%] text-[1em] font-bold">Send</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;