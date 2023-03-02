import React from "react";


export const MainView = () => {

  return (
    <div className="w-screen h-screen bg-stars">
      <div>
        <div className="flex items-center justify-between px-[32px] pt-4">
          <h1 className="text-[#FFFFFF] font-normal bord font-Antonio text-[28px]">
            THE PLANETS
          </h1>
          <div className="flex items-center gap-[33px]">
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Mercury py-2 text-[11px] font-LeagueSpartan font-bold">
              Mercury
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Venus py-2 text-[11px] font-LeagueSpartan font-bold">
              Venus
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Earth py-2 text-[11px] font-LeagueSpartan font-bold">
              Earth
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Mars py-2 text-[11px] font-LeagueSpartan font-bold">
              Mars
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Jupiter py-2 text-[11px] font-LeagueSpartan font-bold">
              Jupiter
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Saturn py-2 text-[11px] font-LeagueSpartan font-bold">
              Saturn
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Uranus py-2 text-[11px] font-LeagueSpartan font-bold">
              Uranus
            </h1>
            <h1 className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Neptune py-2 text-[11px] font-LeagueSpartan font-bold">
              Neptune
            </h1>
          </div>
        </div>
        <hr className="border-[#FFFFFF] mt-[27px] opacity-20"></hr>
      </div>
    </div>
  );
};
