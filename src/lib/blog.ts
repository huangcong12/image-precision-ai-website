import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

// Blog posts as static data - this will be used in production on Cloudflare
// This file will be populated at build time and imported as a static asset
import blogPostsJson from './blog-posts.json';

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

// Helper to determine if we're in a Node.js environment (build/dev) or in the browser (production)
const isNode = () => {
  return typeof process !== 'undefined' && 
         process.versions != null && 
         process.versions.node != null;
};

// This function will run in Node.js environment (during build or dev)
function getPostsFromFS(): BlogPost[] {
  try {
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
    
    // Sort by date, newest first
    return posts.sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts from filesystem:', error);
    return [];
  }
}

// This function will be used in both environments
export function getAllPosts(): BlogPost[] {
  // In Node.js environment (during development or build)
  if (isNode()) {
    return getPostsFromFS();
  }
  
  // In browser or Cloudflare Workers environment
  try {
    // Use the precompiled JSON data
    return (blogPostsJson as BlogPost[]);
  } catch (error) {
    console.error('Error loading blog posts from JSON:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  // In Node.js environment
  if (isNode()) {
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
  
  // In browser or Cloudflare Workers environment
  try {
    const post = (blogPostsJson as BlogPost[]).find(p => p.slug === slug);
    return post || null;
  } catch (error) {
    console.error('Error finding post by slug:', error);
    return null;
  }
}

export function renderMarkdown(markdown: string): string {
  return md.render(markdown);
}

// Function to generate the JSON file at build time
// This should be called during the build process
export function generateBlogPostsJson(): void {
  if (isNode()) {
    const posts = getPostsFromFS();
    const jsonPath = path.join(process.cwd(), 'public', 'blog-posts.json');
    
    try {
      // Create the JSON file
      fs.writeFileSync(jsonPath, JSON.stringify(posts, null, 2));
      console.log(`Generated blog-posts.json with ${posts.length} posts`);
    } catch (error) {
      console.error('Error generating blog-posts.json:', error);
    }
  }
} 