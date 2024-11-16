import { CSS, render } from "@deno/gfm";

const markdown = `
# Hello, world!

| Type | Value |
| ---- | ----- |
| x    | 42    |

\`\`\`js
console.log("Hello, world!");
\`\`\`
`;

const body = render(markdown, {
  baseUrl: "https://example.com",
});

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      main {
        max-width: 800px;
        margin: 0 auto;
      }
      ${CSS}
    </style>
  </head>
  <body>
    <main data-color-mode="light" data-light-theme="light" data-dark-theme="dark" class="markdown-body">
      ${body}
    </main>
  </body>
</html>
`;

