import React from "react";
import * as images from "../../assets/index.js";
import MyFooter from "../../components/MyFooter.jsx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Blog2() {
  return (
    <>
      <div className="h-screen">
        <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
          {" "}
          <div className="justify-center flex flex-col items-center">
            <div className="relative top-10 w-[100%] mb-5">
              <Link to="/blog">
                <button className="bg-slate-100 rounded-full p-2 shadow-lg ">
                  <FaArrowLeftLong className="w-7 h-7" />
                </button>
              </Link>
            </div>
            <img
              className="rounded-2xl mt-10 md:w-[80%] lg:w-[60%] shadow-md"
              src={images.blog2Large}
              alt=""
            />
            <h1 className="text-4xl mt-12 text-NeutralDGrey font-semibold mb-2 text-center">
              Cuánto aire debe tener la llanta de un auto
            </h1>
            <br />
          </div>
          <div className="md:px-14 px-4  max-w-screen-2xl mx-auto">
            <p>
              Los automóviles son una pieza fundamental en la movilidad
              cotidiana en el mundo. Desde los trayectos urbanos hasta los
              viajes largos por carretera, dependemos de ellos para desplazarnos
              de un lugar a otro de manera eficiente y segura.
            </p>
            <br />
            <div>
              <p>
                Uno de estos aspectos cruciales es el estado de las llantas del
                automóvil, un componente que, a menudo, pasa desapercibido pero
                que desempeña un papel crucial en la seguridad y el rendimiento
                del vehículo.
              </p>{" "}
              <br />
              <h3 className="text-blue-800 font-extrabold text-2xl">
                ¿Cuál es el tiempo de vida de una llanta?
              </h3>
              <br />
              <p>
                Los expertos sugieren reemplazar las llantas cada cinco años,
                independientemente del kilometraje recorrido. Aunque marcas como
                Bridgestone aseguran que pueden durar hasta 50,000 kilómetros,
                es fundamental inspeccionar regularmente las llantas en busca de
                signos de desgaste, como roturas, grietas, orificios,
                deformidades o protuberancias. Un truco sencillo para verificar
                el desgaste de las llantas es colocar una moneda en una de las
                ranuras del neumático. Si se puede ver el contorno plateado, es
                hora de reemplazar las llantas.
              </p>
              <br />
              <h3 className="text-blue-800 font-extrabold text-2xl">
                ¿Cuánto aire deben llevar las llantas del auto?
              </h3>
              <br />
              <p>
                La presión recomendada para las llantas varía según el tamaño
                del automóvil. En general, los carros pequeños deben tener
                alrededor de 30 psi, mientras que los medianos necesitan
                alrededor de 36 psi y los grandes alrededor de 42 psi.
              </p>
              <br />
              <p>
                Mantener las llantas correctamente infladas no solo prolonga su
                vida útil, sino que también contribuye a la seguridad en la
                carretera. Conducir con llantas mal infladas puede afectar
                negativamente la maniobrabilidad, el frenado y el consumo de
                combustible del vehículo, aumentando así el riesgo de
                accidentes. Además, inspeccionar regularmente las llantas puede
                ayudar a identificar problemas potenciales antes de que se
                conviertan en situaciones peligrosas en la carretera.
              </p>
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default Blog2;
