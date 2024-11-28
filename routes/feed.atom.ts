import type { Handlers } from "$fresh/server.ts";
import { listPosts } from "../utils/just_posts.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    // fetched posts
    const posts = await listPosts();

    const items = posts
      .map((post) => `
        <entry>
          <title><![CDATA[${post.title}]]></title>
           <link href="https://abhinandhs.in/articles/${post.id}" />
            <id>https://abhinandhs.in/articles/${post.id}</id>
             <updated>${new Date(post.updatedAt).toUTCString()}</updated>
              <summary>${post.snippet}</summary>
          <pubDate>${new Date(post.publishAt).toUTCString()}</pubDate>
        </entry>
      `)
      .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
        <feed xmlns="http://www.w3.org/2005/Atom">
          <title>Abhi's Blog</title>
          <link href="https://abhinandhs.in"/>
          <updated>${new Date().toISOString()}</updated>
          <author>
          <name>Abhinandh S</name>
          </author>
          <id>https://abhinandhs.in</id>

          ${items}

      </feed>`;

    return new Response(rss, {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    });
  },
};
