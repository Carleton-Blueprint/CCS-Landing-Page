import React from "react";

const RichText = ({ content }) => {
    console.log(content)
    const renderNode = (node) => {
      switch (node.nodeType) {
        case 'paragraph':
          return (
            <p className="mb-4">
              {node.content.map(renderNode)}
            </p>
          );
        case 'text':
          return renderText(node);
        case 'hyperlink':
          return (
            <a className= 'underline' href={node.data.uri}>
              {node.content.map(renderNode)}
            </a>
          );
        case 'unordered-list':
          return (
            <ul className='ml-6 md:ml-10 mt-2 list-disc '>
              {node.content.map(renderNode)}
            </ul>
          );
        case 'list-item':
          return (
            <li className=''>
              {node.content.map(renderNode)}
            </li>
          );
        default:
          return null;
      }
    };
  
    const renderText = (textNode) => {
      const { value, marks } = textNode;
      if (marks && marks.some(mark => mark.type === 'bold')) {
        return <span className=" font-medium">{value}</span>;
      } else {
        return value;
      }
    };
  
    return <div>{content.map(renderNode)}</div>;
  };

export default RichText