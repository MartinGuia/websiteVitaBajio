import ModalWindow from "../components/ModalWindow.jsx";
import React, { useState } from "react";
import * as images from "../assets/index.js";

function NewFreeAxle() {
  const CatalogueEjeLibre = [
    {
      id: 1,
      title: "R123",
      img1: [images.R123],
      img2: [images.ejeLibre],
      img3: [images.lDistancia],
      caract1:
        "- Está diseñada para aplicaciones tanto de larga distancia como de servicio regional. Diseñada con un costado innovador INTLLISHAPE que ayuda a reducir el peso total de la llanta sin reducir durabilidad.",
      caract2:
        "- También posee ranuras defensivas laterales para combatir el desgaste irregular y costillas protectoras para reducir los daños por cortes.",
      caract3:
        "- Ranuras transversales para mejor tracción y agarre en todo tipo de condición.",
      caract4:
        "- Ideal para flotas que buscan reducir el consumo de combustible y sus costos de operación.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "295/75R22.5",
      medida4: "285/75R24.5",
      ancho1: "287",
      ancho2: "290",
      ancho3: "297",
      ancho4: "287",
      profundidad1: "8.7",
      profundidad2: "8.7",
      profundidad3: "8.7",
      profundidad4: "8.7",
      logo: [images.bridgestone],
      logo2: [images.B],
    },
    {
      id: 2,
      title: "FT492",
      img1: [images.FT492],
      img2: [images.ejeLibre],
      img3: [images.lDistancia],
      caract1:
        "- Mayor renovabilidad gracias a sus costillas protectores en la pared.",
      caract2:
        "- Ofrece reducción en la resistencia al rodamiento mediante las costillas y bloques durante la rotación.",
      caract3:
        "- Certificada por la regulación smartway de eficiencia del uso de combustuble.",
      medida1: "11R22.5",
      medida2: "11R24.5",
      medida3: "295/75R22.5",
      medida4: "285/75R24.5",
      ancho1: "287",
      ancho2: "290",
      ancho3: "292",
      ancho4: "287",
      profundidad1: "9",
      profundidad2: "9",
      profundidad3: "9",
      profundidad4: "9",
      logo: [images.Firestone],
      logo2: [images.F],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null); // Estado para el item seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para la visibilidad del modal

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3">
        {CatalogueEjeLibre.map((card) => (
          <button
            key={card.id}
            onClick={() => handleOpenModal(card)}
            className="flex flex-col border-[1px] rounded-xl items-center w-full shadow-xl hover:-translate-y-3 duration-700  bg-slate-100"
          >
            <h1 className="bg-yellow-300 w-full rounded-t-lg flex text-white font-semibold p-2 shadow-md">
              <div className="w-[90%]">{card.title}</div>
              <div className="w-[10%]">
                <img className="size-6" src={card.logo2} alt="" />
              </div>
            </h1>
            <div className="mt-1">
              <img
                className="size-28"
                src={card.img1}
                alt="Llanta nueva eje libre"
              />
            </div>
            <div className="flex">
              <img src={card.img2} alt="Eje libre" />
              <img src={card.img3} alt="Tipo de camino" />
              <img src={card.img4} alt="" />
            </div>
          </button>
        ))}
      </div>

      {isModalOpen && (
        <ModalWindow item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default NewFreeAxle;
