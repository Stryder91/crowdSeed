import React from "react";
import { DeleteCta } from "./Delete";

export const HomeCard = ({ housing }) => {
  return (
    <div className="m-4 w-1/4 bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/featured/?home"
        alt="Housing"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{housing.address}</h2>
        <div className="text-gray-700 mb-4">
          <p>{housing.city}, {housing.state} {housing.zipcode}</p>
          <p>Bedrooms: {housing.bedrooms}</p>
          <p>Bathrooms: {housing.bathrooms}</p>
          <p>Square Feet: {housing.squareFeet}</p>
          <p>Price: ${housing.price}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
        <DeleteCta id={housing._id}/>
      </div>
    </div>
  );
};


