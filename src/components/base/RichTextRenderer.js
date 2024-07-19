import React from "react";

const RichText = ({ content, fontSizeUtilityClass }) => {
     

    const renderNode = (node) => {
      switch (node.nodeType) {
        case 'paragraph':
          return (
            <p className={`${fontSizeUtilityClass || 'text-base'} text-[--lightergray]`}>
              {node.content.map(renderNode)}
            </p>
          );
        case 'text':
          return renderText(node);
        default:
          return null;
      }
    };
  
    const renderText = (textNode) => {
      const { value, marks } = textNode;
      if (marks && marks.some(mark => mark.type === 'bold')) {
        return <span className=" font-bold">{value}</span>;
      } else {
        return value;
      }
    };
  
    return <div>{content.map(renderNode)}</div>;
  };

export default RichText