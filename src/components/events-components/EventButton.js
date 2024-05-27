import React from 'react'
import { useState } from 'react'

const convertRichTextToPlainText = (json) => {
    // Parse the JSON string into an object
    // Function to process each node recursively
    const processNode = (node) => {
        // Check if the node is a text node and process accordingly
        if (node.nodeType === 'text') {
            // Check if text is bold
            const isBold = node.marks.some(mark => mark.type === 'bold');
            // Return text wrapped in asterisks if bold, otherwise return as is
            return isBold ? `*${node.value}*` : node.value;
        }

        // If it's a paragraph or document, concatenate their content
        if (node.nodeType === 'paragraph' || node.nodeType === 'document') {
            return node.content.map(processNode).join('');
        }

        // If it's not a text or paragraph node, return an empty string
        return '';
    }
    // Start processing from the root node
    return processNode(json);
}

const EventButton = (props) => {
    const [addedToCalendar, setAddedToCalendar] = useState(false)
    const plainDescription = convertRichTextToPlainText(props.description)
    
    const getCss = (added) =>{
        if (added){
            return ' bg-[#631919] text-white transition-all ease-out duration-100 '
        }
        return ' bg-[#D9D9D9] text-black transition-all ease-out duration-100'
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        if (!addedToCalendar)
        { 
        
            const formattedStartDate = props.date.replace(/-/g, '')+"T080000";
            const formattedEndDate = props.date.replace(/-/g, '')+"T120000";
            const location = "Carleton University"
            const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(props.title)}&dates=${formattedStartDate}/${formattedEndDate}&details=${encodeURIComponent(plainDescription)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
            window.open(url, '_blank');
      
            
        }
        

        setAddedToCalendar(!addedToCalendar)
    }

    return (
    <div className={` rounded-full h-[30px] w-[150px] text-center shadow-dark-bottom-left ${getCss(addedToCalendar)} text-sm flex justify-center items-center cursor-pointer`}
        onClick={(e) => handleAdd(e)}
    >
        {addedToCalendar ? "Added To Calendar" : "Add To Calendar"}
    </div>
    )
}

export default EventButton
