lint:
  deno lint
  deno fmt

deploy:
  deno lint
  deno fmt
  git add -A
  git commit -m "redesign"
  git push

deno-update-fresh:
  deno run -A -r https://fresh.deno.dev/update
