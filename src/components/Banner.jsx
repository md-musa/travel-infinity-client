import React from 'react';

function Banner() {
  return (
    <main
      style={{ visibility: 'hidden' }}
      className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      {/* <img
        src="https://a0.muscache.com/im/pictures/8aa32150-e831-40aa-98f5-b743b44c6b27.jpg?im_w=1920"
        alt=""
        className="h-full w-full object-cover"
      /> */}

      <div className="absolute top-1/2 space-y-2 w-full text-center">
        <p className="text-xl text-white">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <button className="px-6 font-semibold text-xl py-2 rounded-full bg-white hover:bg-gray-100 text-purple-600 hover:shadow-2xl active:scale-90 transition duration-150">
          I'm fixable
        </button>
      </div>
    </main>
  );
}

export default Banner;
