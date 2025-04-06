import CodeSnippetBox from "@/app/_components/codeSnippetBox";
import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: "blue", fontSize: "28px" }}>{children}</h1>
    ),
    pre: ({ children }) => {
      const codeString = React.Children.toArray(children)[0] as string;
      const languageMatch = codeString?.match?.(/language-(\w+)/); // Extract language from className
      const language = languageMatch ? languageMatch[1] : undefined;
      return <CodeSnippetBox language={language}>{codeString}</CodeSnippetBox>;
    },
    ...components,
  };
}
