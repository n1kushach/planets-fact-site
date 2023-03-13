import React from "react";
import PlanetMercury from "../../assets/planet-mercury.svg";

export const Mercury = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto">
      <div className="flex items-center justify-center gap-72 mt-10">
        <img src={PlanetMercury} />
        <div className="flex flex-col gap-5">
          <h1 className="font-Antonio text-[80px] text-[#FFFFFF]">Mercury</h1>
          <p className="font-light text-[14px] text-[#FFFFFF] max-w-[350px]">
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <p className="font-LeagueSpartan font-light text-[14px] opacity-50 text-[#FFFFFF]">Source : <strong>Wikipedia</strong></p>
          <div className="flex cursor-pointer hover:bg-active duration-300 items-center gap-[28px] border border-[#FFFFFF] p-2">
            <p className="text-[#FFFFFF] text-[12px] font-bold opacity-50 ml-2">01</p>
            <h2 className="text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[2.57143px]">overview</h2>
          </div>
          <div className="flex cursor-pointer hover:bg-active duration-300 items-center gap-[28px] border border-[#FFFFFF] p-2">
            <p className="text-[#FFFFFF] text-[12px] font-bold opacity-50 ml-2">02</p>
            <h2 className="text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[2.57143px]">internal structure</h2>
          </div>
          <div className="flex cursor-pointer hover:bg-active duration-300 items-center gap-[28px] border border-[#FFFFFF] p-2">
            <p className="text-[#FFFFFF] text-[12px] font-bold opacity-50 ml-2">03</p>
            <h2 className="text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[2.57143px]">surface geology</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center w-[90%] gap-4 mx-auto justify-between mt-12">
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">rotation time</p>
          <h1 className="text-[40px] text-[#FFFFFF]">58.6 DAYS</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">revolution time</p>
          <h1 className="text-[40px] text-[#FFFFFF]">87.96 DAYS</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">radius</p>
          <h1 className="text-[40px] text-[#FFFFFF]">2,438.7 KM</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">average temp</p>
          <h1 className="text-[40px] text-[#FFFFFF]">430°c</h1>
        </div>
      </div>
    </div>
  );
};
