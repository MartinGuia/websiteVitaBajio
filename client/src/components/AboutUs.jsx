import React from "react";
import ButtonFacebook from "./ui/ButtonFacebook";
import ButtonWhatsapp from "./ui/ButtonWhatsapp";

function AboutUs() {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <iframe
              className="w-[100%] mt-5 lg:h-72 md:h-72"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.2971990449066!2d-101.18318940025155!3d20.564383419385976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c853f95560771%3A0xc23f71fda5f290c0!2sVita%20Bajio!5e0!3m2!1ses!2smx!4v1715801749820!5m2!1ses!2smx"
            ></iframe>
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 md:w-4/5">
              Sobre Vita Bajío
            </h2>
            <p className="md:w-5/6 text-sm text-neutralGrey ">
              Vita Bajío es una empresa de marcas y productos de automoción que
              ofrece un servicio de venta de llantas nuevas y renovadas en todo
              el país. Nuestro objetivo es brindar a nuestros clientes la mejor
              experiencia de compra y venta de llantas, garantizando un mejor
              rendimiento y seguridad para sus vehículos.
            </p>
            <p className="md:w-5/6 text-sm text-neutralGrey mb-8">
              En Vita Bajío, buscamos desarrollar soluciones innovadoras y
              confiables que le permitan satisfacer sus necesidades de vida y
              trabajo
            </p>
            <div className="md:w-5/6">
              <h2 className="text-4xl text-NeutralDGrey font-semibold mb-4 md:w-4/5">
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
            </div>
            {/* <h1 className="text-4xl font-semibold mb-4">Sobre Vita Bajío</h1>
            <p className="text-neutralDGrey text-base">
              Vita Bajío es una empresa de marcas y productos de automoción que
              ofrece un servicio de venta de llantas nuevas y renovadas en todo
              el país. Nuestro objetivo es brindar a nuestros clientes la mejor
              experiencia de compra y venta de llantas, garantizando un mejor
              rendimiento y seguridad para sus vehículos.
            </p>
            <p className="text-neutralDGrey text-base">
              En Vita Bajío, buscamos desarrollar soluciones innovadoras y
              confiables que le permitan satisfacer sus necesidades de vida y
              trabajo
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
