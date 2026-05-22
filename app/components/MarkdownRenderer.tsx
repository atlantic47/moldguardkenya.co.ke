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
          // Intercept and style headings dynamically to maintain strict H1 SEO structure
          h1: ({ node, ...props }) => (
            <h2 
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                fontWeight: 800,
                color: 'var(--primary-dark)',
                lineHeight: 1.25,
                margin: '4rem 0 1.75rem',
                textAlign: 'center',
                width: '100%',
                display: 'block'
              }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => <h3 {...props} />,
          h3: ({ node, ...props }) => <h4 {...props} />,
          h4: ({ node, ...props }) => <h5 {...props} />,
          
          // Intercept links: support internal router navigation, external secure links, and YouTube video embeds
          a: ({ node, ...props }) => {
            const href = props.href || '';
            const isInternal = href.startsWith('/') || href.startsWith('#');
            
            // Auto-detect YouTube links and replace them with responsive video embeds
            const isYoutube = href.includes('youtube.com/watch') || href.includes('youtu.be/');
            if (isYoutube) {
              let videoId = '';
              if (href.includes('youtube.com/watch')) {
                videoId = href.split('v=')[1]?.split('&')[0] || '';
              } else if (href.includes('youtu.be/')) {
                videoId = href.split('youtu.be/')[1]?.split('?')[0] || '';
              }
              
              if (videoId) {
                return (
                  <span 
                    className="md-video-wrapper"
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '100%',
                      height: '0',
                      paddingBottom: '56.25%', // 16:9 ratio
                      margin: '2.5rem 0',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      boxShadow: '0 12px 36px rgba(45,80,22,0.15)',
                      border: '4px solid var(--white)'
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="MoldGuard Kenya Professional Mold Removal and Treatment"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </span>
                );
              }
            }
            
            if (isInternal) {
              return <Link href={href} {...props}>{props.children}</Link>;
            }
            return <a target="_blank" rel="noopener noreferrer" {...props}>{props.children}</a>;
          },

          // Wrap tables in horizontal overflow scroll boxes to completely eliminate mobile screen overflow
          table: ({ node, ...props }) => (
            <div 
              className="md-table-responsive"
              style={{ 
                overflowX: 'auto', 
                width: '100%', 
                margin: '2.5rem 0', 
                borderRadius: '1rem', 
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)', 
                border: '1px solid var(--border)',
                WebkitOverflowScrolling: 'touch' // smooth inertial scrolling on iOS
              }}
            >
              <table 
                style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse', 
                  margin: 0, 
                  fontSize: '0.95rem',
                  minWidth: '600px' // Ensures standard columns maintain readable spacing
                }} 
                {...props} 
              />
            </div>
          ),

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
                  src={typeof props.src === 'string' ? props.src : ''}
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
