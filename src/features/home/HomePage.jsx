"use client"

import { CollapsableInfo } from "@/components/ui/CollapsableInfo";
import { Divider } from "@/components/ui/Divider";
import { InfoBox } from "@/components/ui/InfoBox";
import { ProgressBar } from "@/components/ui/ProgressBar";
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
    <section className="overflow-x-hidden">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="relative flex flex-col justify-center z-10 items-center h-screen w-[99vw] bg-transparent overflow-x-hidden">
        <p className="text-xl md:text-5xl font-light text-[#007C41]">UNIVERSITY OF ALBERTA</p>
        <Image
            src="/branding/UARAD_LOGO_DARK.svg"
            alt="UARAD Logo"
            width={988}
            height={294}
            priority
            className="h-24 md:h-48 w-auto mx-2 my-8 md:my-10"
        />
        <p className="text-xl md:text-5xl font-light text-[#007C41]">ROBOTICS AND AERIAL DRONES</p>
      </div>
    </section>
  );
}

const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-end w-auto md:w-full max-w-4xl mx-2 md:mx-auto my-12 overflow-visible">
      <Image 
        src="/home/aboutUs.png"
        alt="UA Rad Team Photo"
        width={1089}
        height={812}
        className="md:relative z-20 h-80 md:w-72 rounded-xl border-2 mb-2 md:mb-0 border-[#247F4A] object-cover"
      />
      <div className="md:relative z-10 md:-ml-16 bg-white rounded-xl border-2 border-[#247F4A] py-8 md:py-12 px-8 md:px-10 md:pl-24">
        <p className="hidden md:flex absolute -top-16 text-left font-light text-[#007C41] text-4xl">WHO WE ARE</p>
        <p className="flex md:hidden text-left font-light text-[#007C41] text-3xl mb-8">WHO WE ARE</p>
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
    <section className="flex flex-col justify-center items-center max-w-4xl mx-10 mt-12 md:mt-0 md:mx-0">
      <div className="flex flex-col md:flex-row items-center md:items-end">
        <div className="md:flex-1 flex flex-col mb-8 md:mb-0">
          <p className="mb-8 md:mb-6 text-left font-light text-[#007C41] text-4xl">OUR MISSION</p>
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
          className="relative z-20 md:h-80 w-auto md:flex-1"
        />
      </div>
    </section>
  );
}

const SpecialtiesSection = () => {
  return (
    <section className="flex flex-row justify-center items-start w-full max-w-4xl mx-auto my-12 overflow-visible">
      <div className="relative flex-1 z-10 mx-2 md:mx-0 md:-mr-16 bg-white rounded-xl border-2 border-[#247F4A] py-12 px-10 md:pr-24">
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
        className="hidden md:flex relative flex-1 z-20 w-full h-[550px] rounded-xl border-2 border-[#247F4A] object-cover"
      />
    </section>
  );
}

const AircraftSection = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-4xl mx-2 md:mx-0 ">
      <p className="mb-8 md:mb-6 text-center md:text-left font-light text-[#007C41] text-4xl w-full mt-16 md:mt-0">THE AIRCRAFT</p>
      <div className="flex flex-col md:flex-row bg-white rounded-xl">
        <Image 
          src="/home/wipAircraft.png"
          alt="UA Rad Team Photo"
          width={1089}
          height={812}
          className="h-44 mb-2 md:mb-0 md:h-96 w-full md:w-72 bg-white relative z-20 rounded-xl border-2 border-[#247F4A] object-contain"
        />
        <div className="flex md:h-96 bg-white md:-ml-8 flex-col z-10 justify-between items-center px-10 py-10 rounded-xl border-2 border-[#247F4A]">
          <p className="text-3xl font-bold text-left text-[#007C41] mb-8 md:ml-8">COMING SOON...</p>
          <p className="md:ml-8 mb-8 md:mb-4 text-center md:text-left">
            Our UA-RAD team is iteratively refining aerodynamic frame profiles 
            and tuning flight control firmware for peak agility. We're building 
            carbon fiber prototypes and testing four blade propellers for 
            optimal thrust.
          </p>
          <div className="flex flex-row w-full justify-between items-center md:px-8 mb-8 md:mb-4">
            <InfoBox imagePath={"/home/speedIcon.png"} title={"Cruise Speed"} measurement={"??? m/s"} />
            <InfoBox imagePath={"/home/weightIcon.png"} title={"Weight"} measurement={"??? kg"} />
            <InfoBox imagePath={"/home/flightTimeIcon.png"} title={"Flight Time"} measurement={"??? h"} />
          </div>
          <ProgressBar progress={25} />
        </div>
      </div>
    </section>
  );
}

const FAQSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-2 gap-4 max-w-4xl my-24">
      <p className="mb-8 md:mb-6 text-center md:text-left font-light text-[#007C41] text-4xl w-full">FREQUENTLY ASKED QUESTIONS</p>
      <CollapsableInfo
        question="What is UA-RAD?"
        answer="UA-RAD is an innovative organization focused on the future of aerial racing drones in Canada. We're dedicated to shaping tomorrow's FPV drone racing competitions and fostering a community of drone enthusiasts."
      />
      <CollapsableInfo question={"test"} answer={"XD\n\n\n\n\n"}  />
      <CollapsableInfo question={"test"} answer={"XD\n\n\n\n\n"}  />
      <CollapsableInfo question={"test"} answer={"XD\n\n\n\n\n"}  />
      <CollapsableInfo question={"test"} answer={"XD\n\n\n\n\n"}  />
      <CollapsableInfo question={"test"} answer={"XD\n\n\n\n\n"}  />
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
        <AircraftSection />
        <FAQSection />
      </div>
    );
}


export default HomePage;