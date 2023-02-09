import React from "react";

export default function ColorCodes() {
  return (
    <div className="flex justify-center">
      <div className="flex-wrap bg-gradient-to-b from-white to-[#A64AC9] shadow-2xl shadow-primary flex flex-col justify-center gap-10 p-20 rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="flex flex-col w-48 h-48 bg-black shadow-2xl shadow-black items-center justify-center text-center text-white rounded-3xl">
            <h2 className="font-bold text-xl lg:text-2xl uppercase">
              dark gray
            </h2>
            <h2 className="font-medium text-xl lg:text-2xl uppercase">
              #1E1E1E
            </h2>
          </div>
          <div className="flex flex-col w-48 h-48 bg-tertiary shadow-2xl shadow-tertiary items-center justify-center text-center text-white rounded-3xl">
            <h2 className="font-bold text-xl lg:text-2xl uppercase">shark</h2>
            <h2 className="font-medium text-xl lg:text-2xl uppercase">
              #2E3440
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col w-48 h-48 bg-primary shadow-2xl shadow-primary items-center justify-center text-center text-white rounded-3xl">
            <h2 className="font-bold text-xl lg:text-2xl uppercase">primary</h2>
            <h2 className="font-medium text-xl lg:text-2xl uppercase">
              #A64AC9
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="flex flex-col w-48 h-48 bg-secondary shadow-2xl shadow-secondary items-center justify-center text-center rounded-3xl">
            <h2 className="font-bold text-xl lg:text-2xl uppercase">
              secondary
            </h2>
            <h2 className="font-medium text-xl lg:text-2xl uppercase">
              #17E9E0
            </h2>
          </div>
          <div className="flex flex-col w-48 h-48 bg-white shadow-2xl shadow-white items-center justify-center text-center rounded-3xl">
            <h2 className="font-bold text-xl lg:text-2xl uppercase">snow</h2>
            <h2 className="font-medium text-xl lg:text-2xl uppercase">
              #FFFFFF
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
