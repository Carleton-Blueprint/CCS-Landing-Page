import React from 'react';
import Member from './Member';
import Springy from '../animation-wrappers/Springy';
const TeamMemberGroup = (props) => {
  const currentYear = new Date().getFullYear();
  const year = props.year;

  return (
    <div className="ml-4 font-poppins">
      <div className="flex flex-col items-center">
        <Springy style="inline-flex items-center w-[85%] p-4 pl-5 sm:p-10 h-fit">
          <div className="w-2 h-14 bg-brightRed"></div>
          <div className="pl-6 text-2xl font-semibold">
            {`${
              currentYear === year ? 'Current' : year + '-' + (year + 1)
            } CCS TEAM `}
          </div>
        </Springy>

        <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center font-poppins">
          {props.allMembers.map((node) => {
            return (
              node.year === props.year && <Member key={node.id} member={node} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberGroup;
