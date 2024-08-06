import React from "react";
import * as images from "../../assets/index.js";
import MyFooter from "../../components/MyFooter.jsx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";   

function Blog1() {
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
              src={images.blog1Large}
              alt=""
            />
            <h1 className="text-4xl mt-12 text-NeutralDGrey font-semibold mb-2 text-center">
              Lo que debe tener en cuenta al comprar llantas
            </h1>
            <br />
          </div>
          <div className="md:px-14 px-4  max-w-screen-2xl mx-auto">
            <p>
              Cambiar las llantas y escogerlas es algo que no se puede dejar al
              azar, al comprarlas, el primer indicador de su calidad es el
              precio. De unas buenas llantas depende la seguridad y el buen
              funcionamiento de los frenos y la dirección.
            </p>
            <br />
            <div>
              <p>
                La <b>medida</b>. Las llantas tienen unas medidas que deben
                respetarse. Están definidas por tres números claramente visibles
                que indican las dimensiones. Suelen venir de la siguiente forma:
                185/65 R15 82T.
              </p>{" "}
              <br />
              <p>
                El primer número (185) corresponde al ancho de la llanta en
                milímetros y es seguido por el perfil o ancho de la llanta y
                está representado en porcentaje en relación a la anchura (en
                este caso 65 por ciento de 185 mm).
              </p>
              <br />
              <p>
                La letra R corresponde al tipo de construcción de la llanta, que
                en este caso significa ‘radial, y el número es el tamaño del rin
                en pulgadas, 15 en este caso.
              </p>
              <br />
              <p>
                El último número (82) se refiere al <b>índice de carga</b>, es
                decir qué tanto peso puede soportar, y la letra ‘T’ hace
                referencia a la velocidad máxima que la llanta está diseñada
                para resistir.
              </p>
              <br />
              <p>
                {" "}
                Todos los carros vienen con unas dimensiones establecidas por el
                fabricante y{" "}
                <b>
                  en lo posible no se debe variar el diámetro total de la llanta
                  y el ancho
                </b>
                , ya que puede causar efectividad de la frenada y desgaste
                prematuro de componentes como la suspensión y la dirección.
              </p>
              <br />
              <p>
                <b>El labrado.</b> Este es importante porque la forma cómo está
                hecha la llanta indica para en qué tipo de terreno funciona
                mejor: pavimento, tierra, o invierno, o algunas son para uso
                mixto.
              </p>
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default Blog1;


  /* <div className="mt-10 pb-10">
  <img src={images.FechaDeCreacion} alt="" />
  <div className="mt-10">
    <p>
      Al costado de cada llanta o en el ‘hombro’ hay varias letras y números que
      son claves: Uno de ellos es un ovalo o rectángulo con 4 dígitos, que{" "}
      <b>indican la semana y año de fabricación</b>. Si observa, por ejemplo, el
      número 4122, esto significa que fue fabricada en la semana 41 del año
      2022.
    </p>
    <br />
    <p>
      <b>Índice de velocidad</b>. Este está establecido por letras. Cuanto mayor
      sea el índice, mejor será el agarre y las propiedades de frenado del
      neumático, pero menor será su vida útil.
    </p>
    <br />
    <p>
      Los índices de velocidad de los neumáticos van de la A (la más baja) a la
      Y (la más alta, más). Sin embargo, la tabla no es completamente
      alfabética. Por ejemplo, H se encuentra entre U y V, y con estas se puede
      llegar a las 210 km/h. las W, Y, Z se utilizan en vehículos de altas
      prestaciones, más de 240 km/h.
    </p>
  </div>
</div>; */

