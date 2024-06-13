"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react";
import classNames from 'classnames';

export const Navbar = () => {
    const [isShadowed, setIsShadowed] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsShadowed(true);
            } else {
                setIsShadowed(false);
            }
            };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`bg-[#D3DED4] flex flex-column items-center justify-center fixed px-5 py-3 md:p-5 w-screen z-10 ${isShadowed ? 'drop-shadow-md' : ''}`}>
            <div className="bg-[#D3DED4] flex flex-row justify-between w-full max-w-7xl items-center relative">
                <Image priority={true} width="100" height="100" src="/svg-files/logo.svg" alt="logo" className="fill-[#4A5759] w-auto h-auto select-none pointer-events-none" />
                <div className="flex flex-row justify-center items-center z-10">
                    <div className="hidden md:flex h-5 items-center space-x-4 text-sm mx-10 z-10">
                        <div className="w-15 text-[#4A5759] text-lg hover:font-bold hover:drop-shadow-lg select-none">About</div>
                        <Separator orientation="vertical" />
                        <div className="w-15 text-lg text-[#4A5759] hover:font-bold flex flex-row items-center justify-center select-none">Reviews</div>
                        <Separator orientation="vertical" />
                        <div className="w-15 text-lg text-white hover:font-bold flex flex-row items-center justify-center select-none">Services</div>
                        <Separator orientation="vertical" />
                        <div className="w-15 text-lg text-white hover:font-bold flex flex-row items-center justify-center select-none">FAQs</div>
                        <Separator orientation="vertical" />
                        <div className="w-15 text-lg text-white hover:font-bold flex flex-row items-center justify-center select-none">Contact</div>
                    </div>

                    <Image priority={true} width="50" height="50" src="/svg-files/frame69.svg" alt="leaves" className="hidden md:flex w-[400px] h-auto absolute -top-6 -right-28 z-0 select-none pointer-events-none drop-shadow-2xl transition-all ease-in-out duration-300" />

                    <Sheet>
                      <SheetTrigger><Image priority={true} width="40" height="40" src="/svg-files/hamburger.svg" alt="logo" className="fill-[#4A5759] md:hidden w-auto h-auto pointer-events-none"/></SheetTrigger>
                      <SheetContent>
                      <SheetHeader>
                      <SheetTitle>Learn More about us!</SheetTitle>
                      <SheetDescription>
                          Browse and explore more.
                      </SheetDescription>
                      </SheetHeader>
                      <div className="grid gap-3 py-1 my-10">
                        <div className="h-8 flex flex-row p-5 items-center rounded-md hover:bg-[#C7D1CB]">About</div>
                        <Separator/>
                        <div className="h-8 flex flex-row p-5 items-center rounded-md hover:bg-[#C7D1CB]">Reviews</div>
                        <Separator/>
                        <div className="h-8 flex flex-row p-5 items-center rounded-md hover:bg-[#C7D1CB]">Services</div>
                        <Separator/>
                        <div className="h-8 flex flex-row p-5 items-center rounded-md hover:bg-[#C7D1CB]">Contact</div>
                        <Separator/>
                        <div className="h-8 flex flex-row p-5 items-center rounded-md hover:bg-[#C7D1CB]">FAQs</div>
                      </div>
                      </SheetContent>
                    </Sheet>
                    
                </div>
            </div>
        </div>
    )
}