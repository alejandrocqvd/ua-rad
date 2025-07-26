"use client"

import Image from "next/image";
import { useEffect } from "react"

const HomePage = () => {
  useEffect(() => {
    // Initialize particles.js if available
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load("particles-js", "/assets/particlesjs-config-home.json", () => {
        console.log("callback - particles.js config loaded")
      })
    }
  }, [])

    return (
      <section className="">
        <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
        {/* <div className="relative flex flex-col justify-center z-10 items-center h-screen w-screen bg-transparent">
          <Image
              src="/branding/UARAD_LOGO_DARK.svg"
              alt="UARAD Logo"
              width={988}
              height={294}
              priority
              className="h-48 w-auto mx-2"
          />
        </div> */}
      </section>
    );
}

export default HomePage;