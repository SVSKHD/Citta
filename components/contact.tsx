"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


export const Contact = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 100;
            window.scrollTo({top:offsetTop, behavior: 'smooth'})
        }
    };
    const onCopy = (toCopy: string) => {
        navigator.clipboard.writeText(toCopy);
    }
    if (!isMounted) {
        return null;
    }
    return(
        <div id="contact-section" className="flex flex-row justify-center items-center w-screen h-auto bg-white pt-5 pb-10">
            <div className="flex flex-row justify-around w-screen p-10 max-w-7xl">
                <div className="flex flex-col space-y-4 max-w-sm">
                    <div className="text-lg font-semibold text-[#4A5759] font-['Inter']">Quick Links</div>
                    <div className="flex flex-col space-y-3">
                        <div onClick={() => scrollToSection('home-section')} className="text-[#4A5759] text-sm font-['Inter']">Home</div>
                        <div onClick={() => scrollToSection('about-section')} className="text-[#4A5759] text-sm font-['Inter']">About Us</div>
                        <div onClick={() => scrollToSection('review-section')} className="text-[#4A5759] text-sm font-['Inter']">Reviews</div>
                        <div onClick={() => scrollToSection('faq-section')} className="text-[#4A5759] text-sm font-['Inter']">FAQs</div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="text-lg font-semibold text-[#4A5759] pl-3 font-['Inter']">Contacts</div>
                    <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-row items-start">
                                <Image priority={true} width="50" height="50" src="/svg-files/call.svg" alt="" className="fill-black w-[40px] h-auto select-none pointer-events-none px-3 mt-1" />
                                <div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">Call Us</div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">+91 8121053555</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start">
                                <Image priority={true} width="50" height="50" src="/svg-files/whatsapp.svg" alt="" className="fill-black w-[40px] h-auto select-none pointer-events-none px-3 mt-1" />
                                <div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">Whatsapp</div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">+91 8121053555</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-start">
                                <Image priority={true} width="50" height="50" src="/svg-files/mail.svg" alt="" className="fill-black w-[40px] h-auto select-none pointer-events-none px-3 mt-1" />
                                <div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">Email</div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">cittaa.powerofmind@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-row items-start">
                                <Image priority={true} width="50" height="50" src="/svg-files/instagram.svg" alt="" className="fill-black w-[40px] h-auto select-none pointer-events-none px-3 mt-1" />
                                <div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">Instagram</div>
                                    <a href="https://www.instagram.com/cittaa_powerofmind/" target="_blank" className="text-sm text-[#4A5759] font-['Inter']">cittaa_powerofmind</a>
                                </div>
                            </div>
                            <div className="flex flex-row items-start">
                                <Image priority={true} width="50" height="50" src="/svg-files/linkedin.svg" alt="" className="fill-black w-[42px] h-auto select-none pointer-events-none px-3 mt-1" />
                                <div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">LinkedIn</div>
                                    <a href="https://www.linkedin.com/company/cittaa-the-powerofmind" target="_blank" className="text-sm text-[#4A5759] max-w-[150px] font-['Inter']">Cittaa Health Services Private Limited</a>
                                </div>
                            </div>
                            <div className="flex flex-row items-start">
                                <Image priority={true} width="50" height="50" src="/svg-files/globe.svg" alt="" className="fill-black w-[40px] h-auto select-none pointer-events-none px-3 mt-1" />
                                <div>
                                    <div className="text-sm text-[#4A5759] font-['Inter']">www.cittaa.in</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}