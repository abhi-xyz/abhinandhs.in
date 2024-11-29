import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const cookies = req.headers.get("cookie") || "";
  const themeCookie = cookies
    .split("; ")
    .find((c) => c.startsWith("theme="))
    ?.split("=")[1];

  // Detect system preference from the browser's headers
  const prefersDark = req.headers.get("sec-ch-prefers-color-scheme") === "dark";

  // Determine the theme to apply
  const theme = themeCookie === "dark" || (!themeCookie && prefersDark)
    ? "dark"
    : "light";

  // Proceed with the request
  const resp = await ctx.next();

  // Inject the theme class into the HTML
  if (resp.headers.get("content-type")?.includes("text/html")) {
    const html = await resp.text();
    return new Response(
      html.replace("<html>", `<html class="${theme}">`),
      { headers: resp.headers },
    );
  }

  return resp;
}
