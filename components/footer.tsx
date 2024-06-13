"use server";
import Image from "next/image"

export const Footer = () => {
    return(
        <div className="flex flex-row justify-center items-center w-screen h-auto bg-[#4A5759]">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-screen p-5 max-w-7xl space-y-4 md:space-y-0">
                <div className="flex flex-row justify-start items-start max-w-lg p-3">
                    <Image priority={true} width="50" height="50" src="/svg-files/location1.svg" alt="" className="fill-black w-[50px] h-auto select-none pointer-events-none px-3 mt-1" />
                    <span className="text-white font-normal text-base font-['Inter']">9-3-574, Regimental Bazaar, Shivaji Nagar, Secunderabad, Telangana 500003</span>
                </div>
                <div className="text-white max-w-lg text-xs md:text-sm font-semibold px-7 md:px-10 font-['Inter']">
                    © Copyright 2024 Cittaa Health Services Pvt. Ltd. All Rights Reserved
                </div>
            </div>
        </div>
    )
}