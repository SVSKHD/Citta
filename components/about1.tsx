"use server";
import Image from "next/image";


export const About = () => {
    return(
        <div id="about-section" className="flex flex-col justify-center items-center w-screen h-auto bg-[#90A297]">
            <div className="flex flex-col justify-center items-center w-screen h-auto bg-[#E5EBE5]">
            <div className="bg-[#E5EBE5] flex flex-col justify-end items-center w-screen pb-0 pl-10 pr-10 max-w-7xl z-0 space-y-10 border-0 md:border-x-2 border-[#90A297] rounded-xl">
                <div className="flex flex-row justify-center items-center text-3xl md:text-6xl text-[#4A5759] w-4/5 font-semibold font-['Cabin']">About Us</div>
                <div className="flex flex-col justify-center items-center w-full h-auto max-w-2xl space-y-20 bg-[#E5EBE5] relative">
                    <div className="flex flex-row justify-end items-end md:items-center mt-10 w-full">
                        <div className="w-full flex flex-row justify-end items-end max-w-[250px] size-fit aspect-square z-10">
                            <div className="flex flex-col justify-center items-center bg-[#B1C4B2] relative p-5 px-5 rounded-[10px] aspect-square rounded-bl-[40px] z-0">
                                <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteTape.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -top-3 -left-3" />
                                <div className="flex flex-row justify-center items-center mb-[10px]">
                                    <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteMissionIcon.svg" alt="main-illustration" className="w-[30px] md:w-[40px] h-auto" />
                                    <div className="font-['Inter'] text-sm md:text-lg text-[#4A5759] font-semibold ml-[7px]">Our Mission</div>
                                </div>
                                <div className="font-['Inter'] text-[#4A5759] font-normal text-xs md:text-sm text-center">
                                    We strive to break down barriers to mental health care and create a supportive  environment where all individuals feel valued and understood.
                                </div>
                                <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteFlip.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -bottom-3 -left-3" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-end items-end -ml-10 z-0">
                            <Image priority={true} width="50" height="50" src="/svg-files/aboutUsButterfly.svg" alt="main-illustration" className="w-[80px] -mt-10 z-10 absolute -top-0 left-[150px]" />
                            <Image priority={true} width="50" height="50" src="/svg-files/lapIllustrationBackground.svg" alt="main-illustration" className="w-[350px] -mt-10 z-10 absolute bottom-0" />
                            <Image priority={true} width="50" height="50" src="/svg-files/aboutUsImage1.svg" alt="main-illustration" className=" w-[270px] z-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#E5EBE5] flex flex-col justify-end items-center w-screen pb-0 pl-10 pr-10 max-w-7xl z-0 space-y-10 border-0 md:border-x-2 border-[#90A297] rounded-xl">
                <div className="flex flex-col justify-center items-center w-full h-auto max-w-2xl space-y-20 bg-[#E5EBE5]">
                    <div className="flex flex-row justify-end items-end md:items-center mt-10 w-full">
                        <div className="w-full flex flex-row justify-start items-end -mr-5 -mb-7 md:-mb-20 z-0 relative">
                            <Image priority={true} width="50" height="50" src="/svg-files/aboutUsImage2.svg" alt="main-illustration" className="w-[230px] -mt-10 z-20" />
                            <Image priority={true} width="50" height="50" src="/svg-files/lapIllustrationBackground.svg" alt="main-illustration" className="w-[350px] -mt-10 z-10 absolute -bottom-10 -left-20" />
                        </div>
                        <div className="w-full flex flex-row justify-end items-start max-w-[250px] size-fit aspect-square z-10">
                            <div className="flex flex-col justify-center items-center bg-[#B1C4B2] relative p-5 px-5 rounded-[10px] aspect-square rounded-bl-[40px] z-0">
                                <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteTape.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -top-3 -left-3" />
                                <div className="flex flex-row justify-center items-center mb-[10px]">
                                    <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteVisionIcon.svg" alt="main-illustration" className="w-[30px] md:w-[40px] h-auto" />
                                    <div className="font-['Inter'] text-sm md:text-lg text-[#4A5759] font-semibold ml-[7px]">Our Vision</div>
                                </div>
                                <div className="font-['Inter'] text-[#4A5759] font-normal text-xs md:text-sm text-center">
                                    We dream of a world where mental health is as important as physical health, available to everyone no matter who they are or what they&apos;re going through.
                                </div>
                                <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteFlip.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -bottom-3 -left-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen overflow-visible md:static z-0">
                <Image priority={true} width="50" height="50" src="/svg-files/sectionDividerAboutUsSection1.svg" alt="main-illustration" className="w-screen h-auto select-none pointer-events-none" />
            </div>
            </div>
            <div className="flex flex-col justify-center items-center w-screen h-auto bg-[#90A297]">
            <div className="bg-[#90A297] flex flex-col justify-end items-center w-screen pb-0 pl-10 pr-10 max-w-7xl z-0 space-y-10 border-0 md:border-x-2 border-[#E5EBE5] rounded-xl">
                <div className="flex flex-col justify-center items-center w-full h-auto max-w-2xl space-y-20 bg-[#90A297]">
                    <div className="flex flex-row justify-end items-end md:items-center mt-10 w-full">
                        <div className="w-full flex flex-row justify-end items-end max-w-[250px] size-fit aspect-square z-10">
                            <div className="flex flex-col justify-center items-center bg-[#B1C4B2] relative p-5 px-5 rounded-[10px] aspect-square rounded-bl-[40px] z-0">
                                <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteTape.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -top-3 -left-3" />
                                <div className="flex flex-row justify-center items-center mb-[10px]">
                                    <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteValueIcon.svg" alt="main-illustration" className="w-[30px] md:w-[40px] h-auto" />
                                    <div className="font-['Inter'] text-sm md:text-lg text-[#4A5759] font-semibold ml-[7px]">Our Value</div>
                                </div>
                                <div className="font-['Inter'] text-[#4A5759] font-normal text-xs md:text-sm text-left">
                                    Compassion: We deeply care for those we help. <br />
                                    Innovation: We use the latest tech and methods to improve care. <br />
                                    Integrity: We uphold professionalism and ethics. <br />
                                    Inclusivity: We serve all with respect and dignity.<br />
                                </div>
                                <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteFlip.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -bottom-3 -left-3" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-end items-end -ml-10 -mb-7 md:-mb-20">
                            <Image priority={true} width="50" height="50" src="/svg-files/aboutUsImage3.svg" alt="main-illustration" className="w-[300px] -mt-10 z-10" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen overflow-visible md:static z-0">
                <Image priority={true} width="50" height="50" src="/svg-files/sectionDividerAboutUsSection2.svg" alt="main-illustration" className="w-screen h-auto select-none pointer-events-none" />
            </div>
            </div>
            <div className="flex flex-col justify-center items-center w-screen h-auto bg-[#E5EBE5]">
                <div className="bg-[#E5EBE5] flex flex-col justify-end items-center w-screen pb-0 pl-10 pr-10 max-w-7xl z-0 border-0 md:border-x-2 border-[#90A297] rounded-xl">
                    <div className="flex flex-col justify-center items-center w-full h-auto max-w-2xl space-y-20 bg-[#E5EBE5]">
                        <div className="flex flex-col justify-end items-center md:items-center mt-10 w-full relative">
                            <div className="w-full flex flex-row justify-end items-center max-w-[250px] size-fit aspect-square z-0">
                                <div className="flex flex-col justify-center items-center bg-[#B1C4B2] relative p-5 px-5 rounded-[10px] aspect-square rounded-bl-[40px] z-0">
                                    <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteTape.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -top-3 -left-3" />
                                    <div className="flex flex-row justify-center items-center mb-[10px]">
                                        <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteImpactIcon.svg" alt="main-illustration" className="w-[30px] md:w-[40px] h-auto" />
                                        <div className="font-['Inter'] text-sm md:text-lg text-[#4A5759] font-semibold ml-[7px]">Our Impact</div>
                                    </div>
                                    <div className="font-['Inter'] text-[#4A5759] font-normal text-xs md:text-sm text-center">
                                        Since our beginning, Cittaa has become a symbol of hope and healing. Our diverse team of mental health experts takes a personalized approach to treat various mental health issues.
                                    </div>
                                    <Image priority={true} width="50" height="50" src="/svg-files/stickyNoteFlip.svg" alt="main-illustration" className="w-[50px] md:w-[70px] absolute -bottom-3 -left-3" />
                                </div>
                            </div>
                            <Image priority={true} width="50" height="50" src="/svg-files/aboutUsButterflyFlip.svg" alt="main-illustration" className="hidden md:static w-[80px] -mt-10 z-10 absolute top-0 -left-[100px]" />
                            <Image priority={true} width="50" height="50" src="/svg-files/aboutUsButterflyFlip.svg" alt="main-illustration" className=" hidden md:static w-[80px] -mt-10 z-10 absolute top-[100px] -right-[100px]" />
                            <div className="w-full flex flex-row justify-center items-center -ml-10 z-10 object-contain drop-shadow-md">
                                <Image priority={true} width="50" height="50" src="/svg-files/aboutUsImage4.png" alt="main-illustration" className="w-[700px] -mt-10 z-10" unoptimized/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}