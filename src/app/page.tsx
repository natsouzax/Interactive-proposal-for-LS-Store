import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import DeferredSections from "@/components/DeferredSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DeferredSections />
      </main>
    </>
  );
}
