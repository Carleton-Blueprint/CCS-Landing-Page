import React from 'react'
import RichText from '../base/RichTextRenderer'
import EventButton from './EventButton';

const countCharactersOfContentfulRichTextNode = (contentfulRichTextNode) => {
    let characterCount = 0;

    const paragraphs = contentfulRichTextNode.filter(item => item.nodeType === "paragraph") 
    
    for (let paragraph of paragraphs){
      characterCount += paragraph.content.reduce((total, item) => total + (item.value ? item.value.length : 0), 0);
    }
    
    return characterCount
}



const convertDateToJson = (dateString) => {

    // Check if the input is correctly formatted
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      throw new Error('Invalid date format. Please use YYYY-MM-DD.');
    }
    // Split the dateString into parts
    const parts = dateString.split('-');
    // Create the JSON object
    const dateJson = {
      year: parseInt(parts[0], 10),  // Convert string to integer
      month: parseInt(parts[1], 10),
      day: parseInt(parts[2], 10)
    };
    return dateJson;
  }

const EventBlock = (props) => {
    const description = JSON.parse(props.event.description.raw)
    const date = convertDateToJson(props.event.startDate)

    const monthShortened = (monthInt) => {
        switch(monthInt) {
            case 1:
                return 'Jan';
            case 2:
                return 'Feb';
            case 3:
                return 'Mar';
            case 4:
                return 'Apr';
            case 5:
                return 'May';
            case 6:
                return 'Jun';
            case 7:
                return 'Jul';
            case 8:
                return 'Aug';
            case 9:
                return 'Sept';
            case 10:
                return 'Oct';
            case 11:
                return 'Nov';
            case 12:
                return 'Dec';
            default:
                console.log('Invalid month. Please enter a number between 1 and 12.');
                return 'NA_'
        }
    };
    
    const getSize = () =>{
        return countCharactersOfContentfulRichTextNode(description.content) > 250 ? 'text-sm' : 'text-base'        
    }

    const monthName = monthShortened(date.month);
    
    const dayNumber = date.day
    
    const title = props.event.displayTitle
    

    return (
    <div className=' w-[360px] h-[360px] bg-gradient-to-br from-[#BB161D] to-black to-90% rounded-[56px] shadow-dark-bottom-left flex flex-col p-6'>
        <div className=' flex'>
        <div className=' font-poppins'>
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg" className=' shadow-dark-bottom rounded-full'>
                <circle cx="37" cy="37" r="37" fill="black" fillOpacity="0.4"/>
                <text x="50%" y="42" textAnchor="middle" fill="white" className=" text-4xl">
                    {dayNumber}
                </text>
                <text x="50%" y="62" textAnchor="middle" fill="white" className=" text-sm">
                    {monthName}
                </text>
                </svg>
            </div>
            <div className={`flex items-center pl-5 ${title.length > 25 ? 'text-lg' : 'text-2xl'} max-h-[74px] text-[#D9D9D9]`}>
                {title}
            </div>  
        </div>
        <div className = ' h-[1px] bg-[#C1C1C1] mt-5 mb-5 w-full rounded-full'></div>
        <div className=' h-[170px]'>
            <RichText content={description.content} fontSizeUtilityClass={getSize()}/>
        </div>
        <div className=' flex justify-center items-center'>
            <EventButton description = {description} title = {title} date = {props.event.startDate} />
        </div>
    </div>
    )
}

export default EventBlock
