import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDirectory = path.join(process.cwd(), 'src/mdx-content');
const outputPath = path.join(process.cwd(), 'public/blog-data.json');

interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description: string;
    tags?: string[];
  };
  content: string;
}

function generateBlogContent() {
  try {
    // 读取所有 MDX 文件
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
    
    // 按日期排序
    const sortedPosts = posts.sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
    
    // 将内容写入 JSON 文件
    fs.writeFileSync(outputPath, JSON.stringify(sortedPosts, null, 2));
    console.log('博客内容已生成到:', outputPath);
  } catch (error) {
    console.error('生成博客内容失败:', error);
    process.exit(1);
  }
}

generateBlogContent(); 