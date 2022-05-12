import React from 'react';

function DiscoverCard({ img }) {
  return (
    <div
      style={{
        backgroundImage: `url('${img}')`,
      }}
      className="h-full w-full bg-cover rounded-xl px-10 shadow-lg"
    >
      <div className="w-3/5 my-8 space-y-8">
        <h2 className="font-bold  text-5xl text-purple-500">
          Thing to do on your trip
        </h2>
        <button className="px-6 py-3 font-bold shadow-xl bg-white rounded-lg text-pink-600">
          Experiences
        </button>
      </div>
    </div>
  );
}

export default DiscoverCard;
