import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroBand from "@/components/IntroBand";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Reserve from "@/components/Reserve";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroBand />
      <About />
      <Menu />
      <Experience />
      <Gallery />
      <Visit />
      <Reserve />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
