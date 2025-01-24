import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdownner = ({ markdownText }:{markdownText: string}) => {
  return (
    <ReactMarkdown
      components={{
        // Customizing headings
        h1: ({ node, ...props }) => <h1 className="text-4xl text-green-500 font-bold my-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-3xl text-blue-600 font-semibold my-3" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-2xl text-orange-600 font-medium my-2" {...props} />,
        // You can customize more elements here
        p: ({ node, ...props }) => <p className=" text-rose-500 my-2" {...props} />,
        a: ({ node, ...props }) => <a className="text-blue-600 underline" {...props} />,
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
};

export default Markdownner;
