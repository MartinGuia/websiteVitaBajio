import { Carousel } from "flowbite-react";
import * as images from "../assets/index.js";

function Home() {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto duration-700">
          {/* carousel1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img className="w-96" src={images.main1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="md:text-4xl lg:text-5xl text-3xl font-semibold mb-4 text-NeutralDGrey md:w-3/4 leading-snug">
                Vita
                <span className="text-yellow-300 leading-snug"> Bajío</span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Desde hace mas de 10 años ofreciendo el servicio de venta de
                llanta nueva y renovada
              </p>
              <button className="btn-primary">Cotiza tus llantas</button>
            </div>
          </div>
          {/* carousel2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img className="w-96" src={images.slider1} alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="md:text-4xl lg:text-5xl text-3xl font-semibold mb-4 text-NeutralDGrey md:w-3/4 leading-snug">
                "Rodando hacia el futuro:
                <span className="text-yellow-300 leading-snug">
                  {" "}
                  Calidad y Seguridad en cada giro.
                </span>
              </h1>
              <p className="text-NeutralDGrey text-base mb-8">
                Desde hace mas de 10 años ofreciendo el servicio de venta de
                llanta nueva y renovada
              </p>
              <button className="btn-primary">Cotiza tus llantas</button>
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
