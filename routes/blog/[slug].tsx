import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "@deno/gfm";
import { join } from "$std/path/mod.ts";
import Navbar from "../../islands/Header.tsx";
import Footer from "../../components/Footer.tsx";

// Add support for TypeScript, Bash, and Rust.
import "npm:prismjs@1.29.0/components/prism-typescript.js";
import "npm:prismjs@1.29.0/components/prism-bash.js";
import "npm:prismjs@1.29.0/components/prism-rust.js";
import "npm:prismjs@1.29.0/components/prism-nix.js";

// for extracting yaml from markdown 
// import { test, extractYaml } from "jsr:@std/front-matter";


// Define the structure of a post
interface Post {
  title: string;
  publishedAt: string;
  content: string;
}

// Handler to fetch the Markdown file based on the slug
export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const { slug } = ctx.params; // Extract slug from the route
    try {
      const filePath = join("./posts", `${slug}.md`);
      const markdown = await Deno.readTextFile(filePath);

      // Render the Markdown content to HTML
      const htmlContent = render(markdown);

      // Extract title and published date from the file content
      const lines = markdown.split("\n");
      const title = lines[0].replace("# ", ""); // Assume first line is the title
      const publishedAt = lines[1].replace("Published: ", ""); // Second line has the date

      const post: Post = {
        title,
        publishedAt,
        content: htmlContent,
      };

      return ctx.render(post);
    } catch (_error) {
      return new Response("Post not found", { status: 404 });
    }
  },
};

// Render the post as HTML
export default function BlogPostPage({ data }: PageProps<Post>) {
  return (
    <body className="bg-latte-crust dark:bg-mocha-crust text-latte-text dark:text-mocha-text">
    <Navbar />
    <main class="max-w-3xl mx-auto px-4 py-8">
      { /* <h1 class="text-3xl font-bold">{data.title}</h1>
      <time class="text-gray-500">{data.publishedAt}</time> */ }
      <style>
        {CSS}
      </style>
      <article
        data-color-mode="light"
        data-light-theme="light"
        data-dark-theme="dark"
        class="markdown-body mt-4"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </main>
    <Footer />
    </body>
  );
}
