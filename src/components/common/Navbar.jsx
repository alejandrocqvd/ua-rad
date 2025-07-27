"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DesktopNavbar = () => {
    return (
        <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 flex-row justify-between items-center rounded-xl p-2 bg-[#247F4A] max-w-5xl h-14 mt-8 mx-auto text-sm">
            <Link href={'/'} className="h-10 flex justify-center items-center rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                <Image
                    src="/branding/UARAD_LOGO_LIGHT.svg"
                    alt="UARAD Logo"
                    width={988}
                    height={294}
                    priority
                    className="h-6 w-auto mx-2"
                />
            </Link>
            <div className="text-white flex flex-row gap-2 justify-center items-center font-semibold">
                <Link href={'/'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Home
                </Link>  
                <Link href={'/team'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Team
                </Link>  
                <Link href={'/competition'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Competition
                </Link>  
                <Link href={'/about'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    About
                </Link>  
                <Link href={'/sponsors'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Sponsors
                </Link>  
                <Link href={'/contact'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Contact
                </Link>  
            </div>
            <div className="bg-white rounded-xl p-4 text-[#247F4A] font-bold h-10 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#D3AF37] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95">
                Sponsor Us
            </div>
        </nav>
    );
}

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex md:hidden fixed top-0 left-0 right-0 z-50 bg-[#247F4A] p-4 justify-between items-center rounded-xl mt-2 mx-2">
      <Link href="/">
        <Image src="/branding/UARAD_LOGO_LIGHT.svg" alt="UARAD Logo" width={150} height={50} className="h-6 w-auto" />
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className={`text-white font-bold text-xl transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
      >
        ☰
      </button>
      <div
        className={`absolute top-16 left-0 w-full bg-[#247F4A] flex flex-col items-start px-4 pb-4 pt-2 gap-2 text-white font-semibold shadow-lg rounded-xl mt-2 transition-all duration-500 ease-out transform origin-top ${
          open
            ? "opacity-100 translate-y-0 scale-y-100 max-h-96"
            : "opacity-0 -translate-y-4 scale-y-95 max-h-0 overflow-hidden p-0"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="w-full py-2 px-2 rounded-lg hover:bg-[#1F7042] transition-all duration-200 transform hover:translate-x-2"
        >
          Home
        </Link>
        <Link
          href="/team"
          onClick={() => setOpen(false)}
          className="w-full py-2 px-2 rounded-lg hover:bg-[#1F7042] transition-all duration-200 transform hover:translate-x-2"
        >
          Team
        </Link>
        <Link
          href="/competition"
          onClick={() => setOpen(false)}
          className="w-full py-2 px-2 rounded-lg hover:bg-[#1F7042] transition-all duration-200 transform hover:translate-x-2"
        >
          Competition
        </Link>
        <Link
          href="/about"
          onClick={() => setOpen(false)}
          className="w-full py-2 px-2 rounded-lg hover:bg-[#1F7042] transition-all duration-200 transform hover:translate-x-2"
        >
          About
        </Link>
        <Link
          href="/sponsors"
          onClick={() => setOpen(false)}
          className="w-full py-2 px-2 rounded-lg hover:bg-[#1F7042] transition-all duration-200 transform hover:translate-x-2"
        >
          Sponsors
        </Link>
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="w-full py-2 px-2 rounded-lg hover:bg-[#1F7042] transition-all duration-200 transform hover:translate-x-2"
        >
          Contact
        </Link>
        <div className="bg-white w-full rounded-xl px-4 py-2 text-[#247F4A] font-bold hover:bg-[#D3AF37] hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md">
          Sponsor Us
        </div>
      </div>
    </nav>
  )
}

export const Navbar = () => {
    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    );
};
