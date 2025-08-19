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
          UA-RAD is a student led engineering club at the University of 
          Alberta dedicated to pushing the limits of FPV (First-Person View) 
          drone technology. We design, build, and fly custom high 
          performance drones. Ultimately competing in the 
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
        <div className="md:flex-1 flex flex-col mb-8 md:mb-0 bg-white">
          <p className="mb-8 md:mb-6 text-left font-light text-[#007C41] text-4xl">OUR MISSION</p>
          <p className="md:mr-4 bg-white z-10">
            At UA-RAD, we bring together students who are passionate about drones, 
            technology, and innovation. Our goal is to design and build advanced aerial 
            systems while giving members the chance to learn new skills, work as 
            a team, and take on real challenges. Whether we're testing new ideas 
            or preparing for competitions, we're all about learning by doing and 
            pushing what's possible with drones.
          </p>
        </div>
        <Image 
          src="/home/DRONE_MODEL.png"
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
      <div className="relative flex-1 min-w-0 z-10 mx-2 md:mx-0 md:-mr-16 bg-white rounded-xl border-2 border-[#247F4A] py-12 px-10 md:pr-24">
        <p className="text-left">
          <span className="font-bold">National Recognition. </span> 
          UA-RAD proudly represents the University of Alberta on a 
          national stage, competing alongside top teams in Canada's FPV drone 
          competition scene.
        </p>
        <Divider />
        <p className="text-left">
          <span className="font-bold">Hands-On Innovation. </span> 
          From carbon fiber frames to real-time video systems, our team builds 
          and tests custom drones using skills in engineering, coding, and design.
        </p>
        <Divider />
        <p className="text-left">
          <span className="font-bold">Team-Driven Projects. </span> 
          With members from multiple faculties, we work together on creative 
          drone solutions for challenges faced in any drone competition.
        </p>
      </div>
      <Image 
        src="/home/manHoldingDrone.jpg"
        alt="Man holding a drone"
        width={1089}
        height={812}
        className="hidden md:flex relative flex-1 min-w-0  z-20 w-full h-[550px] rounded-xl border-2 border-[#247F4A] object-cover"
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
            Our team at UA-RAD is currently working on improving 
            our drone's performance through testing and refinement. 
            We're building carbon fiber prototypes, trying out 
            different propeller setups, and tuning the flight control 
            software to make the drone as agile and responsive as possible. 
          </p>
          <div className="hidden md:flex flex-row w-full justify-between items-center md:px-8 mb-8 md:mb-4">
            <InfoBox imagePath={"/home/speedIcon.png"} title={"Cruise Speed"} measurement={"TBD"} />
            <InfoBox imagePath={"/home/weightIcon.png"} title={"Weight"} measurement={"TBD"} />
            <InfoBox imagePath={"/home/flightTimeIcon.png"} title={"Flight Time"} measurement={"TBD"} />
          </div>
          <p className="mb-4 font-bold text-[#247F4A]">Progress:</p>
          <ProgressBar progress={10} />
        </div>
      </div>
    </section>
  );
}

const FAQSection = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-2 gap-4 max-w-4xl my-24">
      <p className="mb-8 md:mb-6 text-center md:text-left font-light text-[#007C41] text-4xl w-full">FREQUENTLY ASKED QUESTIONS</p>
      <CollapsableInfo question={"How can I get involved?"} answer={"You can get involved by reaching out to us through our contact page. We're always looking for motivated students who want to learn and contribute."}  />
      <CollapsableInfo question={"Do I need experience to join?"} answer={"No experience is required! We welcome students from all backgrounds and skill levels. Whether you're into engineering, coding, design, or just curious about drones, there's a place for you on the team."}  />
      <CollapsableInfo question={"What skills can I learn by joining UA-RAD?"} answer={"By joining UA-RAD, you can develop hands-on experience in areas like drone assembly, soldering, 3D printing, flight tuning, and FPV piloting. You'll also gain teamwork, problem-solving, and project management skills by working on real builds with other students."}  />
      <CollapsableInfo question={"What kind of drones do you build?"} answer={"We focus on FPV (First Person View) specialized drones designed for agility and performance. Our builds typically include carbon fiber frames, flight controllers, and video transmission systems for immersive piloting."}  />
      <CollapsableInfo question={"What competitions do you attend?"} answer={"We compete in the Aerial Evolution Association of Canada's National Student UAS Competition, where we design and build unmanned aerial systems for real-world scenarios. This competition challenges us to create innovative solutions for practical applications like wildfire response automation."}  />
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