"use client";

import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[#c5f7fe] p-3">
        <Header />
        <Hero />
        <About />
      </div>
      <div>
        <Skills />
        <Projects />
        <Research />
      </div>
      <div className="bg-[#c5f7fe]">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
