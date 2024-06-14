"use server";
import Image from "next/image";
import { Typewriter } from 'nextjs-simple-typewriter'

export const ThumbnailSection = () => {
    
    return(
        <div id="home-section" className="flex flex-col items-center justify-center full h-auto md:h-auto pt-[80px] md:pt-[150px] w-screen bg-[#D3DED4]">
            <div className="bg-[#D3DED4] flex flex-col max-w-7xl items-center justify-around h-auto">
                <div className="flex flex-col justify-center items-center md:flex-row pointer-events-none">
                    <Image priority={true} width="50" height="50" src="/svg-files/thumbnail.svg" alt="main-illustration" className="hidden md:flex w-[200px] md:w-[400px] h-auto p-2 md:p-10 select-none pointer-events-none" />
                    <div className="flex flex-col align-middle justify-center md:h-auto my-[50px] md:my-[10] w-[80%] md:w-auto max-w-96 p-5 mb-10 md:p-10 space-y-3">
                        <div className="hidden md:flex text-center md:text-left text-4xl text-[#4A5759] font-['Inter'] font-semibold select-none">Healing is a journey.</div>
                        <span className="md:hidden text-center md:text-left text-3xl md:text-4xl text-[#4A5759] font-['Inter'] font-semibold select-none">
                            <Typewriter
                            words={['Healing is a Journey!']}
                            loop={1}
                            cursor={true}
                            cursorStyle=''
                            cursorBlinking={true}
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            />
                        </span>
                        <div className="text-center md:text-left text-xl md:text-2xl text-[#4A5759] font-['Inter'] font-semibold select-none">We will walk beside you</div>
                        <div className="text-md md:text-lg md:text-left text-center text-[#4A5759] font-['Inter'] font-light select-none">It’s okay not to be okay. We are here to listen. You matter. Your feelings matter.</div>
                    </div>
                </div>
                <div className="w-full md:block -mb-10 md:mb-0 md:-mt-[200px] md:-ml-[100px] md:static left-0">
                    <Image priority={true} width="50" height="50" src="/svg-files/frame70.svg" alt="decor" className="w-[150px] md:w-[300px] h-auto select-none pointer-events-none" />
                </div>
                <div className="w-screen overflow-visible md:-mt-20 md:static bottom-0 resize-x">
                    <Image priority={true} width="50" height="50" src="/svg-files/sectionDividerThumbnail.svg" alt="main-illustration" className="w-screen h-auto select-none pointer-events-none" />
                </div>
            </div>
        </div>
    )
}