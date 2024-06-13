"use server";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export const FAQ = () => {
    return(
        <div className="flex flex-col justify-center items-center w-screen h-auto bg-[#E5EBE5] pb-20">
            <div className="flex flex-col justify-center items-center w-screen p-1 md:p-5 max-w-7xl space-y-10">
                <div className="flex flex-row justify-center items-center text-3xl md:text-6xl text-[#4A5759] w-4/5 font-semibold font-['Cabin]">FAQs</div>
                <Accordion className="w-4/5 flex flex-col space-4-5" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">What types of mental health services do you offer?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                            At Cittaa, we provide a wide range of mental health services including individual 
                            counselling, group therapy, school-based programs, corporate wellness 
                            initiatives, and specialised therapies like Art Therapy, Music Therapy, and DIY 
                            Therapy. Each service is tailored to meet the unique needs of our clients, 
                            whether they are individuals, educational institutions, or businesses.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">How can I access your services?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                            You can access our services by contacting us through our website, where you 
                            can book appointments, register for workshops or programs, and get 
                            information on our upcoming events. For institutions like schools and 
                            corporations, we offer tailored programs that can be integrated directly into 
                            your organisation.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">Are your services available online?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                            Yes, many of our services, including individual counselling and group therapy 
                            sessions, are available online. This allows us to provide flexible and accessible 
                            mental health support to our clients, regardless of their location.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">What is your approach to therapy?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                        Our therapeutic approach is evidence-based and client-centred, focusing on 
                        methods like Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy 
                        (DBT), and mindfulness practices. We prioritise creating a supportive and safe 
                        environment for our clients to explore and address their mental health 
                        concerns.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">How do you ensure confidentiality in your services?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left p-5">
                            Client confidentiality is paramount at Cittaa. All our mental health professionals 
                            adhere strictly to ethical guidelines and legal requirements concerning 
                            confidentiality and privacy. Your sessions and personal information are handled 
                            with the utmost discretion and security.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">What kind of training do your therapists have?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                            Our therapists are highly qualified professionals with degrees in psychology, 
                            counselling, or related fields. They are licensed practitioners who regularly 
                            participate in ongoing training to stay updated with the latest advancements in 
                            mental health care.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">How can schools and corporations benefit from your programs?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                            Our school-based and corporate programs are designed to improve overall 
                            mental well-being, enhance productivity, and foster a supportive environment. 
                            For schools, we focus on educating both students and teachers about mental 
                            health, which helps in early identification and management of mental health 
                            issues. For corporations, our programs aim to reduce workplace stress and 
                            improve employee satisfaction and performance.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="hover:no-underline text-[#4A5759] font-['Inter'] text-sm md:text-lg text-left md:p-5">What are the costs of your services?</AccordionTrigger>
                        <AccordionContent className="text-[#4A5759] font-['Inter'] font-light md:font-normal text-sm md:text-lg text-left md:p-5">
                            The costs vary depending on the type of service and the duration of the 
                            program. We offer competitive pricing and can provide detailed quotes based 
                            on specific needs. We strive to make our services accessible to a broad 
                            audience, and pricing details can be discussed during your initial consultation.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}