"use client"

import { Divider } from "@/components/ui/Divider";
import Image from "next/image";
import { useEffect } from "react"

const HeroSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load("particles-js", "/assets/particlesjs-config-home.json", () => {
        console.log("callback - particles.js config loaded")
      })
    }
  }, [])

  return (
    <section id="hero" className="overflow-x-hidden">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="relative flex flex-col justify-center z-10 items-center h-screen w-[99vw] bg-transparent overflow-x-hidden">
        <h1>UNIVERSITY OF ALBERTA</h1>
        <Image
            src="/branding/UARAD_LOGO_DARK.svg"
            alt="UARAD Logo"
            width={988}
            height={294}
            priority
            className="h-48 w-auto mx-2 my-10"
        />
        <h1>ROBOTICS AND AERIAL DRONES</h1>
      </div>
    </section>
  );
}

const AboutSection = () => {
  return (
    <section className="flex flex-row justify-center items-end w-full max-w-4xl mx-auto my-12 overflow-visible">
      <Image 
        src="/home/aboutUs.png"
        alt="UA Rad Team Photo"
        width={1089}
        height={812}
        className="relative z-20 h-80 w-72 rounded-xl border-2 border-[#247F4A] object-cover"
      />
      <div className="relative z-10 -ml-16 bg-white rounded-xl border-2 border-[#247F4A] py-12 px-10 pl-24">
        <h2 className="absolute -top-16 text-left">WHO WE ARE</h2>
        <p className="text-left">
          UA RAD is a student led engineering club at the University of 
          Alberta dedicated to pushing the limits of FPV (First-Person View) 
          drone technology. We design, build, and race custom high 
          performance drones—ultimately representing Canada at the Aerial 
          Evolution Association Canada 2025 Competition.
        </p>
      </div>
    </section>
  );
}

const MissionSection = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-4xl">
      <div className="flex flex-row items-end">
        <div className="flex-1 flex flex-col">
          <h2 className="mb-6">OUR MISSION</h2>
          <p className="">
            At UA-RAD, we leverage rapid prototyping and aerodynamic simulations 
            to craft cutting edge FPV drone platforms, unite students from 
            engineering, computer science, and design disciplines around a 
            shared passion for aerial robotics, and compete at the highest level.
          </p>
        </div>
        <Image 
          src="/home/droneMesh.png"
          alt="UA Rad GDHILLON-04 Mesh Model"
          width={1089}
          height={812}
          className="relative z-20 h-80 w-auto flex-1"
        />
      </div>
    </section>
  );
}

const SpecialtiesSection = () => {
  return (
    <section className="flex flex-row justify-center items-start w-full max-w-4xl mx-auto my-12 overflow-visible">
      <div className="relative flex-1 z-10 -mr-16 bg-white rounded-xl border-2 border-[#247F4A] py-12 px-10 pr-24">
        <p className="text-left">
          <span className="font-bold">Competition Qualification. </span> 
          We're the only University of Alberta 
          team to qualify for and compete in the Aerial Evolution Association 
          Canada 2025 FPV racing series.
        </p>
        <Divider />
        <p className="text-left">
          <span className="font-bold">Advanced Drone Engineering. </span> 
          Advanced Drone Engineering. Leaning on our aerospace, software, 
          and design expertise, UA-RAD develops carbon fiber frames and FPV systems.
        </p>
        <Divider />
        <p className="text-left">
          <span className="font-bold">Custom Aerial Solutions. </span> 
          UA-RAD's cross disciplinary squad thrives on 
          crafting innovative UAV prototypes for research, education, and industry.
        </p>
      </div>
      <Image 
        src="/home/aboutUs.png"
        alt="UA Rad Team Photo"
        width={1089}
        height={812}
        className="relative flex-1 z-20 w-full h-[550px] rounded-xl border-2 border-[#247F4A] object-cover"
      />
    </section>
  );
}

const HomePage = () => {
    return (
      <div className="relative flex flex-col items-center justify-center">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <SpecialtiesSection />
      </div>
    );
}

export default HomePage;