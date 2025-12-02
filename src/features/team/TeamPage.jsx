"use client"

import MemberCard from "../../components/MemberCard";
import RoleTitle from "../../components/RoleTitle";
import {executiveMembers, mechanicalMembers, electricalMembers, softwareMembers, socialMediaMembers} from "../../components/Members";
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
            <div className="relative min-h-screen w-full overflow-hidden bg-white mx-auto">
              <div id="particles-js" className="absolute inset-0 z-0 "></div>
          
              <div className="flex justify-center items-center pt-20 pb-10 relative z-10 md:pt-30">
                {/* rounded corners + overflow-hidden here */}
                <div className="h-96 md:h-[28rem] rounded-2xl overflow-hidden flex">
                  <img
                    src="/teampage/memberphotos/teamphoto.png"
                    alt="About Us"
                    className="w-full h-full object-contain"  
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 relative z-10">
                <div className="w-full max-w-5xl mx-4 md:mx-8">
                  <div className="bg-white border-2 border-[#247F4A] flex flex-col justify-center items-center rounded-2xl py-8">
                    <p className="mt-6 mb-8 text-center font-light text-[#007C41] text-4xl">MEET THE TEAM</p>
                    <div className="text-center text-base md:text-xl mx-4 md:mx-8 mb-5">
                      A multidisciplinary team of innovators merging mechanical, electrical, and software expertise to pioneer the future of FPV drones platforms at the University of Alberta.
                    </div>
                  </div>
                </div>
              </div>
        
  
            <div className="flex flex-col pt-10 justify-center items-center mb-14">
              <RoleTitle title="EXECUTIVES "/>
              <div className="w-full max-w-5xl">
                <div className={`flex flex-wrap justify-center gap-8 px-4`}>
                  {executiveMembers.map((member, index) => (
                    <div key={index} className={`flex justify-center py-6 ${
                        executiveMembers.length >= 3 ? "w-full md:w-[calc(33.333%-22px)]": 
                        executiveMembers.length === 2 ? "w-full md:w-[calc(40%-16px)]": "w-full md:w-auto" 
                      }`}
                    >
                      <MemberCard {...member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-14">
                <RoleTitle title="MECHANICAL"/>
                <div className="w-full max-w-5xl"> 
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
            {/* <div className="flex flex-col justify-center items-center mb-14">
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
            </div> */}
            <div className="flex flex-col justify-center items-center mb-14">
                <RoleTitle title="SOFTWARE"/>
                <div className="w-full max-w-5xl"> 
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
            <div className="flex flex-col justify-center items-center mb-14">
                <RoleTitle title="SOCIAL MEDIA"/>
                <div className="w-full max-w-5xl"> 
                  <div className={`flex flex-wrap justify-center gap-8 px-4`}>
                    {socialMediaMembers.map((member, index) => (
                      <div key={index} className={`flex justify-center py-6 ${
                          socialMediaMembers.length >= 3 ? "w-full md:w-[calc(33.333%-22px)]": 
                          socialMediaMembers.length === 2 ? "w-full md:w-[calc(50%-16px)]": "w-full md:w-auto" 
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