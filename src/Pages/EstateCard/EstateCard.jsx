import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
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
    id
  } = estate;

  return (
    <div className="flex flex-col gap-4 border-2 p-4 rounded-lg bg-base-200 text-center">
      <img className="h-[300px] rounded-lg" src={image} alt="" />
      <h3 className="flex-grow text-blue-400 font-bold text-lg lg:text-2xl my-2">
        {estateTitle}
      </h3>
      <div className="flex justify-between gap-4">
        <p className="flex-grow font-semibold bg-green-200 p-2 rounded-lg text-blue-700">
          <span className=" font-medium text-black">Segment:</span>{" "}
          {segmentName}
        </p>
        <p className="flex-grow font-semibold bg-lime-200 p-2 rounded-lg text-blue-700">
          <span className=" font-medium text-black">Status:</span> {status}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <p className="flex-grow font-semibold bg-orange-200 p-2 rounded-lg text-blue-700">
          {area} sq. feet
        </p>
        <p className="flex-grow font-semibold bg-red-200 p-2 rounded-lg text-blue-700">
          <span className=" font-medium text-black">Location:</span> {location}
        </p>
        <p className="flex-grow font-semibold bg-pink-200 p-2 rounded-lg text-blue-700">
          {price} USD
        </p>
      </div>
      {/* description */}
      <div className="  text-justify">
        {description.length > 170 ? (
          <div className="">
            <p className="text-base">
              {" "}
              <span className=" font-semibold">Details:</span>
              {description.slice(0, 170)}{" "}
              <Link to={`/estate/${id}`} className=" pl-8 text-base text-blue-700 font-bold">
                Read More
              </Link>
            </p>
          </div>
        ) : (
          <p className="text-base"> Details: {description}</p>
        )}
      </div>
      {/* facility array */}
      <div className=" text-left ">
        <p className=" text-blue-500 font-semibold mb-2 ">Facilities:</p>
      <ul className="grid grid-cols-2 gap-2 items-start">
        {facility.map((facility, index) => (
          <li className=" text-center font-bold border p-3 mr-2 bg-slate-300 rounded-lg" key={index}>{facility}</li>
        ))}
      </ul>
      </div>
      {/* view property button */}
      <Link to={`/estate/${id}`} className="btn bg-gray-700 text-white font-bold border-none">
        View Property
      </Link>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object,
};
export default EstateCard;
