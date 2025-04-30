import ReactMarkdown from 'react-markdown';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
import { allBlogPosts } from './blog-data'; // 导入捆绑的数据

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
  // 直接返回导入的数据
  // 注意：allBlogPosts 已经是排序好的
  return allBlogPosts;
}

// 根据 slug 获取单个博客文章
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // 在导入的数据中查找
  const post = allBlogPosts.find(post => post.slug === slug);
  return post || null;
}

// 渲染 Markdown 内容
export function renderMarkdown(markdown: string): string {
  return markdown;
} 