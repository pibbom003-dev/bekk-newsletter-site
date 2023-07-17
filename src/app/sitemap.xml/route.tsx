import { SITE_URL } from '@/constants/url.constants';
import { Post } from '@/interfaces';

type GenerateSiteMapProps = {
  posts: Post[];
};

function generateSiteMap({ posts = [] }: GenerateSiteMapProps) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${SITE_URL}</loc>
     </url>
     <url>
       <loc>${SITE_URL}/termos-de-uso</loc>
     </url>
     <url>
       <loc>${SITE_URL}/politica-de-privacidade</loc>
     </url>

     ${posts
       .map(({ slug }) => {
         return `
           <url>
               <loc>${`${SITE_URL}/posts/${slug}`}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export function GET() {
  const posts: Post[] = [];
  const body = generateSiteMap({ posts });

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
