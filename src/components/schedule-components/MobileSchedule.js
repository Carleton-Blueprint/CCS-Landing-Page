import React from 'react'
import MobileEvent from './MobileEvent';
const MobileSchedule = ({eventRows}) => {
    const getTime = (time) => {
        try{
          let hours = time.split(':')[0]
          let mins = time.split(":")[1].slice(0,2)
          let period = time.split(":")[1].slice(-2).toLowerCase();
          
          let totalTimePastMidnight = 0
      
          totalTimePastMidnight += period === "pm" && hours!==12 && 12*60
      
          totalTimePastMidnight += parseInt(hours)*60
          totalTimePastMidnight += parseInt(mins)
          
          return totalTimePastMidnight
        }
        catch (err){
          return 0;
        }
        
      };
    const allEvents = eventRows.reduce((acc, block) => {
        return acc.concat(block.events);
      }, []);
    allEvents.sort((a,b) => {
        if (a.startTime === b.startTime) {
            return getTime(a.endTime) - getTime(b.endTime); // Sort by secondary if primary values are the same
          }
          return getTime(a.startTime) - getTime(b.startTime);
    })

    console.log("mobile", allEvents)
    const shadow = {
        'background': 'linear-gradient(90deg, #41151B 0%,#E91C24 7%, #111 10%, #111 90%, #E91C24 93%, #41151B 100%)'
    }
    return (
        <div className="bg-[#41151B]" style={{'backgroundColor': '#41151B'}}>
            <div className="  w-full min-h-screen" style={shadow}>
                <div className='pt-20 gap-10 flex flex-col px-14'>
                    
                {
                    allEvents.map((event,index) =>{
                        return(
                        
                        <MobileEvent title = {event.displayTitle} description={event.description} location = {event.location} startTime = {event.startTime} endTime={event.endTime}/>
                       
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default MobileSchedule
