import React from 'react';

const convertRichTextToPlainText = (json) => {
  // Parse the JSON string into an object
  // Function to process each node recursively
  const processNode = (node) => {
    // Check if the node is a text node and process accordingly
    if (node.nodeType === 'text') {
      // Check if text is bold
      const isBold = node.marks.some((mark) => mark.type === 'bold');
      // Return text wrapped in asterisks if bold, otherwise return as is
      return isBold ? `*${node.value}*` : node.value;
    }

    // If it's a paragraph or document, concatenate their content
    if (node.nodeType === 'paragraph' || node.nodeType === 'document') {
      return node.content.map(processNode).join('');
    }

    // If it's not a text or paragraph node, return an empty string
    return '';
  };
  // Start processing from the root node
  return processNode(json);
};

const EventButton = (props) => {
  const plainDescription = convertRichTextToPlainText(props.description);

  const handleAdd = (e) => {
    e.preventDefault();

    const formattedStartDate = props.date.replace(/-/g, '') + 'T080000';
    const formattedEndDate = props.date.replace(/-/g, '') + 'T120000';
    const location = 'Carleton University';
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      props.title
    )}&dates=${formattedStartDate}/${formattedEndDate}&details=${encodeURIComponent(
      plainDescription
    )}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
    window.open(url, '_blank');
  };

  return (
    <button
      className={`text-black rounded-full px-6 py-2 text-center shadow-dark-bottom-left text-sm flex justify-center items-center cursor-pointer bg-darkGrey hover:bg-[#9E7979] hover:shadow-sm active:bg-[#631919] active:Shadow-none active:text-darkGrey active:duration-75 active:ease-linear transition-all ease-in duration-200`}
      onClick={(e) => handleAdd(e)}
      aria-label={`add ${props.title} to calendar`}
    >
      Add To Calendar
    </button>
  );
};

export default EventButton;
