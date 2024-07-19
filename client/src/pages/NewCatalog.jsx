import * as images from "../assets/index.js";
import { useState } from "react";
import NewTraction from "../components/NewTraction.jsx";
import NewAllPosition from "../components/NewAllPosition.jsx";
import NewFreeAxle from "../components/NewFreeAxle.jsx";

function NewCatalog() {
  const [vista, setVista] = useState("todaPosicion");

  const AllPosition = () => (
    <>
      <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
        Toda posición
      </h1>
      <NewAllPosition />
    </>
  );
  const Traction = () => (
    <>
      <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
        Tracción
      </h1>
      <NewTraction />
    </>
  );
  const FreeAxle = () => (
    <>
      <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
        Eje libre
      </h1>
      <NewFreeAxle />
    </>
  );

  // Funciones para cambiar la vista
  const mostrarTodaPosicion = () => setVista("todaPosicion");
  const mostrarTraccion = () => setVista("traccion");
  const mostrarEjeLibre = () => setVista("ejeLibre");

  let contenido;
  if (vista === "todaPosicion") {
    contenido = <AllPosition />;
  } else if (vista === "traccion") {
    contenido = <Traction />;
  } else if (vista === "ejeLibre") {
    contenido = <FreeAxle />;
  }
  return (
    <>
      <section className="flex flex-col items-center mt-4">
        <div>
          <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
            Llanta nueva
          </h1>
        </div>
        {/* <div className="relative bottom-6 right-[40%]">
              <Link to="/llantas">
                <button className="bg-white rounded-full p-1 shadow-lg shadow-slate-800/60">
                  <img src={images.flecha} className="size-6" alt="" />
                </button>
              </Link>
            </div> */}

        <div className="flex justify-around mt-5 max-[430px]:flex-col max-[430px]:items-center">
          <button
            onClick={mostrarTodaPosicion}
            className="text-black flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-lg hover:-translate-y-3 duration-700 border-[1px] max-[540px]:w-[25%] max-[430px]:w-[90%] max-[430px]:mb-4"
          >
            <img src={images.todaPosicion} alt="" className="mt-1" />
            <p className="font-bold">Toda Posición</p>
            <p className="text-center text-sm mt-2 font-semibold max-[540px]:text-xs">
              Este tipo de llantas puede ser utilizado en todos los ejes del
              vehículo.
            </p>
          </button>

          <button
            onClick={mostrarTraccion}
            className="text-black flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-lg hover:-translate-y-3 duration-700 border-[1px] max-[540px]:w-[25%] max-[430px]:w-[90%] max-[430px]:mb-4"
          >
            <img src={images.traccion} alt="" className="mt-1" />
            <p className="font-bold">Tracción</p>
            <p className="text-center text-sm mt-2 font-semibold max-[540px]:text-xs">
              Neumático ideal para ejes de tracción.
            </p>
          </button>

          <button
            onClick={mostrarEjeLibre}
            className="text-black flex flex-col items-center w-[18%] h-auto p-3 bg-slate-100 shadow-lg rounded-lg hover:-translate-y-3 duration-700 border-[1px] max-[540px]:w-[25%] max-[430px]:w-[90%]"
          >
            <img src={images.ejeLibre} alt="" className="mt-1" />
            <p className="font-bold">Eje Libre</p>
            <p className="text-center text-sm mt-2 font-semibold max-[540px]:text-xs">
              Neumático para uso exclusivo en semi-remolques, dollies y patines.
            </p>
          </button>
        </div>
      </section>

      {/* Tarjetas de catalogo */}
      <section className="mt-5 mb-2">{contenido}</section>
    </>
  );
}

export default NewCatalog;
