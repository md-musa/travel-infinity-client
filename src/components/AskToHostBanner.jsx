import React from 'react';

function AskToHostBanner() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/photos/weve-made-it-all-this-way-i-am-proud-picture-id904172104?b=1&k=20&m=904172104&s=170667a&w=0&h=cpH1h5ENopSwP2hB-zlAxeg3Gry9KkcBReSsBV1zyzQ=')",
      }}
      className="bg-cover h-[500px] w-full rounded-xl px-10 shadow-lg"
    >
      <div className="w-1/2 my-10 p-6 space-y-14 flex flex-wrap items-between">
        <h2 className="font-bold text-7xl text-purple-600">
          Questions about hosting?
        </h2>
        <button className="px-6 py-3 font-bold shadow-xl bg-white rounded-lg text-pink-600">
          Ask a Superhost
        </button>
      </div>
    </div>
  );
}

export default AskToHostBanner;
