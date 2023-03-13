import React, { useState } from "react";
import PlanetVenus from "../../assets/planet-venus.svg";
import VenusInternal from "../../assets/planet-venus-internal.svg";
import SurfaceVenus from "../../assets/geology-venus.png";

export const Venus = () => {
  const [menu, setMenu] = useState({
    overview: true,
    structure: false,
    geology: false,
  });

  const chooseImage = () => {
    if (menu.overview == true) {
      return PlanetVenus;
    } else if (menu.structure == true) {
      return VenusInternal;
    } else {
      return PlanetVenus;
    }
  };

  const chooseText = () => {
    if (menu.overview == true) {
      return "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
    } else if (menu.structure == true) {
      return "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
    } else {
      return "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
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
              src={SurfaceVenus}
            />
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-Antonio text-[80px] text-[#FFFFFF]">Venus</h1>
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
                ? "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] bg-Venus p-2"
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
                ? "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] bg-Venus p-2"
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
                ? "flex cursor-pointer hover:bg-[#D8D8D8] duration-300 items-center gap-[28px] border border-[#FFFFFF] bg-Venus p-2"
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
          <h1 className="text-[40px] text-[#FFFFFF]">243 DAYS</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            revolution time
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">224.7 DAYS</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            radius
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">6,051.8 KM</h1>
        </div>
        <div className="border border-[#9a9a9a] w-[30%] p-4">
          <p className="uppercase text-[11px] text-[#FFFFFF] opacity-50">
            average temp
          </p>
          <h1 className="text-[40px] text-[#FFFFFF]">471°c</h1>
        </div>
      </div>
    </div>
  );
};
