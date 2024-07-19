import React from 'react'
import Member from './Member';
const TeamMemberGroup = (props) => {
    const currentYear = new Date().getFullYear();
    const year = props.year

    return (
        <div className='px-0 xl:px-32'>
            <div className='p-4 sm:p-10 pl-5 h-fit flex items-center'> 
                <div className='w-2 h-14 bg-[--red]'>

                </div>
                <div className='text-2xl font-semibold pl-6'>
                {`${currentYear === year ? 'Current' : year + '-' + (year+1)} CCS TEAM `}
                </div>
            </div>        
            <div className={`grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-24 lg:grid-cols-2 justify-items-center lg:gap-y-10 ${props.first && 'pb-5 lg:pb-10'} gap-x-16`}>
            {
                props.allMembers.map((node) =>{
                    return(
                        node.year === props.year &&
                        <Member key={node.id} member={node}/>  
                    );
                })
            }
            </div>

        </div>
    
    )
}

export default TeamMemberGroup
