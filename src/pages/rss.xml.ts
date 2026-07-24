import { getCollection } from 'astro:content';
import { SITE_URL } from '../data/social';
import { SITE } from '../data/site';

export async function GET() {
  const entries = await getCollection('blog');
  const posts = entries
    .map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      link: `${SITE_URL}/blog/${post.id}/`,
      pubDate: post.data.date,
      tags: post.data.tags,
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE.fullName} — Blog</title>
    <link>${SITE_URL}</link>
    <description>${SITE.description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/og-image.png</url>
      <title>${SITE.fullName} — Blog</title>
      <link>${SITE_URL}</link>
    </image>
    ${posts
      .map(
        (p) => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <description><![CDATA[${p.description}]]></description>
      <content:encoded><![CDATA[${p.description}]]></content:encoded>
      <link>${p.link}</link>
      <guid isPermaLink="true">${p.link}</guid>
      <pubDate>${p.pubDate.toUTCString()}</pubDate>
      ${p.tags.map((t) => `      <category>${t}</category>`).join('\n')}
    </item>`,
      )
      .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}