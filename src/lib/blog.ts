import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const contentDirectory = path.join(process.cwd(), 'content', 'blog');
const md = new MarkdownIt({ html: true });

export type BlogPost = {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
    [key: string]: any;
  };
  content: string;
};

export function getAllPosts(): BlogPost[] {
  // 获取content/blog目录下的所有.md文件
  const files = fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontMatter: data as BlogPost['frontMatter'],
      content
    };
  });
  
  // 按日期排序，最新的排在前面
  return posts.sort((a, b) => {
    return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontMatter: data as BlogPost['frontMatter'],
      content
    };
  } catch (error) {
    return null;
  }
}

export function renderMarkdown(markdown: string): string {
  return md.render(markdown);
} 