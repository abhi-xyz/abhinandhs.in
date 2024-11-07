import { Handlers } from "$fresh/server.ts";
import { getArticles } from "../islands/GetArticles.tsx";
// make sure this function is async and returns a promise

export const handler: Handlers = {
  // Properly handle the GET request and await asynchronous operations
  async GET(req) {
    // Wait for the asynchronous getArticles function to resolve
    const articles = await getArticles();

    // Create the RSS XML structure
    const rssXml = `
      <?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
          <title>Your Site's Name</title>
          <link>https://abhinandhs.in</link>
          <description>Latest articles from the website</description>
          <language>en-us</language>
          ${
      articles
        .map(
          (article) => `
            <item>
              <title>${article.title}</title>
              <link>https://abhinandhs.in/articles/${article.slug}</link>
              <description>${article.description}</description>
              <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
            </item>`,
        )
        .join("")
    }
        </channel>
      </rss>
    `;

    // Return the RSS XML as the response
    return new Response(rssXml, {
      headers: {
        "Content-Type": "application/rss+xml",
      },
    });
  },
};

// Optional: Add a head tag with RSS feed link
export function Head() {
  return (
    <>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed"
        href="/rss"
      />
    </>
  );
}
