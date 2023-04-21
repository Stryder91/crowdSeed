import { useState } from 'react';
import Text from './form/input/Text';
import { Number } from './form/input/Number';

export const Filter = ({ homes, handler }) => {
  const [criterias, setCriterias] = useState({});
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handleBedroomsChange = (event) => {
    setMinBedrooms(Number(event.target.value));
  };

  const handlePriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  const filterHomes = () => {
    const filtered = homes.filter(
      (home) =>
        (!minBedrooms || home.bedrooms >= minBedrooms) &&
        (!maxPrice || home.price <= maxPrice)
    );
    handler(filtered);
  };

  return (
    <div className="flex flex-wrap">
			<div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/4 m-4">
					<Text label="Ville" />
				</div>
				<div className="w-full md:w-1/4 m-4">
					<Text label="Régions" />
				</div>
			</div>
			<div className="w-full flex flex-wrap">
				<div className="w-full md:w-1/4 m-4">
					<Number label="Bedrooms" max="5"/>
				</div>
				<div className="w-full md:w-1/4 m-4">
					<Number label="Bathrooms" max="5"/>
				</div>
			</div>
     
      <div className="w-full md:w-1/4">
				<label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-600">
					Price
				</label>
				<input
					type="range"
					className="range accent-purple-500"
					min="0"
					max="100"
					step="1"
				/>
			</div>
      <button
        className="w-full rounded-md bg-[#6A64F1] text-white py-3 px-6 text-base font-medium focus:outline-none focus:shadow-md"
        onClick={filterHomes}
      >
        Search
      </button>
    </div>
  );
};
