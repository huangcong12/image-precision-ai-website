
// 网站基础 URL
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { fileURLToPath } from 'url';

// ES modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEBSITE_URL = 'https://ai-img.litacat.com';

// 获取所有博客文章的 ID
function getAllPostIds() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map(fileName => {
    return {
      id: fileName.replace(/\.md$/, '')
    };
  });
}

// 生成 sitemap.xml
function generateSitemap() {
  const posts = getAllPostIds();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 主页 -->
  <url>
    <loc>${WEBSITE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- features -->
  <url>
    <loc>${WEBSITE_URL}/features</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- pricing -->
  <url>
    <loc>${WEBSITE_URL}/pricing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- 博客列表页 -->
  <url>
    <loc>${WEBSITE_URL}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- 博客文章页 -->
  ${posts.map(post => {
    // 获取文章的元数据
    const fullPath = path.join(process.cwd(), 'content/blog', `${post.id}.md`);
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      const date = matterResult.data.date || new Date().toISOString();
      return `
  <url>
    <loc>${WEBSITE_URL}/blog/${post.id}</loc>
    <lastmod>${new Date(date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    } catch (error) {
      console.error(`Error processing ${post.id}: ${error.message}`);
      return '';
    }

  }).join('')}
</urlset>`;

  // 写入 public 目录
  const publicDirectory = path.join(process.cwd(), 'public');
  
  // 确保 public 目录存在
  if (!fs.existsSync(publicDirectory)) {
    fs.mkdirSync(publicDirectory, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDirectory, 'sitemap.xml'), sitemap);
  console.log('Sitemap 已生成在 public/sitemap.xml');
}

// 执行生成
generateSitemap();
