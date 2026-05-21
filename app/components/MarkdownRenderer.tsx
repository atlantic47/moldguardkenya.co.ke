import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import Image from 'next/image';

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
          },
          img: ({ node, ...props }) => {
            // Render markdown images using Next.js Image for automatic WebP/AVIF compression & high cache TTL
            return (
              <div 
                className="md-image-container" 
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '0', 
                  paddingBottom: '56.25%', // 16:9 Aspect Ratio
                  margin: '2.5rem 0',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.12)'
                }}
              >
                <Image
                  src={props.src!}
                  alt={props.alt || "MoldGuard Kenya mold remediation services"}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 850px"
                  loading="lazy"
                />
              </div>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

