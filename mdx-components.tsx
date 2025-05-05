import CodeSnippetBox from '@/app/_components/codeSnippetBox';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import React from 'react';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings (h1 - h6)
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-primary mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium text-gray-700 mt-4 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-gray-600 mt-3 mb-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base font-medium text-gray-500 mt-2 mb-1">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm font-medium text-gray-400 mt-2 mb-1">{children}</h6>
    ),

    // Paragraph
    p: ({ children }) => (
      <p className="text-base text-description leading-relaxed mb-4">{children}</p>
    ),

    // Inline code
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm">
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
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-gray-700">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Image (using Next.js Image)
    img: ({ src, alt, title }) => (
      <div className="relative w-full h-64 my-4">
        <Image
          src={src || '/images/default.jpg'} // Fallback image
          alt={alt || 'Image'}
          title={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ),

    // Table
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border-collapse border border-gray-300">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-100">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-gray-300">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 font-semibold text-gray-800 border border-gray-300">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-gray-700 border border-gray-300">
        {children}
      </td>
    ),

    // Horizontal Rule
    hr: () => <hr className="my-6 border-gray-300" />,

    // Strong (bold)
    strong: ({ children }) => (
      <strong className="font-bold text-gray-800">{children}</strong>
    ),

    // Emphasis (italic)
    em: ({ children }) => (
      <em className="italic text-gray-700">{children}</em>
    ),

    // Deleted text
    del: ({ children }) => (
      <del className="line-through text-gray-500">{children}</del>
    ),

    // Merge with any additional components passed in
    ...components,
  };
}