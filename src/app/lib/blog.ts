import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
  };
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDirectory);
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        frontMatter: {
          title: data.title,
          date: data.date,
          description: data.description,
          tags: data.tags
        },
        content
      };
    })
    .sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontMatter: {
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags
      },
      content
    };
  } catch (error) {
    return null;
  }
}

export async function renderMarkdown(markdown: string): Promise<string> {
  const result = await remark()
    .use(html)
    .process(markdown);
  
  return result.toString();
}