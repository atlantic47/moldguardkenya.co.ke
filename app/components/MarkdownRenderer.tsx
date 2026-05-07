import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <article className={`md-content${className ? ` ${className}` : ''}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => {
            const isInternal = props.href?.startsWith('/') || props.href?.startsWith('#');
            if (isInternal) {
              return <Link href={props.href!} {...props}>{props.children}</Link>;
            }
            return <a target="_blank" rel="noopener noreferrer" {...props}>{props.children}</a>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

