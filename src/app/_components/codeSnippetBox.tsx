'use client';
import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

// Props for the CodeSnippetBox component
interface CodeSnippetBoxProps {
  children: React.ReactNode; // The code content
  language?: string;         // Optional language label (e.g., "typescript", "bash")
}

export default function CodeSnippetBox({ children, language }: CodeSnippetBoxProps) {
  const code = String(children).trim();
  const lang = (language || 'tsx') as string;

  // Copy to clipboard handler
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden border border-gray-700 bg-gradient-to-br from-[#232526] to-[#414345] shadow-lg">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 px-2 py-1 text-xs font-semibold bg-gray-800 text-gray-200 rounded hover:bg-blue-600 hover:text-white transition-colors duration-200 shadow"
        title="Copy code"
      >
        Copy
      </button>
      {language && (
        <span className="absolute top-2 left-3 text-xs uppercase tracking-wider text-blue-400 font-bold bg-gray-900 bg-opacity-70 px-2 py-0.5 rounded shadow">
          {language}
        </span>
      )}
      <Highlight code={code} language={lang} theme={themes.vsDark}>
        {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
          <pre
            className={
              className +
              ' text-sm md:text-base p-4 pt-8 pb-4 overflow-x-auto leading-relaxed font-mono bg-transparent'
            }
            style={style}
          >
            {tokens.map((line: any, i: number) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token: any, key: number) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}