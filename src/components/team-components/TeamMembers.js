import React from "react";
import Member from "./Member";

const TeamMembers = ({members}) => {
    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-stretch gap-y-64 p-16 ">
            {members.map((node) => {
                return(
                    <Member key={node.id} member={node}/>
                );
            })}
        </div>
    )
}

export default TeamMembers;