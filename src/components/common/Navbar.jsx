import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center rounded-xl p-2 bg-[#247F4A] max-w-5xl h-14">
            <Image
                src="/branding/UARAD_LOGO_LIGHT.svg"
                alt="UARAD Logo"
                width={988}
                height={294}
                priority
                className="h-6 w-auto"
            />
            <div className="text-white flex flex-row gap-8 justify-center items-center">
                <Link href={'/'}>
                    Home
                </Link>  
                <Link href={'/'}>
                    Team
                </Link>  
                <Link href={'/'}>
                    Competition
                </Link>  
                <Link href={'/'}>
                    Outreach
                </Link>  
                <Link href={'/'}>
                    Contact
                </Link>  
            </div>
            <div className="bg-white rounded-xl p-4 text-[#247F4A] font-bold h-10 flex justify-center items-center">
                Sponsor Us
            </div>
        </nav>
    );
}
