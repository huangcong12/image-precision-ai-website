# AI Product Image Enhancer - LC Official Website

This is the official website for the [AI Product Image Enhancer - LC](https://apps.shopify.com/image-precision-ai) Shopify app. The website is built with Next.js and Tailwind CSS, and deployed on Cloudflare Pages.

## Features

- Responsive design
- Markdown-based blog system for SEO
- Tailwind CSS with Typography plugin for rich text styling
- Next.js App Router architecture

## Quick Start

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Blog Publishing Guide

This website uses a file-system based Markdown blog. Adding new blog posts is simple:

1. Create a new `.md` file in the `content/blog` directory
2. The filename will become the URL of the blog post (e.g., `my-new-post.md` will become `/blog/my-new-post`)
3. Add frontmatter metadata at the top of the file in the following format:

```markdown
---
title: "Blog Post Title"
date: "2023-10-15"
description: "A short description of the blog post that will appear in blog lists"
tags: ["tag1", "tag2", "tag3"]
---

Your blog content here, in Markdown format...
```

### Required Frontmatter Fields

- `title`: The title of the blog post
- `date`: Publication date in "YYYY-MM-DD" format
- `description`: A short description that will appear in blog lists and preview cards

### Optional Frontmatter Fields

- `tags`: An array of tags for categorizing and filtering articles

## Deployment

The project is configured to deploy using Cloudflare Pages:

```bash
npm run deploy
```

## Project Structure

- `content/blog/` - All Markdown blog posts
- `src/app/` - Next.js app routes and pages
- `src/components/` - React components
- `src/lib/` - Utility functions and APIs

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Parse Markdown frontmatter
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser
- [date-fns](https://date-fns.org/) - Date utility library
