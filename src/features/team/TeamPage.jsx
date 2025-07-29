import MemberCard from "../../components/MemberCard";
import RoleTitle from "../../components/RoleTitle";

const executiveMembers = [
  {
    title: "President",
    name: "Guneet Dhillon",
    bio: "Lorem ipsum dolor sit amet...",
    photo: "/teampage/test.png",
    linkedin: "https://linkedin.com/example1"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  // Add more members as needed
];

const mechanicalMembers = [
  {
    title: "President",
    name: "Guneet Dhillon",
    bio: "Lorem ipsum dolor sit amet...",
    photo: "/teampage/test.png",
    linkedin: "https://linkedin.com/example1"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  // Add more members as needed
];

const electricalMembers = [
  {
    title: "President",
    name: "Guneet Dhillon",
    bio: "Lorem ipsum dolor sit amet...",
    photo: "/teampage/test.png",
    linkedin: "https://linkedin.com/example1"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  // Add more members as needed
];

const softwareMembers = [
  {
    title: "President",
    name: "Guneet Dhillon",
    bio: "Lorem ipsum dolor sit amet...",
    photo: "/teampage/test.png",
    linkedin: "https://linkedin.com/example1"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  {
    title: "Vice President",
    name: "Jane Doe",
    bio: "Sed do eiusmod tempor...",
    photo: "/teampage/test2.png",
    linkedin: "https://linkedin.com/example2"
  },
  // Add more members as needed
];

const TeamPage = () => {
    return (
        <div className="w-4/5">
            <div className="flex justify-center items-center pb-10 pt-30">
                <div className="bg-[url('/teampage/horse.jpg')] bg-cover bg-center w-2/3 h-150 flex justify-center items-center rounded-2xl"> </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="bg-[#247F4A] w-2/3 flex flex-col justify-center items-center">
                    <div className="h-20 content-normal text-4xl mt-5">
                        Meet The UA-RAD 2025 Team
                    </div>
                    <div className="text-center text-xl mx-8 mb-5">
                        A multidisciplinary team of innovators merging mechanical, electrical, and software expertise to pioneer the future of robotics at the University of Alberta.                    
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <RoleTitle title="Executives"/>
                <div className="w-full max-w-6xl"> 
                  <div
                    className={`grid gap-8 p-4 ${
                      executiveMembers.length <= 2
                        ? "grid-cols-1 justify-items-center md:grid-cols-2" // Center if 1 or 2 cards
                        : "grid-cols-1 md:grid-cols-3" // Default 3-column grid
                    }`}
                  >
                    {executiveMembers.map((member, index) => (
                      <div key={index} className="flex justify-center">
                        <MemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <RoleTitle title="Mechanical"/>
                <div className="w-full max-w-6xl"> 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center p-4">
                    {mechanicalMembers.map((member, index) => (
                      <div key={index}> 
                        <MemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <RoleTitle title="Electrical"/>
                <div className="w-full max-w-6xl"> 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center p-4">
                    {electricalMembers.map((member, index) => (
                      <div key={index}> 
                        <MemberCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <RoleTitle title="Software"/>
                <div className="w-full max-w-6xl"> 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center p-4">
                    {softwareMembers.map((member, index) => (
                      <div key={index}> 
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