import React from 'react';
import TeamMemberGroup from './TeamMemberGroup';

const TeamMembers = ({ members }) => {
  const setYears = new Set(members.map((item) => item.year));
  const sortedYears = [...setYears].sort((a, b) => b - a);
  console.log(sortedYears);
  return (
    <div>
      {sortedYears.map((year, index) => {
        return (
          <TeamMemberGroup
            year={year}
            allMembers={members}
            first={index === 0}
          />
        );
      })}
    </div>
  );
};

export default TeamMembers;
