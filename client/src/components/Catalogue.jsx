import { GiFlatTire } from "react-icons/gi";
import { PiTireDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function Catalogue() {
  const catalogues = [
    {
      id: 1,
      title: "Llanta renovada",
      description:
        "Descubre nuestra gama de llantas renovadas, una opción ecológica y económica que no sacrifica la calidad.",
      icon: <GiFlatTire className="size-14 -ml-5" />,
      to: "/llanta-renovada",
    },
    {
      id: 2,
      title: "Llanta Nueva",
      description:
        "Explora nuestro catálogo de llantas nuevas, diseñado para ofrecerte lo último en tecnología y rendimiento. Con una variedad de marcas líderes y tamaños para cada tipo de vehículo, garantizamos una conducción suave, segura y eficiente.",
      icon: <PiTireDuotone className="size-14 -ml-5" />,
      to: "/llanta-nueva",
    },
  ];
  return (
    <div className="md:px-14 px-4 pb-10 max-w-screen-2xl mx-auto" id="catalogo">
      <div className="mt-10 md:1/2 mx-auto text-center">
        <h2 className="text-4xl text-NeutralDGrey font-semibold mb-3">
          Catalogo de llantas
        </h2>
        <p className="text-neutralGrey">
          Explora nuestro catálogo en línea y descubre la mejor selección de
          llantas nuevas y bandas renovadas para tus vehículos, te ofrecemos la
          conveniencia de elegir entre dos opciones: una sección dedicada a las
          llantas nuevas, donde encontrarás una amplia variedad de modelos para
          satisfacer tus necesidades y preferencias; y otra sección dedicada a
          las bandas renovadas, donde podrás encontrar opciones económicas y de
          calidad para prolongar la vida útil de tus llantas. Confía en nuestra
          experiencia y encuentra la opción perfecta para optimizar el
          rendimiento y seguridad de tus vehículos.
        </p>

        {/* cards */}
        <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {catalogues.map((catalogue) => (
            <div
              key={catalogue.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <Link to={catalogue.to}>
                <div>
                  <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <div>{catalogue.icon}</div>
                  </div>
                  <h4 className="text-2xl font-bold text-NeutralDGrey mb-2 px-2">
                    {catalogue.title}
                  </h4>
                  <p className="text-sm text-neutralGrey">
                    {catalogue.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
