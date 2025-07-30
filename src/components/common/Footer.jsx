import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center max-w-5xl mx-2 md:mx-auto bg-[#247F4A] rounded-xl py-12 md:py-16 px-8 md:px-12 mb-2 md:mb-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <Link href={'/'} className="flex md:hidden">
                    <Image
                        src={"/branding/UARAD_LOGO_LIGHT.svg"}
                        alt="UARAD Logo"
                        width={300}
                        height={300}
                        priority
                        className="h-12 w-auto mb-8"
                    />
                </Link>
                <div className="flex flex-col justify-center items-center md:items-start">
                    <p className="text-3xl md:text-4xl font-bold mb-8">GET IN TOUCH</p>
                    <Link href={'/contact'} className="rounded-[12px] bg-white py-3 px-8 text-[#247F4A] font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#D3AF37] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95">
                        Say Hi!
                    </Link>
                </div>
                <Link href={'/'} className="hidden md:flex">
                    <Image
                        src={"/branding/UARAD_LOGO_LIGHT.svg"}
                        alt="UARAD Logo"
                        width={300}
                        height={300}
                        priority
                        className="h-16 w-auto"
                    />
                </Link>
            </div>
            <hr className="border-1 md:border-2  w-full rounded-full my-12"></hr>
            <div className="flex flex-col-reverse md:flex-row justify-center items-start">
                <div className="flex flex-col justify-center items-center md:items-start flex-1">
                    <p className="text-2xl font-semibold mb-2">UA-RAD</p>
                    <p className="text-center md:text-left mb-4 md:mb-0">Innovating the future of aerial racing drones in Canada. Join us in shaping tomorrow's FPV drone racing competitions.</p>
                    <p className="mt-8 mb-1 font-light">Powered by</p>
                    <a href='https://www.nullus.ca/' target='_blank' rel="noopener noreferrer">
                        <Image
                            src="/branding/NULLUS_FULL_LOGO.svg"
                            alt="Nullus Inc. Logo"
                            width={800}
                            height={800}
                            priority
                            className="h-12 w-auto mx-2 brightness-0 invert"
                        />
                    </a>
                </div>
                <div className="md:flex flex-col justify-center md:justify-start h-full items-center md:ml-24 md:mr-44 hidden">
                    <p className="font-bold mb-8 w-24 text-left">Quick Links</p>
                    <Link
                        href={"/"}
                        className="w-24 text-center md:text-left mb-4 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-[#D3AF37]"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/"}
                        className="w-24 text-center md:text-left mb-4 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-[#D3AF37]"
                    >
                        Team
                    </Link>
                    <Link
                        href={"/"}
                        className="w-24 text-center md:text-left mb-4 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-[#D3AF37]"
                    >
                        Competition
                    </Link>
                    <Link
                        href={"/"}
                        className="w-24 text-center md:text-left mb-4 transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-[#D3AF37]"
                    >
                        Sponsors
                    </Link>
                    <Link
                        href={"/"}
                        className="w-24 text-center md:text-left transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-[#D3AF37]"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex flex-col justify-center md:justify-start w-full h-full md:w-24 items-center md:mr-8 text-center md:text-left mb-12 md:mb-0">
                    <p className="font-bold mb-6 md:mb-8 w-44">Contact</p>
                    <p className="mb-4 w-44">University of Alberta</p>
                    <p className="mb-4 w-44">116 St & 85 Ave</p>
                    <p className="mb-4 w-44">Edmonton, AB T6G 2R3</p>
                    <p className="w-44">uarad@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;