// export function MemberCard({title, name, bio, photo, linkedin, subtitle}) {



// //     <div className="flex justify-center h-10 mb-5 mt-1 items-center text-2xl text-gray-700">
// //     {name.length > 16 ? (
// //         <div className="text-center ">
// //             {name.split(' ').map((part, index) => (
// //                 <div key={index}>{part}</div>
// //             ))}
// //         </div>
// //     ) : (
// //         name
// //     )}
// // </div>
//     return (
//         <div className="group h-85 w-71 relative z-10">
//             <div className="flex justify-center h-full w-full items-center transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform">
//                 <div className="bg-white justify-center items-center rounded-2xl flex flex-col border-5 border-[#247F4A] absolute overflow-hidden inset-0 [backface-visibility:hidden]">
//                     <img 
//                         src={photo} 
//                         alt={`${name}'s profile`} 
//                         className={`w-full h-full object-cover mb-4 ${name === "Guneet Dhillon" ? "object-top" : "object-center"}`}
//                     />   
//                     <div className="flex justify-center h-10  items-center text-gray-700 text-lg italic">
//                         {title}
//                     </div>
//                     <div className="flex justify-center h-12 pb-2 mb-5 mt-1 items-center text-2xl text-gray-700 text-center">
//                         {name}
//                     </div>
//                 </div>
//                 <div className="bg-white inset-0 h-full w-full justify-center items-center rounded-2xl flex flex-col border-5 border-[#247F4A] absolute overflow-hidden text-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                     <div className="space-y-2 px-2 h-8/10 overflow-hidden mx-4">
//                         <div className="text-2xl flex justify-center items-center font-bold mt-2">
                            
//                             {name}
                            
//                         </div>
//                         <div className="text-sm italic flex justify-center items-center pb-0">
//                             {subtitle}
//                         </div>
//                         <div className="text-sm flex text-center  justify-center items-center overflow-hidden">
//                             {bio}
//                         </div>
//                     </div>
//                     <div className="mt-auto">
//                         <a href={linkedin} target="_blank" rel="noopener noreferrer">
//                             <img src="/teampage/linkedin-logo.webp" alt="LinkedIn" className="w-15 h-15 transition-all duration-300 ease-in-out hover:scale-110" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     );
// }

// export default MemberCard;


export function MemberCard({ title, name, bio, photo, linkedin, subtitle }) {
    return (
      <div className="group relative z-10 h-[22rem] w-[18rem]">
        <div className="flex h-full w-full items-center justify-center transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform">
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-4 border-[#247F4A] bg-white [backface-visibility:hidden]">
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
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-4 border-[#247F4A] bg-white text-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden]">
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