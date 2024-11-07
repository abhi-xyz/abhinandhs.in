import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Abhinandh S</title>
        <link
          rel="alternate"
          title="Abhinandh S"
          href="/rss"
          type="application/rss+xml"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
