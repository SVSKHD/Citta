"use server";
import Image from "next/image";


export const Collaborations = () => {
    return(
        <div className="flex flex-row justify-center items-center w-screen h-auto bg-[#D3DED4] pt-5">
            <div className="bg-[#D3DED4] flex flex-col justify-center items-center w-screen pt-10 pb-0 pl-10 pr-10 max-w-7xl">
                <div className="flex flex-row justify-center items-center text-3xl md:text-6xl text-[#4A5759] w-4/5 font-semibold font-['Cabin']">Collaborations</div>
                <div className="flex flex-row flex-wrap justify-evenly items-stretch w-full h-auto p-10">
                    <Image priority={true} width="50" height="50" src="/svg-files/microsoft.svg" alt="microsoft" className="w-[200px] m-5 h-auto select-none" />
                    <Image priority={true} width="50" height="50" src="/svg-files/sunflowerVedicSchool.svg" alt="Sunflower Vedic School" className="w-[150px] m-5 h-auto select-none" />
                    <Image priority={true} width="50" height="50" src="/svg-files/vit.svg" alt="VIT" className="w-[200px] m-5 h-auto select-none" />
                    <Image priority={true} width="50" height="50" src="/svg-files/bookmyshow.svg" alt="BookMyShow" className="w-[200px] m-5 h-auto select-none" />
                </div>
                <div className="w-screen overflow-visible md:static">
                    <Image priority={true} width="50" height="50" src="/svg-files/sectionDividerCollaborationBottom.svg" alt="main-illustration" className="w-screen h-auto select-none pointer-events-none" />
                </div>
            </div>
        </div>
    )
}