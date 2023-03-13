import React, { useState } from "react";
import PlanetMercury from "../../assets/planet-mercury.svg";
import MercuryInternal from "../../assets/planet-mercury-internal.svg";
import SurfaceMercury from "../../assets/geology-mercury.png";

export const Mercury = () => {
  const [menu, setMenu] = useState({
    overview: true,
    structure: false,
    geology: false,
  });

  const chooseImage = () => {
    if (menu.overview == true) {
      return PlanetMercury;
    } else if (menu.structure == true) {
      return MercuryInternal;
    } else {
      return PlanetMercury;
    }
  };

  const chooseText = () => {
    if (menu.overview == true) {
      return "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    } else if (menu.structure == true) {
      return "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
    } else {
      return "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
    }
  };

  chooseImage();

  return (
    <div className="flex flex-col w-[80%] mx-auto">
      <div className="flex items-center justify-center relative gap-72 mt-10">
        <div className="flex items-center flex-col">
          <img src={chooseImage()} />
          {menu.geology && (
            <img
              className="absolute w-32 h-34 bottom-[20px]"
              src={SurfaceMercury}
            />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-Antonio text-[80px] text-[#FFFFFF]">Mercury</h1>
          <p className="font-light text-[14px] h-[150px] w-[350px] text-[#FFFFFF] max-w-[350px]">
            {chooseText()}
          </p>
          <p className="font-LeagueSpartan font-light text-[14px] opacity-50 text-[#FFFFFF]">
            Source : <strong>Wikipedia</strong>
          </p>
          <div
            onClick={() => {
              setMenu({
                overview: true,
                structure: false,
                geology: false,
              });
            }}
            className={
              menu.overview == true
                ? "flex cursor-pointer hover:bg-[#D8D8D8]  duration-300 items-center gap-[28px] border border-[#FFFFFF] bg-active p-2"
                : "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] p-2"
            }
          >
            <p className="text-[#FFFFFF] text-[12px] font-bold opacity-50 ml-2">
              01
            </p>
            <h2 className="text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[2.57143px]">
              overview
            </h2>
          </div>
          <div
            onClick={() => {
              setMenu({
                overview: false,
                structure: true,
                geology: false,
              });
            }}
            className={
              menu.structure == true
                ? "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] bg-active p-2"
                : "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] p-2"
            }
          >
            <p className="text-[#FFFFFF] text-[12px] font-bold opacity-50 ml-2">
              02
            </p>
            <h2 className="text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[2.57143px]">
              internal structure
            </h2>
          </div>
          <div
            onClick={() => {
              setMenu({
                overview: false,
                structure: false,
                geology: true,
              });
            }}
            className={
              menu.geology == true
                ? "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] bg-active p-2"
                : "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] p-2"
            }
          >
            <p className="text-[#FFFFFF] text-[12px] font-bold opacity-50 ml-2">
              03
            </p>
            <h2 className="text-[#FFFFFF] text-[12px] font-bold uppercase tracking-[2.57143px]">
              surface geology
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center w-[90%] gap-4 mx-auto justify-between mt-12">
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            rotation time
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">58.6 DAYS</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            revolution time
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">87.96 DAYS</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            radius
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">2,438.7 KM</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            average temp
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">430°c</h1>
        </div>
      </div>
    </div>
  );
};
