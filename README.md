# 🛍️ Atelier Fashion - Luxury E-Commerce

![App Preview](https://imgix.cosmicjs.com/67639120-d151-11f0-b20e-1d251587b0cd-photo-1483985988355-763728e1935b-1764880799711.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated luxury fashion e-commerce platform built with Next.js 16 and powered by Cosmic CMS. Features elegant product displays, smart categorization, and comprehensive order management.

## ✨ Features

- 🎨 Modern, upscale design with refined aesthetics
- 📱 Fully responsive across all devices
- 🛍️ Product showcase with multiple images and variants
- 🏷️ Category-based navigation and filtering
- 📦 Order management and tracking system
- 🔍 Advanced product filtering (category, stock, price)
- ⚡ Server-side rendering for optimal performance
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for beautiful, maintainable styling

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6931f1233584465d0a2f7b58&clone_repository=6931f2743584465d0a2f7b82)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create an upscale fashion ecommerce website with products, categories, orders"

### Code Generation Prompt

> Based on the content model I created for "Create an upscale fashion ecommerce website with products, categories, orders", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official Cosmic JavaScript SDK

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Products with Category Data

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all products with related category data
const response = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include related category objects

const products = response.objects
```

### Filtering Products by Category

```typescript
// Get products in a specific category
const response = await cosmic.objects
  .find({ 
    type: 'products',
    'metadata.category': categoryId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Orders with Details

```typescript
// Get all orders with full details
const response = await cosmic.objects
  .find({ type: 'orders' })
  .props(['id', 'title', 'slug', 'metadata'])

const orders = response.objects
```

## 🎨 Cosmic CMS Integration

This application uses three main object types:

### Products
- Product name, description, and pricing
- Multiple product images (files metafield)
- Available sizes and colors (checkboxes)
- Category relationship (object metafield)
- Stock status (switch metafield)

### Categories
- Category name and description
- Featured category image
- Automatically linked to products

### Orders
- Customer information (name, email, phone)
- Shipping address
- Order items with quantities and variants
- Order total and status tracking
- Order date

All content is managed through your Cosmic dashboard and dynamically rendered in the application.

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables

Make sure to set these in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

<!-- README_END -->