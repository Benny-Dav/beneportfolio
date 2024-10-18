

const Contact = () => {
  return (
    <section id="contact-section" className="h-[100vh]">
      <h2 className="text-center font-bold text-[1.5em] mb-[0.5em]">Get in Touch</h2>
      <p className="w-[60%] ml-[20%] text-center mb-[1em]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ab quibusdam id totam debitis soluta fugiat nam a nemo dolorum sapiente, </p>
      <div className="h-[60%] w-[70%] ml-[15%] border rounded-2xl flex">
        <div className="w-[30%] border h-[95%] mt-[1%] ml-[1%] rounded-2xl "></div>
        <div className="w-[60%] h-[95%] mt-[1%] mr-[1%] ml-[10%] rounded-2xl border">
          <form className="w-[80%] h-[80%] p-[1em] ml-[10%] mt-[5%]">

            <div className="h-[25%]  flex flex-col mb-[1em]">
              <label htmlFor="name">Enter your name</label>
              <div className="h-[100%]">
                <input type="text" className="border rounded-md h-[100%] w-[45%] mr-[5%]" />
                <input type="text" className="border rounded-md h-[100%] w-[45%]" />
              </div>
            </div>
            <div>
              <label for="subject">Subject of your message</label>
              <input type="text" />
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;