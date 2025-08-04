"use client"

import MemberCard from "../../components/MemberCard";
import RoleTitle from "../../components/RoleTitle";
import {executiveMembers, mechanicalMembers, electricalMembers, softwareMembers} from "../../components/Members";
import { useEffect, React} from "react"

const TeamPage = () => {
    useEffect(() => {
      // Initialize particles.js if available
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS.load("particles-js", "/assets/particlesjs-config-home.json", () => {
          console.log("callback - particles.js config loaded");
        });
      }

      // Cleanup function
      return () => {
        if (typeof window !== "undefined" && window.pJSDom && window.pJSDom.length > 0) {
          window.pJSDom[0].pJS.fn.vendors.destroypJS();
          window.pJSDom = [];
        }
      };
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
          <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
            <div className="flex justify-center items-center pb-10 pt-20 relative z-10 md:pt-30 h-screen md:h-screen">
                <div className="bg-[url('/home/aboutUS.png')] bg-cover bg-center w-11/12 max-w-6xl h-200 flex justify-center items-center rounded-2xl md:w-2/3"> </div>
            </div>
            <div className="flex justify-center items-center mt-10 relative z-10">
                <div className="bg-white border-4 md:border-5 border-[#247F4A] w-11/12 md:w-2/3 flex flex-col justify-center items-center rounded-2xl">
                    <div className="h-auto md:h-20 content-normal text-2xl md:text-4xl mt-5 px-4 text-center">
                        Meet The UA-RAD 2025 Team
                    </div>
                    <div className="text-center text-base md:text-xl mx-4 md:mx-8 mb-5">
                        A multidisciplinary team of innovators merging mechanical, electrical, and software expertise to pioneer the future of FPV drones platforms at the University of Alberta.                    
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-14">
              <RoleTitle title="Executives"/>
              <div className="w-full max-w-6xl">
                <div className={`flex flex-wrap justify-center gap-8 px-4`}>
                  {executiveMembers.map((member, index) => (
                    <div key={index} className={`flex justify-center py-6 ${
                        executiveMembers.length >= 3 ? "w-full md:w-[calc(33.333%-22px)]": 
                        executiveMembers.length === 2 ? "w-full md:w-[calc(50%-16px)]": "w-full md:w-auto" 
                      }`}
                    >
                      <MemberCard {...member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-14">
                <RoleTitle title="Mechanical"/>
                <div className="w-full max-w-6xl"> 
                  <div className={`flex flex-wrap justify-center gap-8 px-4`}>
                    {mechanicalMembers.map((member, index) => (
                      <div key={index} className={`flex justify-center py-6 ${
                          mechanicalMembers.length >= 3 ? "w-full md:w-[calc(33.333%-22px)]": 
                          mechanicalMembers.length === 2 ? "w-full md:w-[calc(50%-16px)]": "w-full md:w-auto" 
                        }`}
                      >
                        <MemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-14">
                <RoleTitle title="Electrical"/>
                <div className="w-full max-w-6xl"> 
                  <div className={`flex flex-wrap justify-center gap-8 px-4`}>
                    {electricalMembers.map((member, index) => (
                      <div key={index} className={`flex justify-center py-6 ${
                          electricalMembers.length >= 3 ? "w-full md:w-[calc(33.333%-22px)]": 
                          electricalMembers.length === 2 ? "w-full md:w-[calc(50%-16px)]": "w-full md:w-auto" 
                        }`}
                      >
                        <MemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-14">
                <RoleTitle title="Software"/>
                <div className="w-full max-w-6xl"> 
                  <div className={`flex flex-wrap justify-center gap-8 px-4`}>
                    {softwareMembers.map((member, index) => (
                      <div key={index} className={`flex justify-center py-6 ${
                          softwareMembers.length >= 3 ? "w-full md:w-[calc(33.333%-22px)]": 
                          softwareMembers.length === 2 ? "w-full md:w-[calc(50%-16px)]": "w-full md:w-auto" 
                        }`}
                      >
                        <MemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>

    );
}

export default TeamPage;