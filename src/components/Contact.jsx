

const Contact = () => {
  return (
    <section className="h-[100vh]">
        <h2 className="text-center font-bold text-[1.5em] mb-[0.5em]">Get in Touch</h2>
        <p className="w-[60%] ml-[20%] text-center mb-[1em]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ab quibusdam id totam debitis soluta fugiat nam a nemo dolorum sapiente, </p>
        <div className="h-[60%] w-[70%] ml-[15%] border rounded-2xl flex">
            <div className="w-[30%] border h-[95%] mt-[1%] ml-[1%] rounded-2xl "></div>
            <div className="w-[60%] h-[95%] mt-[1%] mr-[1%] ml-[10%] rounded-2xl border">
            <form className="w-[100%] h-[100%] p-[1em]">

            {/* <div className="h-[15%] border flex justify-between">
                <label className=" " htmlFor="name">Your name</label>
                <input className="w-[40%] h-[100%] border" name="name" type="text"/>

                <label className=" " htmlFor="email">Your email</label>
                <input className="w-[40%] h-[100%] border" name="email" type="email"/>
                </div> */}
       
            </form>
            </div>
        </div>
    </section>
  )
}

export default Contact;