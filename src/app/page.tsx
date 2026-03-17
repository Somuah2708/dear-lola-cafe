import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Community from "@/components/Community";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Menu />
      <Gallery />
      <About />
      <Community />
      <Reviews />
      <Visit />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
