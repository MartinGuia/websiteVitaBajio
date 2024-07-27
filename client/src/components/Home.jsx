import { Carousel } from "flowbite-react";
import * as images from "../assets/index.js";
import { Link } from "react-router-dom";
import ButtonWhatsapp from "./ui/ButtonWhatsapp.jsx";

function Home() {
  const phoneNumber = "524641363889"; // Reemplaza con tu número de WhatsApp
  const message = "¡Hola! Me gustaría solicitar una cotización.";
  return (
    <div className=" bg-my-backgroundImage bg-no-repeat bg-cover bg-center">
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen"
        id="home"
      >
        <Carousel className="w-full mx-auto duration-700">
          {/* carousel1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="w-[80%] lg:w-auto">
              <img className="" src={images.main1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 bg-neutralSilver p-8 rounded shadow-md">
              <h1 className="md:text-4xl lg:text-5xl text-3xl font-semibold mb-4 text-NeutralDGrey md:w-3/4 leading-snug">
                Vita
                <span className="text-yellow-300 leading-snug"> Bajío</span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Desde hace mas de 10 años ofreciendo el servicio de venta de
                llanta nueva y renovada
              </p>
              <p className="font-semibold">Solicita asesoramiento</p>
              <div>
                <ButtonWhatsapp phoneNumber={phoneNumber} message={message} />
              </div>
            </div>
          </div>
          {/* carousel2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-[60%]">
              <img className="" src={images.slider1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2 bg-neutralSilver p-8 rounded shadow-md">
              <h1 className="md:text-4xl lg:text-5xl text-3xl font-semibold mb-4 text-NeutralDGrey md:w-3/4 leading-snug">
                "Rodando hacia el futuro:
                <span className="text-yellow-300 leading-snug">
                  Calidad y Seguridad en cada giro.
                </span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Manejamos llantas para camión en todas las medidas, de la marca
                Bridgestone, Firestone, Dayton; así como el
                renovado de llantas Bandag, con más de 50 modelos de banda de
                acuerdo a la necesidad de cada uno de nuestros clientes.
              </p>
              <Link to="/cotizacion">
                <button className="btn-primary">Cotiza tus llantas</button>
              </Link>
            </div>
          </div>
          {/* carousel3 */}
          {/* <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img className="w-96" src={images.main1} alt="" />
            </div> */}
          {/* hero text */}
          {/* <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-NeutralDGrey md:w-3/4 leading-snug">
                Vita
                <span className="text-yellow-300 leading-snug"> Bajío</span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Desde hace mas de 10 años ofreciendo el servicio de venta de
                llanta nueva y renovada
              </p>
              <button className="btn-primary">Cotiza tus llantas</button>
            </div>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
