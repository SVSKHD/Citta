import { About } from "@/components/about1";
import { Collaborations } from "@/components/collaborations";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reviews } from "@/components/review";
import { ThumbnailSection } from "@/components/thumbnail-section";
import { Welcome } from "@/components/welcome";

export default function Home() {
  return (
    <>
    <Navbar/>
    <ThumbnailSection />
    <Welcome />
    <About />
    <Collaborations/>
    <Reviews />
    <FAQ />
    <Contact />
    <Footer />
    </>
  )
}
