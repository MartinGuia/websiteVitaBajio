import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Quotation() {
    const form = useRef();
    const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ljsxxil", "template_u6mb1oa", form.current, {
        publicKey: "fT4IG8SSJL_MryyCO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      navigate('/')
  };
  return (
   <>
     <main className=" flex items-center flex-col h-dvh">
          <h1 className="text-3xl text-black mb-3 font-bold mt-10">
            Cotización de llantas
          </h1>
          <div className="relative bottom-2 right-[40%]">
            <Link to="/">
              <button className="bg-slate-100 rounded-full p-2 shadow-lg shadow-slate-800/60 ">
              <FaArrowLeftLong className="w-7 h-7"/>
              </button>
            </Link>
          </div>
          <section className="bg-slate-200 w-[50%] p-4 rounded-2xl shadow-lg max-[912px]:w-[50%] max-[430px]:w-[70%]">
            <form ref={form} onSubmit={sendEmail}>
              <article className="flex flex-col items-center mb-6 mt-2">
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className=" flex justify-center mb-2 font-medium "
                  >
                    <h1 className="text-black">Nombre completo</h1>
                  </label>
                  <div className="">
                    <input
                      className="h-9 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto text-black"
                      type="text"
                      name="user_name"
                      placeholder="nombre"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="flex justify-center mb-2 font-medium "
                  >
                    <h1 className="text-black">Número de télefono</h1>
                  </label>
                  <div className="">
                    <input
                      className="h-9 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto text-black"
                      type="number"
                      name="user_number"
                      placeholder="Número de télefono"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className="flex justify-center mb-2 font-medium "
                  >
                    <h1 className="text-black">Correo</h1>
                  </label>
                  <div className="">
                    <input
                      className="h-9 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto text-black"
                      type="email"
                      name="user_email"
                      placeholder="Correo"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor=""
                    className="flex justify-center mb-2 font-medium"
                  >
                    <h1 className="text-black font-medium">Mesaje</h1>
                  </label>
                  <textarea
                    className="text-black text-sm h-20 rounded-md w-96 shadow-md font-medium p-1 max-[1280px]:w-auto"
                    name="message"
                  />
                </div>
              </article>
              <article className="mb-7">
                <div className="flex justify-center">
                  <button
                    className="bg-yellow-300 shadow-lg shadow-yellow-500/30 text-white rounded-md py-2 px-8"
                    type="submit"
                    value="Send"
                  >
                    Agregar
                  </button>
                </div>
              </article>
            </form>
          </section>
        </main>
   </>
  )
}

export default Quotation