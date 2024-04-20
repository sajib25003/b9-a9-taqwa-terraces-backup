import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const estate = estates.find((estate) => estate.id == parseInt(id));
  const {
    image,
    estateTitle,
    segmentName,
    status,
    price,
    area,
    location,
    facility,
    description,
  } = estate;
  //   console.log(area, price);
  return (
    <div className=" flex flex-col items-center p-6  gap-4 mx-3 md:mx-10 lg:mx-36">
      <Helmet>
        <title>Property Details - {id}</title>
      </Helmet>
      <img className=" h-[300px] md:h-[500px]  rounded-3xl" src={image} alt="" />
      <h3 className=" text-blue-700 font-bold text-2xl md:text-3xl lg:text-4xl">{estateTitle}</h3>
      <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
        <span className=" font-medium text-blue-500">Description: </span>{" "}
        {description}
      </p>
      <div className="flex flex-col items-center justify-start mx-0 ">
        <p className=" text-lg lg:text-xl text-blue-500 font-semibold mr-2 ">Facilities:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3  gap-4 lg:gap-6 items-start">
          {facility.map((facility, index) => (
            <li
              className=" w-52 text-center font-bold border py-2 bg-slate-300 rounded-lg"
              key={index}
            >
              {facility}
            </li>
          ))}
        </ul>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-20">
      <p className=" text-justify text-xl text-gray-500 font-semibold">
        <span className=" font-medium text-blue-500">Area: </span>{" "}
        {area} sq. feet.
      </p>
      <p className=" text-justify text-xl text-gray-500 font-semibold">
        <span className=" font-medium text-blue-500">Location: </span>{" "}
        {location}.
      </p>
      <p className=" text-justify text-xl text-gray-500 font-semibold">
        <span className=" font-medium text-blue-500">Segment: </span>{" "}
        {segmentName}.
      </p>
      <p className=" text-justify text-xl text-gray-500 font-semibold">
        <span className=" font-medium text-blue-500">Status: </span>{" "}
        {status}.
      </p>
      </div>
      <h3 className="text-justify text-lg ld:text-xl lg:text-3xl text-white font-bold lg:font-black bg-gray-700 p-6 rounded-xl"><span className=" font-medium text-gray-200">Price: </span> {price}$</h3>
    </div>
  );
};

export default PropertyDetails;
