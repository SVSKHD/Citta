"use server";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export const Reviews = () => {
    return(
        <div id="review-section" className="flex flex-col justify-center items-center w-screen h-auto bg-[#90A297] pt-0">
            <div className="flex flex-col justify-center items-center w-screen md:pt-5 md:pl-10 md:pr-10 max-w-7xl space-y-5 pt-5">
                <div className="flex flex-row justify-center items-center text-3xl md:text-6xl text-[#4A5759] w-4/5 font-semibold font-['Cabin']">Reviews</div>
                <div className="flex flex-row justify-center items-center w-full md:w-auto">
                <Carousel className="flex flex-row justify-start items-center w-[85%] md:w-full max-w-lg md:max-w-full">
                    <CarouselContent className="flex flex-row justify-start items-center space-x-0">
                        <CarouselItem className="md:basis-1/3">
                            <div className="w-[100%]">
                                <div className="flex flex-row justify-between items-baseline px-3">
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewUpperLeaf.svg" alt="leaf" className="w-[100px] h-auto select-none" />
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewQuotationMark.svg" alt="quotation" className="w-[40px] h-auto -mb-[200px] select-none" />
                                </div>
                                <Card className="flex flex-row justify-center items-center w-full">
                                    <CardContent className="flex flex-col items-center justify-center p-3 space-y-4">
                                        <CardHeader className="flex flex-row justify-center items-center space-x-0 space-y-0">
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                        </CardHeader>
                                        <CardDescription className="text-center">
                                            &quot;I was initially skeptical about how much therapy could help, but the DIY  Therapy sessions introduced at VIT Chennai have been a revelation. It’s  empowering to use simple tools and techniques to manage my own mental  health. These sessions have made a huge difference in how I handle stress and  anxiety.&quot;
                                        </CardDescription>
                                        <CardFooter className="flex flex-row justify-center items-center text-xs text-center font-semibold">
                                            Testimonial from a Student at VIT Chennai
                                        </CardFooter>
                                    </CardContent>
                                </Card>
                                <div className="flex flex-row justify-end px-3">
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewLowerLeaf.svg" alt="leaf" className="w-[70px] h-auto md:opacity-0 select-none" />
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <div className="w-[100%]">
                                <div className="flex flex-row justify-between items-baseline px-3">
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewUpperLeaf.svg" alt="leaf" className="w-[100px] h-auto md:opacity-0 select-none" />
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewQuotationMark.svg" alt="quotation" className="w-[40px] h-auto -mb-[200px] select-none" />
                                </div>
                                <Card className="flex flex-row justify-center items-center w-full">
                                    <CardContent className="flex flex-col items-center justify-center p-3 space-y-4">
                                        <CardHeader className="flex flex-row justify-center items-center space-x-0 space-y-0">
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                        </CardHeader>
                                        <CardDescription className="text-center">
                                            &quot;Art Therapy at Cittaa has opened up new avenues for me to express my emotions. 
                                            It&apos;s not just about painting or drawing; 
                                            it&apos;s about discovering a part of  myself that 
                                            I didn&apos;t know existed. This form of therapy has helped me explore  
                                            my thoughts and feelings in a safe and supportive environment.&quot;
                                        </CardDescription>
                                        <CardFooter className="flex flex-row justify-center items-center text-xs text-center font-semibold">
                                            Testimonial from an Art Therapy Participant
                                        </CardFooter>
                                    </CardContent>
                                </Card>
                                <div className="flex flex-row justify-end px-3">
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewLowerLeaf.svg" alt="leaf" className="w-[70px] h-auto md:opacity-0 select-none" />
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3">
                            <div className="w-[100%]">
                                <div className="flex flex-row justify-between items-baseline px-3">
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewUpperLeaf.svg" alt="leaf" className="w-[100px] h-auto md:opacity-0 select-none" />
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewQuotationMark.svg" alt="quotation" className="w-[40px] h-auto -mb-[500px] select-none" />
                                </div>
                                <Card className="flex flex-row justify-center items-center w-full">
                                    <CardContent className="flex flex-col items-center justify-center p-3 space-y-4">
                                        <CardHeader className="flex flex-row justify-center items-center space-x-0 space-y-0">
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                            <Image priority={true} width="50" height="50" src="/svg-files/reviewStar.svg" alt="quotation" className="w-[20px] h-auto select-none" />
                                        </CardHeader>
                                        <CardDescription className="text-center">
                                            &quot;Music Therapy has been a soul-soothing experience. 
                                            It’s amazing how music  can be used to heal and connect with emotions that are otherwise hard to  articulate. 
                                            The sessions at Cittaa have helped me connect deeply with my inner  self and reduce my daily stress significantly.&quot;
                                        </CardDescription>
                                        <CardFooter className="flex flex-row justify-center items-center text-xs text-center font-semibold">
                                            Testimonial from a Music Therapy Attendee
                                        </CardFooter>
                                    </CardContent>
                                </Card>
                                <div className="flex flex-row justify-end px-3">
                                    <Image priority={true} width="50" height="50" src="/svg-files/reviewLowerLeaf.svg" alt="leaf" className="w-[70px] h-auto select-none" />
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="p-0 hidden"/>
                    <CarouselNext className="p-0 hidden"/>
                </Carousel>
                </div>
                <div className="w-screen overflow-visible md:static">
                    <Image priority={true} width="50" height="50" src="/svg-files/sectionDividerReviewBottom.svg" alt="main-illustration" className="w-screen h-auto select-none pointer-events-none" />
                </div>
            </div>
        </div>
    )
}