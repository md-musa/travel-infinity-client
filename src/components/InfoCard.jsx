import React from 'react';

function InfoCard() {
  return (
    <div className="grid grid-cols-[1fr_2fr] cursor-pointer hover:bg-gray-100 border shadow-lg rounded-lg overflow-hidden">
      <div className="p-1">
        <img
          className="p-1 w-full h-full rounded-xl"
          src="https://media.timeout.com/images/103677694/750/422/image.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="px-4 py-2">
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <h2 className="text-2xl font-semibold">Stay at this specious House</h2>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="flex items-end justify-between">
          <p className="font-semibold self-end text-xl">Start 5.0</p>
          <div className="self-end">
            <h3 className="text-2xl font-bold ">$40/night</h3>
            <p className="text-xl text-gray-600"> $117 total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
