import React from "react";
import * as images from "../../assets/index.js";
import MyFooter from "../../components/MyFooter.jsx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Blog3() {
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
              src={images.blog3Large}
              alt=""
            />
            <h1 className="text-4xl mt-12 text-NeutralDGrey font-semibold mb-2 text-center">
              ¿Por qué debería comprar llantas renovadas?
            </h1>
            <br />
          </div>
          <div className="md:px-14 px-4  max-w-screen-2xl mx-auto">
            <p>
              Las llantas renovadas, a veces conocidos como llantas
              <b>recapadas/reencauchadas</b>, han sido sometidas a un proceso de
              remanufactura para reemplazar la banda de rodamiento desgastada de
              los llantas usados por una banda de rodamiento nueva que ayuda a
              prolongar la vida útil de la llanta. Los renovados representan
              casi la mitad de todas las llantas de reemplazo del mercado de
              llantas para camiones de Norteamérica. Se pueden usar en todas las
              posiciones de tracción y tráiler, y en posiciones de dirección en
              vehículos de transporte que no sean de pasajeros.
            </p>
            <br />
            <h3 className="text-blue-800 font-extrabold text-2xl">
              BENEFICIOS DE LAS LLANTAS RENOVADAS
            </h3>
            <br />
            <div>
              <p>
                Ya sea que renove sus propias carcasas de llantas o las compre a
                un distribuidor, hacer uso del renovado tiene una serie de
                beneficios notables. El renovado de llantas es asequible y
                ecológico. Además, la calidad de un llanta renovada hoy en día
                es mejor que nunca.
              </p>{" "}
              <br />
              <h3 className="text-blue-800 font-extrabold text-2xl">
                BENEFICIOS ECONÓMICOS
              </h3>
              <br />
              <p>
                Los beneficios económicos de renovar y comprar llantas renovadas
                son significativos para los consumidores y las empresas de
                transporte. Aquí tienes un resumen de los principales beneficios
                económicos:
              </p>
              <span>
                <b> - Costo Reducido:</b> Las llantas renovadas suelen costar
                entre un 30% y un 50% menos que las llantas nuevas. Este ahorro
                es especialmente atractivo para las flotas comerciales que
                requieren un gran número de llantas, como empresas de transporte
                y logística.
              </span>
              <br />
              <span>
                <b>- Mayor Retorno de Inversión:</b> Al extender la vida útil de
                las llantas existentes, las empresas pueden maximizar su
                inversión inicial, reduciendo así los costos operativos
                generales. Renovar una llanta puede hacerse varias veces, lo que
                multiplica su valor a lo largo del tiempo.
              </span>
              <br />
              <span>
                <b> - Preservación de Capital:</b> El ahorro en costos permite a
                las empresas y consumidores destinar recursos financieros a
                otras áreas críticas, como el mantenimiento de vehículos,
                mejoras tecnológicas o expansión de operaciones.
              </span>
              <br />
              <span>
                <b>- Impuestos y Incentivos:</b> En algunos países, existen
                incentivos fiscales o deducciones para las empresas que utilizan
                productos reciclados o renovados, lo que puede traducirse en
                beneficios fiscales adicionales.
              </span>
              <br />
              <b>- Reducción de Costos de Eliminación:</b> Renovar llantas
              disminuye la necesidad de eliminar llantas usadas, lo que puede
              resultar en ahorros en los costos asociados con la gestión y el
              desecho de residuos.
              <br />
              <p>
                Al elegir llantas renovadas, tanto los consumidores individuales
                como las empresas pueden disfrutar de un enfoque más económico y
                sostenible, optimizando sus gastos y apoyando prácticas
                ambientales responsables.
              </p>
              <br />
              <h3 className="text-blue-800 font-extrabold text-2xl">
                MITOS SOBRE LAS LLANTAS RENOVADAS
              </h3>
              <br />
              <h4 className="font-extrabold text-xl">
                Mito #1 - Las llantas renovadas son menos seguras que las
                llantas nuevas.
              </h4>
              <p>
                Las llantas renovadas pasan por un proceso de inspección y
                renovación exhaustivo que incluye pruebas de calidad y seguridad
                para garantizar que cumplen con los estándares de la industria.
                Cuando se realizan correctamente, las llantas renovadas son tan
                seguras como las llantas nuevas y son utilizadas por muchas
                flotas comerciales y empresas de transporte debido a su
                fiabilidad.
              </p>
              <h4 className="font-extrabold text-xl">
                Mito #2 - Las llantas renovadas no duran tanto como las llantas
                nuevas.
              </h4>
              <p>
                La durabilidad de las llantas renovadas depende del proceso de
                renovación y de los materiales utilizados. Con la tecnología
                moderna, las llantas renovadas pueden ofrecer una vida útil
                comparable a la de las llantas nuevas, siempre que se mantengan
                adecuadamente y se utilicen en las condiciones adecuadas.
              </p>
              <h4 className="font-extrabold text-xl">
                Mito #3 - Las llantas renovadas no son adecuadas para vehículos
                de pasajeros.
              </h4>
              <p>
                Si bien las llantas renovadas son comunes en vehículos
                comerciales, también son una opción viable para vehículos de
                pasajeros. Siempre y cuando se compren a un proveedor de
                confianza que cumpla con los estándares de seguridad, las
                llantas renovadas pueden ser una opción económica y segura para
                los conductores particulares.
              </p>
              <h4 className="font-extrabold text-xl">
                Mito #4 - Todas las llantas que fallan en la carretera son
                llantas renovadas.
              </h4>
              <p>
                Los fallos de las llantas en carretera pueden deberse a diversas
                causas, como la falta de mantenimiento, la presión inadecuada o
                el uso de llantas defectuosas, independientemente de si son
                nuevas o renovadas. De hecho, los estudios muestran que la
                mayoría de las fallas en carretera están relacionadas con el mal
                mantenimiento o el uso incorrecto de las llantas, y no
                exclusivamente con las llantas renovadas.
              </p>
              <h4 className="font-extrabold text-xl">
                Mito #5 - Las llantas renovadas no son ecológicas.
              </h4>
              <p>
                Las llantas renovadas son, de hecho, más ecológicas que las
                nuevas porque reutilizan materiales existentes, reducen la
                demanda de recursos naturales y disminuyen el número de llantas
                desechadas en vertederos. Este enfoque sostenible es beneficioso
                para el medio ambiente y ayuda a reducir la huella de carbono.
              </p>
              <br />
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default Blog3;
