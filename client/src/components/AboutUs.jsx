import React from "react";
import ButtonFacebook from "./ui/ButtonFacebook";
import ButtonWhatsapp from "./ui/ButtonWhatsapp";
import * as images from "../assets/index.js";

function AboutUs() {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="about">
      <div className="text-center my-8" >
        <h2 className="text-4xl text-NeutralDGrey font-semibold mb-2">
          Nuestros clientes
        </h2>
        <p className="text-neutralGrey">
          Damos servicio de venta de llanta nueva y renovado a las principales
          empresas de transporte de carga, personal y logística en la región
          Bajío, tales como Express MILAC, Coca Cola, Transportes Tresguerras,
          Transportes Gym Moncolva, Trans-Energéticos, Royal Transports,
          Pilgrim’s Pride, Transportes Urbanos de
          Querétaro,Translíquidos,Transnoel, etc.
        </p>
        {/* Company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img className="w-[12%]" src={images.amealcenses} alt="" />
          <img className="w-[12%]" src={images.GYM} alt="" />
          <img className="w-[12%]" src={images.gab} alt="" />
          <img className="w-[12%]" src={images.moviza} alt="" />
          <img className="w-[12%]" src={images.tminerva} alt="" />
        </div>
      </div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <iframe
              className="w-[100%] mt-5 lg:h-72 md:h-72"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2971990449066!2d-101.18318940025155!3d20.564383419385976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c853f95560771%3A0xc23f71fda5f290c0!2sVita%20Bajio!5e0!3m2!1ses!2smx!4v1715801749820!5m2!1ses!2smx"
            ></iframe>
          </div>
          <div className="md:w-3/5 mx-auto text-center md:text-justify">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 md:w-4/5">
              Sobre Vita Bajío
            </h2>
            <p className="md:w-11/12 text-sm text-neutralGrey ">
              Vita Bajío es una empresa de marcas y productos de automoción que
              ofrece un servicio de venta de llantas nuevas y renovadas en todo
              el país. Nuestro objetivo es brindar a nuestros clientes la mejor
              experiencia de compra y venta de llantas, garantizando un mejor
              rendimiento y seguridad para sus vehículos.
            </p>
            <p className="md:w-11/12 text-sm text-neutralGrey mb-8">
              En Vita Bajío, buscamos desarrollar soluciones innovadoras y
              confiables que le permitan satisfacer sus necesidades de vida y
              trabajo
            </p>
            {/* <div className="md:w-5/6">
              <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 ">
                Redes sociales
              </h2>
              <div className="flex justify-between ">
                <div>
                  <ButtonFacebook />
                </div>
                <div>
                  <ButtonWhatsapp />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto mb-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralDGrey text-center font-semibold mb-4 md:w-4/5">
              Misión
            </h2>
            
            <p className="md:w-11/12 text-sm text-neutralGrey text-center">
              Ser líder en servicios llanteros para la industria del transporte
              regional en sus diferentes segmentos, ofreciendo a nuestros
              clientes el mejor renovado de sus llantas, soportado por un
              producto líder y tecnología propia mundial, enfocados a otorgar la
              máxima calidad, servicio e información que nos permita contribuir
              a lograr disminuir sus costos de operación y obtener la máxima
              rentabilidad de sus empresas.
            </p>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralDGrey text-center font-semibold mb-4 md:w-4/5">
              Visión
            </h2>
            <p className="md:w-11/12 text-sm text-neutralGrey text-center">
              En una alianza estratégica con personal altamente motivado y
              comprometido a intensificar nuestra posición competitiva en el
              mercado del transporte regional, ser el mejor proveedor de llanta
              y renovado, así como el mejor franquiciatario de la red de
              renovadores soportado por el compromiso de mejora continua, eterna
              calidad, servicio y satisfacción de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
