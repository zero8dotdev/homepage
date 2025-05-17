// Updated list handling in useMDXComponents
import CodeSnippetBox from '@/app/_components/codeSnippetBox';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import React from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings (h1 - h6)
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-white mt-6 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-white mt-4 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-white mt-3 mb-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-bold text-white mt-2 mb-1">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-bold text-white mt-2 mb-1">{children}</h6>
    ),

    // Paragraph
    p: ({ children }) => (
      <p className="text-base font-normal text-gray-400 leading-relaxed mb-4">{children}</p>
    ),

    // Inline code
    code: ({ children }) => (
      <code className="bg-gradient-to-r from-gray-200 to-gray-100 text-green-400 px-2 py-1 rounded font-mono text-base shadow-sm border-purple-200">
        {children}
      </code>
    ),

    // Code block (pre)
    pre: (props) => {
      const child = React.Children.only(props.children) as React.ReactElement<{
        children: any;
        className?: string;
      }>;
      const codeContent = child.props.children;
      const languageMatch = child.props.className?.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : undefined;
      return <CodeSnippetBox language={language}>{codeContent}</CodeSnippetBox>;
    },

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-400 pl-6 italic text-blue-700 bg-blue-50 my-6 py-2 rounded-r-lg shadow-md">
        {children}
      </blockquote>
    ),

    // Lists - with properly handled nesting
    ul: ({ children }) => {
      return <ul className="blog-ul mb-6 pl-0">{children}</ul>;
    },
    
    ol: ({ children }) => {
      return <ol className="blog-ol mb-6 pl-0">{children}</ol>;
    },
    
    li: ({ children }) => {
      return (
        <li className="blog-li pl-6 relative mb-2 text-gray-400">
          {children}
        </li>
      );
    },

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600-600 font-semibold underline underline-offset-4 hover:text-pink-800 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Image (using Next.js Image)
    img: ({ src, alt, title }) => (
      <div className="relative w-full h-72 my-6 rounded-xl overflow-hidden shadow-lg border-2 border-purple-200">
        <Image
          src={src || '/images/default.jpg'}
          alt={alt || 'Image'}
          title={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),

    // Table
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 rounded-lg shadow border border-gray-300">
        <table className="min-w-full border-collapse bg-white">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gradient-to-r from-purple-100 to-blue-100">
        {children}
      </thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children, ...props }) => (
      <tr className="border-b border-gray-200 even:bg-blue-50 hover:bg-blue-100 transition-colors duration-150" {...props}>
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 font-bold text-purple-700 border border-gray-200 text-left bg-purple-50">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-3 text-gray-200 border border-gray-200">
        {children}
      </td>
    ),

    // Other components remain the same
    hr: () => <hr className="my-8 border-t-2 border-purple-200" />,
    strong: ({ children }) => (
      <strong className="font-extrabold text-purple-800 bg-purple-100 px-1 rounded">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-pink-700 bg-pink-50 px-1 rounded">
        {children}
      </em>
    ),
    del: ({ children }) => (
      <del className="line-through text-gray-500">{children}</del>
    ),

    // Merge with any additional components passed in
    ...components,
  };
}