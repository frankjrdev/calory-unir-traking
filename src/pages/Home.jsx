import { LinearProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import avocado from "../assets/avocado.svg";
import clipboard from "../assets/clipboard.svg";
import Plate from "../assets/plate-example.png";
import target from "../assets/target.svg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesInformationCard from "../components/ServicesInformationCard";

export default function Home() {
  const navigate = useNavigate();

  const handleVerRecetasClick = () => {
    navigate("/recipes");
  };

  return (
    <>
      <Header></Header>
      <main className="flex flex-col lg:flex-row justify-center w-full">
        <div className="p-16 flex flex-col lg:flex-row">
          {/* Left side */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col gap-8">
            <h1 className="text-5xl font-bold">
              Las mejores opciones de recetas saludables para ti
            </h1>

            <p className="text-xl font-bold">
              Te ofrecemos algunas recetas que te ayuran para mejorar tus
              habitos alimenticios y ademas con informacion detallada para que
              puedas prepararlas y conocer los macros de cada ingrediente
            </p>

            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                <Link to="/traking">Empezar Gratis</Link>
              </button>

              <button
                onClick={handleVerRecetasClick}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Ver recetas
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-1/2 lg:ml-32 p-4 flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            <div>
              <img src={Plate} alt="Plate" />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <div className=" mb-8 flex items-center justify-center w-full h-16 ">
                <p className="bg-green-200 px-4 py-6 text-lg font-semibold">
                  505 Cal
                </p>
              </div>
              <div>
                <p>Proteinas</p>
                <div className="flex items-center gap-2 w-full">
                  <LinearProgress
                    color="success"
                    variant="determinate"
                    value={42}
                    className="w-full h-10"
                  />

                  <p>42g</p>
                </div>
              </div>
              <div>
                <p>Grasas</p>
                <div className="flex items-center gap-2 w-full">
                  <LinearProgress
                    color="warning"
                    variant="determinate"
                    value={19}
                    className="w-full h-10"
                  />

                  <p>19g</p>
                </div>
              </div>
              <div>
                <p>Carbohidratos</p>
                <div className="flex items-center gap-2 w-full">
                  <LinearProgress
                    color="error"
                    variant="determinate"
                    value={39}
                    className="w-full h-10"
                  />

                  <p>39g</p>
                </div>
              </div>
              <div>
                <p>Fibra</p>
                <div className="flex items-center gap-2 w-full">
                  <LinearProgress
                    color="inherit"
                    variant="determinate"
                    value={7}
                    className="w-full h-10"
                  />

                  <p>7g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-[#F5F8FC] w-full px-32 py-8">
        <div className="mb-8 w-full flex justify-center">
          <h2 className="text-3xl font-bold">¿Por qué Unir Calory?</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around">
          <ServicesInformationCard
            image={avocado}
            number={"+20k"}
            title={"Recetas"}
          />

          <ServicesInformationCard
            image={target}
            number={"95%"}
            title={"Eficiencia"}
          />

          <ServicesInformationCard
            image={clipboard}
            number={"+100"}
            title={"Nutrientes disponibles"}
          />
        </div>
      </section>
      <Contact />
      {/* <Footer></Footer> */}
      <Footer />
    </>
  );
}
