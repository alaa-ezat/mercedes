import React from "react";
import { sClassImage, amgGtImage, gleImage } from "../utils";

const vehicleList = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    description: "The epitome of luxury sedans.",
    image: sClassImage,
  },
  {
    id: 2,
    name: "Mercedes-AMG GT",
    description: "A sports car beyond compare.",
    image: amgGtImage,
  },
  {
    id: 3,
    name: "Mercedes-Benz GLE",
    description: "A remarkable SUV that sets the standard.",
    image: gleImage, 
  },
];

const Vehicles = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Our Vehicles</h1>
        <p className="text-lg text-gray-400">
          Explore the range of Mercedes-Benz models.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {vehicleList.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-gray-800 p-6 rounded-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="h-48 object-cover w-full rounded-md mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold">{vehicle.name}</h2>
            <p className="text-gray-400">{vehicle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
