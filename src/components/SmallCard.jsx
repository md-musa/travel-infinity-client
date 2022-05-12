import React from 'react';

function SmallCard() {
  return (
    <div className="gird h-[23rem] w-[16rem] rounded-xl shadow-md overflow-hidden">
      <div className="h-1/2 w-full">
        <img
          className="h-full w-full object-cover"
          alt=""
          src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div className="h-1/2 w-full bg-[#cd403d] text-white p-5 space-y-1">
        <h3 className="font-semibold text-3xl">London</h3>
        <p className="text-lg">278 kilometers away</p>
      </div>
    </div>
  );
}

export default SmallCard;
