import React from 'react';

// Props for the CodeSnippetBox component
interface CodeSnippetBoxProps {
  children: React.ReactNode; // The code content
  language?: string;         // Optional language label (e.g., "typescript", "bash")
}

export default function CodeSnippetBox({ children, language }: CodeSnippetBoxProps) {
  return (
    <div
      style={{
        backgroundColor: '#1e1e1e', // Dark background like Grok
        border: '1px solid #444',   // Subtle border
        borderRadius: '8px',        // Rounded corners
        padding: '1rem',            // Inner spacing
        margin: '1rem 0',           // Outer spacing
        overflowX: 'auto',          // Horizontal scroll for long lines0
        fontFamily: 'monospace',    // Monospaced font
        color: '#d4d4d4',           // Light text color
        position: 'relative',       // For language label positioning
      }}
    >
      {language && (
        <span
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            fontSize: '0.8rem',
            color: '#888',
            textTransform: 'uppercase',
          }}
        >
          {language}
        </span>
      )}
      <pre
        style={{
          margin: 0,
          whiteSpace: 'pre-wrap',  // Preserve whitespace and wrap lines
          wordBreak: 'break-all',  // Break long words
        }}
      >
        {children}
      </pre>
    </div>
  );
}