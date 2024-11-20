import * as images from "../assets/index.js";
import React, { useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
// import { TbTruckDelivery } from "react-icons/tb";
import { MdRequestQuote } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

function Services() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "Inspección Eléctrica",
      content:
        "El daño real se evalúa con una maquinaria especializada que permite detectar aquellos daños no visibles.",
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

  const quotes = [
    {
      id: 1,
      title: "Asesorate",
      description:
        "Contáctanos y recibe una asesoría personalizada para elegir la mejor calidad y precio para tu negocio.",
      icon: <FaHandsHelping className="size-14 " />,
      to: "/llanta-renovada",
    },
    // {
    //   id: 2,
    //   title: "Llama",
    //   description:
    //     "Llámanos para hacer tu pedido.",
    //   icon: <TbTruckDelivery className="size-14" />,
    //   to: "/llanta-nueva",
    // },
    {
      id: 2,
      title: "Cotiza y compra",
      description:
        "Revisa todo nuestro stock, realiza tus cotizaciones al momento y compra solo lo que necesites.",
      icon: <MdRequestQuote className="size-14" />,
      to: "/llanta-nueva",
    },
    {
      id: 3,
      title: "Recibe",
      description:
        "Recibe en la comodidad de tu empresa o recoge tu pedido en nuestras instalaciones.",
      icon: <CiDeliveryTruck className="size-14" />,
      to: "/llanta-nueva",
    },
  ];
  const goToStep = (step) => {
    setCurrentStep(step);
  };
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto"  id="services">
      <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">Servicios</h1>
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
                alt="Renovado de Llantas"
                className="w-[50%]"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md cursor-pointer"
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
        <article className="md:ml-10 md:w-[50%] mt-6 md:mt-0">
          <div className="mb-4 text-center">
            <h2 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
              <span className="text-yellow-300">Renovar</span> en lugar de comprar
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
      <div className="mt-14 md:1/2 mx-auto text-center">
        <h2 className="text-4xl text-NeutralDGrey font-semibold mb-3">
          Realiza la <span className="text-yellow-300">compra</span> en 3 pasos
        </h2>
        {/* <p className="text-neutralGrey">
          Explora nuestro catálogo en línea y descubre la mejor selección de
          llantas nuevas y bandas renovadas para tus vehículos, te ofrecemos la
          conveniencia de elegir entre dos opciones: una sección dedicada a las
          llantas nuevas, donde encontrarás una amplia variedad de modelos para
          satisfacer tus necesidades y preferencias; y otra sección dedicada a
          las bandas renovadas, donde podrás encontrar opciones económicas y de
          calidad para prolongar la vida útil de tus llantas. Confía en nuestra
          experiencia y encuentra la opción perfecta para optimizar el
          rendimiento y seguridad de tus vehículos.
        </p> */}

        {/* cards */}
        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 md:gap-8">
          {quotes.map((quote, id) => (
            <div key={id}  className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-60 sm:h-80 rounded-md flex items-center justify-center h-full">
              <div>
                <div className="flex items-center justify-center">
                  <div className="mb-4 h-14 w-14  ">
                    <div>{quote.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold text-NeutralDGrey mb-2 px-2">
                    {quote.title}
                    <hr className="border-b-2 w-auto border-b-yellow-300"/>
                  </h4>
                </div>
                <p className="text-sm text-neutralGrey">{quote.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
