import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MainView = () => {

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-stars">
      <div>
        <div className="flex items-center justify-between px-[32px] pt-4">
          <h1 className="text-[#FFFFFF] font-normal bord font-Antonio text-[28px]">
            THE PLANETS
          </h1>
          <div className="flex items-center gap-[33px]">
            <h1 onClick={() => navigate("/mercury")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Mercury py-2 text-[11px] font-LeagueSpartan font-bold">
              Mercury
            </h1>
            <h1 onClick={() => navigate("/venus")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Venus py-2 text-[11px] font-LeagueSpartan font-bold">
              Venus
            </h1>
            <h1 onClick={() => navigate("/earth")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Earth py-2 text-[11px] font-LeagueSpartan font-bold">
              Earth
            </h1>
            <h1 onClick={() => navigate("/mars")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Mars py-2 text-[11px] font-LeagueSpartan font-bold">
              Mars
            </h1>
            <h1 onClick={() => navigate("/jupiter")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Jupiter py-2 text-[11px] font-LeagueSpartan font-bold">
              Jupiter
            </h1>
            <h1 onClick={() => navigate("/saturn")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Saturn py-2 text-[11px] font-LeagueSpartan font-bold">
              Saturn
            </h1>
            <h1 onClick={() => navigate("/uranus")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Uranus py-2 text-[11px] font-LeagueSpartan font-bold">
              Uranus
            </h1>
            <h1 onClick={() => navigate("/neptune")} className="text-[#FFFFFF] opacity-75 hover:opacity-100 uppercase cursor-pointer hover:border-t-2 hover:border-Neptune py-2 text-[11px] font-LeagueSpartan font-bold">
              Neptune
            </h1>
          </div>
        </div>
        <hr className="border-[#FFFFFF] mt-[27px] opacity-20"></hr>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};
