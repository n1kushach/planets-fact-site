import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../App'

export const MainView = () => {
    const {data} = useContext(DataContext)
    const hoverColors = {
        "Mercury": "#419EBB",
        "Venus": "#EDA249",
        "Earth": "#6D2ED5",
        "Mars": "#D14C32",
        "Jupiter": "#D83A34",
        "Saturn": "#CD5120",
        "Uranus": "#1EC1A2",
        "Neptune": "#2D68F0 ",
    }
  return (
    <div className='w-screen h-screen bg-stars'>
        <div className='flex items-center justify-between px-[32px]'>
            <h1 className="text-[#FFFFFF] font-normal font-Antonio text-[28px]">THE PLANETS</h1>
            <div className='flex items-center gap-[33px]'>
                {data?.map((item, index) => {
                    return (
                        <h1 className="text-[#FFFFFF] hover:border-t-2 py-2 text-[11px] font-LeagueSpartan font-bold" key={index}>{item.name}</h1>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
