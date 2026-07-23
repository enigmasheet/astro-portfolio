import { SITE_URL } from '../data/social';
import { SITE } from '../data/site';
import { BLOG_POSTS } from '../data/blog';

const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';

const posts = BLOG_POSTS.map((post) => ({
  title: post.title,
  description: post.summary,
  link: `${SITE_URL}/blog/${post.slug}`,
  pubDate: new Date(post.date),
})).sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE.name} — Blog</title>
    <link>${SITE_URL}</link>
    <description>${SITE.title}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (p) => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <description><![CDATA[${p.description}]]></description>
      <link>${p.link}</link>
      <guid isPermaLink="true">${p.link}</guid>
      <pubDate>${p.pubDate.toUTCString()}</pubDate>
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

export const GET = () =>
  new Response(rss, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
