import React from "react";

function FeaturesBox({ icon, title, dosc }) {
  return (
    <div className="flex flex-col items-center text-black mx-auto p-4">
      <div className="bg-red-600 rounded-full w-[70px] h-[70px] flex items-center justify-center">
        <img
          src={icon}
          alt="icon-img"
          className="w-[30px] h-[30px] object-contain"
        />
      </div>

      <h4 className="text-xl font-bold mt-3 mb-2">{title}</h4>

      <p className="text-center text-sm font-normal tracking-[0.8px]">{dosc}</p>
    </div>
  );
}

export default FeaturesBox;
