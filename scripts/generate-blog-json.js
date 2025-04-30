const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Paths
const contentDirectory = path.join(process.cwd(), 'content', 'blog');
const outputDirectory = path.join(process.cwd(), 'public');
const outputPath = path.join(outputDirectory, 'blog-posts.json');
// Also create a path for the src/lib directory
const libOutputPath = path.join(process.cwd(), 'src', 'lib', 'blog-posts.json');

// Ensure output directories exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Create src/lib if it doesn't exist
const libDir = path.join(process.cwd(), 'src', 'lib');
if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir, { recursive: true });
}

function getAllPosts() {
  try {
    // Check if the content directory exists
    if (!fs.existsSync(contentDirectory)) {
      console.warn(`Warning: Content directory ${contentDirectory} does not exist. Creating an empty one.`);
      fs.mkdirSync(contentDirectory, { recursive: true });
      return [];
    }

    // Get all markdown files
    const files = fs.readdirSync(contentDirectory).filter(file => file.endsWith('.md'));
    
    if (files.length === 0) {
      console.warn('Warning: No markdown files found in content directory.');
    }
    
    const posts = files.map(file => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        frontMatter: data,
        content
      };
    });
    
    // Sort by date, newest first
    return posts.sort((a, b) => {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

function generateBlogJson() {
  const posts = getAllPosts();
  
  try {
    // Write to public directory for client-side access
    fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
    
    // Also write to src/lib for build-time import
    fs.writeFileSync(libOutputPath, JSON.stringify(posts, null, 2));
    
    console.log(`✅ Generated blog-posts.json with ${posts.length} posts`);
  } catch (error) {
    console.error('Error writing blog-posts.json:', error);
    process.exit(1);
  }
}

// Execute
generateBlogJson(); 