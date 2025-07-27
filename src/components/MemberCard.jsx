export function MemberCard({title, name, bio, photo, linkedin}) {




    return (
        <div className="group h-85 w-65">
            <div className="flex justify-center h-full w-full items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="bg-white justify-center items-center rounded-2xl flex flex-col border-5 border-[#247F4A] absolute overflow-hidden inset-0">
                    <img 
                        src={photo} 
                        alt={`${name}'s profile`} 
                        className="w-full h-full object-cover mb-4"
                    />   
                    <div className="flex justify-center h-10 items-center text-gray-700 text-lg italic">
                        {title}
                    </div>
                    <div className="flex justify-center h-10 mb-5 mt-1 items-center text-3xl text-gray-700">
                        {name}
                    </div>
                </div>
                <div className="bg-white inset-0 h-full w-full justify-center items-center rounded-2xl flex flex-col border-5 border-[#247F4A] absolute overflow-hidden text-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="space-y-2 px-2 h-8/10 overflow-hidden mx-4">
                        <div className="text-2xl flex justify-center items-center font-bold mt-3">
                            {name}
                        </div>
                        <div className="text-lg italic flex justify-center items-center">
                            {title}
                        </div>
                        <div className="text-sm flex justify-center items-center overflow-hidden">
                            {bio}
                        </div>
                    </div>
                    <div className="mt-auto">
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <img src="/teampage/linkedin-logo.webp" alt="LinkedIn" className="w-20 h-20 transition-all duration-300 ease-in-out hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default MemberCard;