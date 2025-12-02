import { useState, useEffect } from 'react';

export function MemberCard({ title, name, bio, photo, linkedin, subtitle }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768); // 768px is typical mobile breakpoint
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handleFlip = () => {
        if (isMobile) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleMouseEnter = () => {
        if (!isMobile && !isFlipped) {
            setIsFlipped(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile && isFlipped) {
            setIsFlipped(false);
        }
    };

    return (
      <div className="group relative z-10 h-[22rem] w-[18rem]">
        <div 
          className={`flex h-full w-full items-center justify-center transition-all duration-500 ease-in-out [transform-style:preserve-3d] will-change-transform ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleFlip}
        >
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-4 border-[#247F4A] bg-white [backface-visibility:hidden] cursor-pointer">
            {/* Image area with fixed height */}
            <div className="h-[75%] w-full overflow-hidden">
              <img
                src={photo}
                alt={`${name}'s profile`}
                className={`h-full w-full object-cover ${name === "Guneet Dhillon" ? "object-top" : "object-center"}`}
              />
            </div>
  
            {/* Title */}
            <div className="flex h-10 items-center justify-center pt-3 text-lg italic text-gray-700">
              {title}
            </div>
  
            {/* Name */}
            <div className="mt-1 flex h-12 items-center justify-center pb-3 px-2 text-center text-2xl text-gray-700">
              {name}
            </div>
          </div>
  
          {/* BACK */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-4 border-[#247F4A] bg-white text-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden] cursor-pointer">
            <div className="mx-4 h-[78%] space-y-2 overflow-hidden px-2">
              <div className="mt-2 flex items-center justify-center text-xl font-bold">
                {name}
              </div>
              {subtitle && (
                <div className="flex items-center justify-center text-sm italic">
                  {subtitle}
                </div>
              )}
              <div className="flex items-start justify-center text-center text-sm">
                {bio}
              </div>
            </div>
            <div className="mt-auto pb-3 pt-1">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <img
                  src="/teampage/linkedin-logo.webp"
                  alt="LinkedIn"
                  className="h-16 w-16 transition-all duration-300 ease-in-out hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MemberCard;