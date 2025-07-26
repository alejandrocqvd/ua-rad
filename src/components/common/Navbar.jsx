import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center rounded-xl p-2 bg-[#247F4A] max-w-5xl h-14 mt-8 mx-auto text-sm">
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
                <Link href={'/'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Team
                </Link>  
                <Link href={'/'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Competition
                </Link>  
                <Link href={'/'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Outreach
                </Link>  
                <Link href={'/'} className="h-10 flex justify-center items-center px-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1F7042] hover:scale-105">
                    Contact
                </Link>  
            </div>
            <div className="bg-white rounded-xl p-4 text-[#247F4A] font-bold h-10 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#D3AF37] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95">
                Sponsor Us
            </div>
        </nav>
    );
}
