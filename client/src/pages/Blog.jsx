import * as images from "../assets/index.js";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import MyFooter from "../components/MyFooter.jsx";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Lo que debe tener en cuenta al comprar llantas",
      img: [images.blog1],
      to: "/blog1",
    },
    {
      id: 2,
      title: "Cuánto aire debe tener la llanta de un auto",
      img: [images.blog2],
      to: "/blog2",
    },
    {
      id: 3,
      title: "POR QUÉ DEBERÍA COMPRAR LLANTAS RENOVADAS",
      img: [images.blog3],
      to: "/blog3",
    },
  ];
  return (
    <>
      <div className="">
        <div className="md:px-14 pt-10 px-4 h-screen max-w-screen-2xl mx-auto">
          {" "}
          <div className="text-center mx-auto">
            <h1 className="text-4xl text-NeutralDGrey font-semibold mb-2 text-center">
              Blog
            </h1>
            <div className="relative bottom-12 right-[40%]">
              <Link to="/">
                <button className="bg-slate-100 rounded-full p-2 shadow-lg  ">
                  <FaArrowLeftLong className="w-7 h-7" />
                </button>
              </Link>
            </div>
            {/* <p className="text-sm text-neutralGrey mb-8  mx-auto">
            El siguiente blog es el mejor lugar para leer sobre las últimas
            novedades sobre llantas, tendencias y más. vea quién se une a la
            comunidad, lea sobre cómo nuestra comunidad está aumentando y mucho más
          </p> */}
          </div>
          {/* todos los blogs */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="mx-auto relative mb-12 cursor-pointer"
              >
                <img src={blog.img} alt="Llantas" className="rounded" />
                <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                  <h3>{blog.title}</h3>
                  <div className="flex items-center justify-center gap-5">
                    <Link
                      to={blog.to}
                      className="font-bold text-yellow-300 hover:text-neutral-700"
                    >
                      Leer más{" "}
                    </Link>
                    <FaLongArrowAltRight className="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}

export default Blog;
