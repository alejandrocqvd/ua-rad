import MemberCard from "../../components/MemberCard";
import RoleTitle from "../../components/RoleTitle";

const TeamPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-100 pb-10">
                <div className="bg-green-400 w-2/3 h-100 flex justify-center items-center ">
                    group picture 
                </div>
            </div>
            <div>
                <RoleTitle title="Executives"/>
                <MemberCard title="President" name="Guneet Dhillon" bio="yo" photo="" linkedin=""/> 
            </div>
            <div>
                <RoleTitle title="Mechanical"/>
                <MemberCard /> 
            </div>
            <div>
                <RoleTitle title="Electrical"/>
                <MemberCard /> 
            </div>
            <div>
                <RoleTitle title="Software"/>
                <MemberCard /> 
            </div>
            
        </div>
        
        
    );
}

export default TeamPage;