import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Root of the project where markdown files are stored
const contentDirectory = path.join(process.cwd(), '');
const seoContentDirectory = path.join(process.cwd(), 'seo_content');

export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
}

export function getRawMarkdownFile(filename: string): MarkdownContent {
  const fullPath = path.join(contentDirectory, filename);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { content, data };
  } catch (error) {
    console.error(`Error reading markdown file ${filename}:`, error);
    return { content: `# File Not Found\n\nCould not find ${filename}`, data: {} };
  }
}

export function getSeoMarkdownFile(category: string, slug: string): MarkdownContent {
  const fullPath = path.join(seoContentDirectory, category, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { content, data };
  } catch (error) {
    console.error(`Error reading SEO markdown file ${category}/${slug}:`, error);
    return { content: `# Post Not Found\n\nCould not find ${slug} in ${category}`, data: {} };
  }
}

export function getAllSeoSlugs(category: string): string[] {
  const dirPath = path.join(seoContentDirectory, category);
  try {
    const fileNames = fs.readdirSync(dirPath);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error(`Error reading slugs from ${category}:`, error);
    return [];
  }
}

export function getAllSeoMetadata(category: string): { slug: string; data: any }[] {
  const slugs = getAllSeoSlugs(category);
  return slugs.map((slug) => {
    const { data } = getSeoMarkdownFile(category, slug);
    return { slug, data };
  });
}
