import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import EstateCard from "../EstateCard/EstateCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);
  return (
    <div>
      <Helmet>
        <title>Taqwa Terraces | Home</title>
      </Helmet>
      <Slider></Slider>
      {/* estate section */}
      <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center mt-10">
        Featured Properties
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-24 gap-8 my-10">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
