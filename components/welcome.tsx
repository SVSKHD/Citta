"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useDisclosure } from "@nextui-org/modal";
import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
  } from "@nextui-org/modal";


export const Welcome = () => {
    const {isOpen: isOpen1, onOpen: onOpen1, onOpenChange: onOpenChange1} = useDisclosure();
    const {isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2} = useDisclosure();
    const {isOpen: isOpen3, onOpen: onOpen3, onOpenChange: onOpenChange3} = useDisclosure();

    return(
        <div id="welcome-section" className="flex flex-col justify-center items-center w-screen h-auto bg-[#E5EBE5] z-0 pt-10 bg-gradient-to-b from-[#E5EBE5] to-[#D3DED4]">
            <div className="flex flex-col justify-center items-center max-w-7xl space-y-10 pb-10">
                <div className="text-[#4A5759] font-['Cabin'] font-semibold text-5xl md:text-6xl w-11/12 text-center mb-5">Welcome To CITTAA</div>
                <div className="flex flex-row justify-center items-center md:items-start md:justify-between w-[90%] md:w-[90%] lg:w-full rounded-tl-[37px] rounded-bl-[37px] rounded-tr-[37px] md:rounded-tr-none rounded-br-[37px] border-5 border-[#97AA98] bg-[#B0C4B1] px-7 pt-7 pb-0 relative">
                    <div className="flex flex-col justify-center md:items-start space-y-5 max-w-[400px]">
                        <div className="font-[Inter] text-[#4A5759] text-left font-semibold text-3xl">For Schools</div>
                        <div className="font-[Inter] text-left text-[#4A5759] font-normal text-md">Cittaa empowers schools with programs for student and staff well-being. 
                            Therapists provide in-school counseling, students learn coping strategies through workshops.</div>
                        <Button onClick={onOpen1} variant="outline" className="max-w-[100px]">Learn More</Button>
                        <Modal className="bg-white p-5 rounded-[20px]" isOpen={isOpen1} placement="center" backdrop="blur" size="2xl" radius="md" shadow="md" scrollBehavior="inside" onOpenChange={onOpenChange1} hideCloseButton>
                            <ModalContent className="flex flex-col justify-center items-center">
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col my-5 justify-center items-center text-2xl text-[#4A5759]">Citta Care Wellness Solutions</ModalHeader>
                                <ModalBody className="overflow-scroll max-h-[500px] scrollbar scrollbar-none">
                                    <div className="w-full flex flex-row flex-wrap justify-around">
                                        <div className="w-full sm:w-[40%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                            <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                <div className="text-center text-normal font-medium text-[#4A5759]">Full-Time Psychologist:
                                                In-House Support</div>
                                                <div className="text-center text-[10px] text-[#4A5759]">
                                                    A dedicated, on-site psychologist available full-time to
                                                    provide continuous support for students&quot; mental health
                                                    needs.
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                    <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                    <span className=" text-[#4A5759]">Consistent, accessible mental health care.</span>
                                                </div>
                                                <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                    <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                    <span className=" text-[#4A5759]">Earty identification and intervention for mental
                                                    health issues</span>
                                                </div>
                                                <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                    <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                    <span className=" text-[#4A5759]">Integrated support for emotional and academic
                                                    development.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-[40%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                            <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                <div className="text-center text-normal font-medium text-[#4A5759]">Roving Psychologist:
                                                Flexible Mental Health Support</div>
                                                <div className="text-center text-[10px] text-[#4A5759]">
                                                    Psychologist services provided on a flexible 
                                                    schedule, ideal for schools that need intermittent support.
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                    <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                    <span className=" text-[#4A5759]">Tailored mental health support based on school needs</span>
                                                </div>
                                                <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                    <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                    <span className=" text-[#4A5759]">Cost-effective for schools with varying levels of mental health 
                                                    service requirements.</span>
                                                </div>
                                                <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                    <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                    <span className=" text-[#4A5759]">Flexibility to increase or decrease services as needed.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="bg-[#4A5759]" onClick={onClose}>Close</Button>
                                </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                    </Modal>
                    <Image priority={true} width="50" height="50" src="/svg-files/school.svg" alt="" className="w-[70%] h-auto block md:hidden select-none pointer-events-none object-contain drop-shadow-2xl" />
                    </div>
                    <Image priority={true} width="50" height="50" src="/svg-files/school.svg" alt="" className="w-2/5 h-auto hidden md:block select-none pointer-events-none" />
                    <Image priority={true} width="50" height="50" src="/svg-files/c1RightTop.svg" alt="" className="w-[100px] h-auto select-none pointer-events-none hidden md:block absolute top-0 right-0 object-contain" />
                    <Image priority={true} width="50" height="50" src="/svg-files/c1LeftBottom.svg" alt="" className="w-[100px] h-auto select-none pointer-events-none hidden md:block absolute bottom-0 left-[40%] object-contain" />
                </div>
                <div className="flex flex-row justify-center items-center md:items-start md:justify-between w-[90%] md:w-[90%] lg:w-full rounded-[37px] border-5 border-[#EAAB] bg-[#F0BCC4] px-7 pt-7 pb-0 pl-10 relative">
                    <Image priority={true} width="50" height="50" src="/svg-files/corporate.svg" alt="" className="w-2/5 h-auto hidden md:block select-none pointer-events-none" />
                    <div className="flex flex-col justify-center space-y-5 max-w-[400px]">
                        <div className="font-[Inter] text-[#4A5759] text-left font-semibold text-3xl">For Corporates</div>
                        <div className="font-[Inter] text-left text-[#4A5759] font-normal text-md">Cittaa helps businesses by offering employee wellness programs that teach stress management and resilience, promoting overall mental well-being at work.</div>
                        <Button onClick={onOpen2} variant="outline" className="max-w-[100px]">Learn More</Button>
                        <Modal className="bg-white p-5 rounded-[20px]" isOpen={isOpen2} size="2xl" placement="center" backdrop="blur" radius="md" shadow="md" scrollBehavior="inside" onOpenChange={onOpenChange2} hideCloseButton>
                            <ModalContent className="flex flex-col justify-center items-center">
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col my-5 justify-center items-center text-2xl text-[#4A5759]">Corporate Wellness Plans</ModalHeader>
                                <ModalBody className="overflow-scroll max-h-[500px] scrollbar scrollbar-none">
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <div className="w-full md:w-[80%] text-center text-[#4A5759]">Basic Plan - Ideal for Small Businesses &#40;Up to 50 employees&#41; Gold Plan: Digital Wellness Foundation</div>
                                        <div className="flex flex-row flex-wrap">
                                            <div className="w-full flex flex-row flex-wrap justify-around">
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Gold Plan: Digital Wellness Foundation</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        Access to our comprehensive digital wellness platform, along with a monthly wellness workshop.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Easy access to mental health resources and support.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Monthly workshops to promote mental well-being.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Improved employee health and productivity.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Platinum Plan: Enhanced Employee Support</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Gold Plan features plus bi-monthly group counseling
                                                        sessions.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">More frequent mental health support.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Group sessions to address collective workplace stressors.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Enhanced team cohesion and mental resilience.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Diamond Plan: Comprehensive Mental Health Care</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Platinum Plan features plus quarterly mental health
                                                        assessment reports.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Regular mental health check-ups.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Detailed reports to track employee well-being.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Proactive approach to managing mental health.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <div className="w-full md:w-[80%] text-center text-[#4A5759]">Standard Plan - Suitable for Medium-Sized Businesses &#40;51-250 employees&#41;</div>
                                        <div className="flex flex-row flex-wrap">
                                            <div className="w-full flex flex-row flex-wrap justify-around">
                                            <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Gold Plan: Bi-Weekly Wellness Boost</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Basic Plan features plus bi-weekly wellness workshops.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Frequent wellness initiatives.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Continuous improvement of workplace mental health.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Increased employee engagement and productivity.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Platinum Plan: Weekly Group Counseling</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Gold Plan features plus weekly group counseling
                                                        sessions.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Regular support for employee mental health.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Opportunities for team building and collective problem-solving.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Enhanced employee satisfaction and retention.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Diamond Plan: On-Demand Individual Counseling</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Platinum Plan features plus on-demand individual
                                                        counseling &#40;up to 50 sessions per month&#41;.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Immediate access to mental health support.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Personalized care for employees.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Significant improvement in overall workplace well-being.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <div className="w-full md:w-[80%] text-center text-[#4A5759]">Premium Plan - Best for Large Enterprises &#40;251-1000 employees&#41;</div>
                                        <div className="flex flex-row flex-wrap">
                                            <div className="w-full flex flex-row flex-wrap justify-around">
                                            <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Gold Plan: Weekly Wellness Integration</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Standard Plan features plus weekly wellness workshops.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Regular and intensive wellness programs.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">High employee participation and engagement.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Substantial improvements in mental health and productivity.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Platinum Plan: Daily Group Counseling</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Gold Plan features plus daily group counseling
                                                        sessions.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Daily support for mental health.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Continuous opportunity for team interaction and support.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Highly motivated and mentally resilient workforce.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Diamond Plan: Comprehensive On-Demand Support</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Platinum Plan features plus on-demand individual
                                                        counseling &#40;up to 200 sessions per month&#41;, bi-weekly mental health
                                                        assessment reports, and a dedicated account manager.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Extensive mental health resources and support.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Regular assessments to monitor and improve well-being.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Dedicated support for seamless service delivery.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full">
                                        <div className="w-full md:w-[80%] text-center text-[#4A5759]">Enterprise Plan - Customized for Very Large Organizations &#40;1000+ employees&#41;</div>
                                        <div className="flex flex-row flex-wrap">
                                            <div className="w-full flex flex-row flex-wrap justify-around">
                                            <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Gold Plan: Tailored Wellness Solutions</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        Customized packages based on specific requirements with unlimited access to basic services.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Flexible and tailored mental health solutions.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Comprehensive support for large, diverse workforces.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Enhanced overall organizational well-being.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Platinum Plan: Enhanced Custom Services</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Gold features plus additional services including
                                                        enhanced workshops and counseling.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Expanded mental health initiatives.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Comprehensive and flexible support options.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Higher employee satisfaction and productivity.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-[30%] h-auto p-3 bg-[#DCE5DC] rounded-md flex flex-col justify-center items-center space-y-4 min-w-[200px] my-5">
                                                    <div className="w-[80%] flex flex-col space-y-2 border-b-2 border-black py-1">
                                                        <div className="text-center text-normal font-medium text-[#4A5759]">Diamond Plan: Ultimate Mental Health Package</div>
                                                        <div className="text-center text-[10px] text-[#4A5759]">
                                                        All Platinum features plus complete suite with customized reporting, analytics, and on-site counselors.
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col space-y-2">
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Full-scale mental health support.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">Detailed analytics and reporting.</span>
                                                        </div>
                                                        <div className="text-left text-xs flex flex-row justify-start items-start space-x-2">
                                                            <Image priority={true} width="50" height="50" src="/svg-files/seviceCardTick.svg" alt="" className="w-[20px] select-none pointer-events-none" />
                                                            <span className=" text-[#4A5759]">On-site counselors for immediate support and interventions.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="bg-[#4A5759]" onClick={onClose}>Close</Button>
                                </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                        </Modal>
                        <Image priority={true} width="50" height="50" src="/svg-files/corporate.svg" alt="" className="w-4/5 h-auto block md:hidden select-none pointer-events-none object-contain drop-shadow-2xl" />
                    </div>
                    <Image priority={true} width="50" height="50" src="/svg-files/c2RightBottom.svg" alt="" className="w-[100px] h-auto select-none pointer-events-none hidden md:block absolute bottom-0 right-0 object-contain" />
                </div>
                <div className="flex flex-row justify-center items-center md:items-start md:justify-between w-[90%] md:w-[90%] lg:w-full rounded-[37px] border-5 border-[#F3D2C4] bg-[#F7E1D7] px-7 pt-7 pb-0 relative">
                    <div className="flex flex-col justify-center space-y-5 max-w-[400px]">
                        <div className="font-[Inter] text-[#4A5759] text-left font-semibold text-3xl">For You</div>
                        <div className="font-[Inter] text-left text-[#4A5759] font-normal text-md">Cittaa is expanding to serve individuals directly! 
                        Get personalized counseling, online therapy, digital mental health resources, all from the comfort of your home.</div>
                        <Button onClick={onOpen3} variant="outline" className="max-w-[100px]">Learn More</Button>
                        <Modal className="bg-white p-5 rounded-[20px]" isOpen={isOpen3} placement="center" backdrop="blur" size="2xl" radius="md" shadow="md" scrollBehavior="inside" onOpenChange={onOpenChange3} hideCloseButton>
                            <ModalContent className="flex flex-col justify-center items-center">
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col my-5 justify-center items-center text-2xl text-[#4A5759]"></ModalHeader>
                                <ModalBody className="overflow-scroll max-h-[500px] scrollbar scrollbar-none">
                                    <div className="flex flex-col justify-center items-center p-5 bg-[#DCE5DC] rounded-lg">
                                        <div className="text-center text-[#4A5759]">
                                        Stay tuned for the exciting reveal of our comprehensive programs, complete with pricing details and specific offerings. 
                                        </div>
                                        <div className="text-center text-[#4A5759]">
                                        At Cittaa, our dedication to bettering mental health knows no bounds. We&#39;re not just focused on institutions; we&#39;re committed to reaching every single individual in need.
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button className="bg-[#4A5759]" onClick={onClose}>Close</Button>
                                </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                        </Modal>
                        <Image priority={true} width="50" height="50" src="/svg-files/foryou.svg" alt="" className="w-4/5 h-auto block md:hidden select-none pointer-events-none object-contain drop-shadow-2xl" />
                    </div>
                    <Image priority={true} width="50" height="50" src="/svg-files/foryou.svg" alt="" className="w-2/5 h-auto hidden md:block select-none pointer-events-none" />
                    <Image priority={true} width="50" height="50" src="/svg-files/c3Top.svg" alt="" className="w-[100px] h-auto select-none pointer-events-none hidden md:block absolute top-0 left-[50%] object-contain" />
                    <Image priority={true} width="50" height="50" src="/svg-files/c3Bottom.svg" alt="" className="w-[150px] h-auto select-none pointer-events-none hidden md:block absolute bottom-0 left-[30%] object-contain" />
                </div>
            </div>
            <div className="w-screen overflow-visible static">
                <Image priority={true} width="50" height="50" src="/svg-files/sectionDividerWelcomeBottom2.svg" alt="main-illustration" className="w-screen h-auto select-none pointer-events-none" />
            </div>
        </div>
    )
}