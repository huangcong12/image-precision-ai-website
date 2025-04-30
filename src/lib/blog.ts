import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 博客文章类型定义
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

// 获取所有博客文章
export async function getAllPosts(): Promise<BlogPost[]> {
  if (process.env.NODE_ENV === 'development') {
    // 开发环境：直接从文件系统读取
    const contentDirectory = path.join(process.cwd(), 'src/mdx-content');
    const files = fs.readdirSync(contentDirectory);
    const posts = files
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const slug = file.replace(/\.mdx$/, '');
        const fullPath = path.join(contentDirectory, file);
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
      });
    
    return posts.sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
  } else {
    // 生产环境：从 JSON 文件加载
    try {
      const response = await fetch('/blog-data.json');
      const blogData: BlogPost[] = await response.json();
      return blogData;
    } catch (error) {
      console.error('Failed to load blog data:', error);
      return [];
    }
  }
}

// 根据 slug 获取单个博客文章
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

// 渲染 Markdown 内容
export function renderMarkdown(markdown: string): string {
  return markdown;
} 