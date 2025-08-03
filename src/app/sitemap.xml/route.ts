import { NextRequest, NextResponse } from 'next/server';
import { languages } from '@/config/languages';
import { BlogService } from '@/services/blog-service';
import { propertyApi } from '@/services/api';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://realitypuchyr.cz';

const staticPaths = [
  '', // homepage
  'list',
  'blog',
  'faq',
  'contact',
  'services',
  'spain',
  'neighborhood-explorer',
  'privacy',
  'terms',
  'explore',
  'reviews',
  'developer-projects',
  'developer-projects/czech-republic',
  'developer-projects/czech-republic/apartments',
  'developer-projects/czech-republic/houses',
  'developer-projects/czech-republic/residential-complexes',
  'developer-projects/czech-republic/villas',
  'developer-projects/spain',
  'developer-projects/spain/apartments',
  'developer-projects/spain/houses',
  'developer-projects/spain/residential-complexes',
  'developer-projects/spain/villas',
  'developer-projects/spain/penthouses',
  'developer-projects/spain/golf-properties',
  'developer-projects/spain/hotel-services',
  'developer-projects/spain/smart-homes',
];

export async function GET(req: NextRequest) {
  let urls: string[] = [];

  for (const lang of languages) {
    // Static pages
    for (const path of staticPaths) {
      urls.push(`${BASE_URL}/${lang.code}${path ? '/' + path : ''}`);
    }

    // Blog posts
    try {
      const blogService = new BlogService(lang.code);
      const blogs = await blogService.getAllBlogs(1, 1000, 1, 1000); // get all blogs
      for (const blog of blogs) {
        urls.push(`${BASE_URL}/${lang.code}/blog/${blog.slug}`);
      }
    } catch (e) {
      // ignore blog errors
    }

    // Property detail pages
    try {
      const propertiesResp = await propertyApi.getAll(1, 1000, '', 'ACTIVE');
      for (const property of propertiesResp.properties) {
        urls.push(`${BASE_URL}/${lang.code}/property-detail/${property.id}`);
      }
    } catch (e) {
      // ignore property errors
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `<url><loc>${url}</loc></url>`
    )
    .join('\n')}\n</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 