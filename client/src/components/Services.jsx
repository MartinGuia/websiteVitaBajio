import * as images from "../assets/index.js";
import React, { useState } from "react";

function Services() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "Inspección Eléctrica",
      content:
        "El daño real se evalúa con una maquinaria especializada que permite detectar aquellos daños visibles.",
      img: [images.inspeccionElec],
    },
    {
      title: "Raspado",
      content:
        "En esta etapa, el casco se infla y se retira la superficie desgastada. Se perfecciona la redondez y se prepara la superficie para una nueva banda.",
      img: [images.raspado],
    },
    {
      title: "Cardeo",
      content:
        "Se retira el material dañado que se identificó durante la inspección inicial y se llevan a cabo las reparaciones.",
      img: [images.cardeo],
    },
    {
      title: "Reparaciones y aplicación de hule cojín",
      content:
        "Una capa de hule sin vulcanizar es extraida contra la superficie preparada del casco, dejándolo listo para recibir la nueva banda de rodamiento.",
      img: [images.aplicacionCojin],
    },
    {
      title: "Embandado",
      content:
        "La nueva banda de rodamientos se aplica derecha y centrada en el casco.",
      img: [images.embandado],
    },
    {
      title: "Encamisado",
      content:
        "La llanta con la nueva banda de rodamiento se encamisa y se prepara para la vulcanización.",
      img: [images.encamisado],
    },
    {
      title: "Vulcanización",
      content:
        "El autoclave permite que el hule cojín vulcanice y se adhiera permanentemente a la nueva banda de rodamiento.",
      img: [images.vulcanizado],
    },
    {
      title: "Inspeccion final",
      content:
        "Por último, se realiza una inspección visual y manual a fin de cumplir con nuestras especificaciones de calidad. Además, se mejora la condición estética al pintar la llanta.",
      img: [images.inspeccionFinal],
    },
  ];

  const goToStep = (step) => {
    setCurrentStep(step);
  };
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
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
      {/* Services card */}
      <div className="flex flex-col md:flex-row justify-between bg-slate-100 rounded p-4 shadow-md">
        <div className=" w-full md:w-2/3 lg:w-1/2 ">
          <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
            Proceso de Renovado de Llantas
          </h1>
          {/* <hr className="border-b-2 border-yellow-400 rounded-md drop-shadow-md w-auto mb-4" /> */}
          <div className="bg-gray-200 p-4 mb-4 rounded-lg shadow-lg text-black">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p>{steps[currentStep - 1].content}</p>
              <img
                src={steps[currentStep - 1].img}
                alt=""
                className="w-[50%]"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
              onClick={() => goToStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Anterior
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md"
              onClick={() => goToStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
            >
              Siguiente
            </button>
          </div>
        </div>
        {/* Text */}
        <article className="md:ml-10 md:w-[50%]">
          <div className="mb-4 text-center">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
              Renovar en lugar de comprar
            </h2>
          </div>
          <div>
            <p className="text-justify">
              Un buen renovado ayuda a los propietarios de negocios inteligentes
              a incrementar el rendimiento de sus llantas y reducir sus costos
              de operación. Hoy en día la mayoría de las flotas de camiones,
              aerolíneas, empresas de construcción, agricultures e incluso
              autobuses escolares utilizan este proceso para eficientar sus
              costos sin sacrificar seguridad, calidad, desempeño, tecnología,
              kilometraje y sustentabilidad. Tú también reduce los costos de tu
              empresa y aumenta los beneficios de tu flota con un buen renovado,
              no te dejes llevar por los mitos y conoce todas las ventajas que
              ofrece el ronovado.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Services;
