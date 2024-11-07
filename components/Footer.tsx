export default function Footer() {
  return (
    <>
      <footer class="text-center clear-both">
        <div>
          <br />
          <br />
          <div class="flex justify-center">
            <a
              class="p-2"
              href="https://github.com/abhi-xyz/"
              target="_blank"
            >
              <img
                src="/icons/feather/github.svg"
                style="max-height:1.5em"
                alt="GitHub"
                title="Subscribe via RSS for updates."
              />
            </a>
            <a class="p-2" href="mailto:abhinandhsuby@proton.me">
              <img
                src="/icons/feather/mail.svg"
                target="_blank"
                style="max-height:1.5em"
                alt="Email"
                title="Subscribe via RSS for updates."
              />
            </a>
            <a class="p-2" href="/index.xml" target="_blank">
              <img
                src="/icons/feather/rss.svg"
                style="max-height:1.5em"
                alt="RSS Feed"
                title="Subscribe via RSS for updates."
              />
            </a>
            <a class="p-2" href="https://x.com/Ungraduate_Abhi" target="_blank">
              <img
                src="/icons/feather/twitter.svg"
                style="max-height:1.5em"
                alt="Twitter"
                title="Subscribe via RSS for updates."
              />
            </a>
          </div>
          <p class="p-3">
            This site is built with the Fresh framework on Deno. The website’s
            source code is licensed under the{" "}
            <a
              class="font-semibold text-vibez-red"
              href="https://opensource.org/license/mit"
            >
              MIT License
            </a>{" "}
            and is available{" "}
            <a href="https://github.com/abhi-xyz/abhi-xyz.github.io">here</a>.
            Articles are licensed under{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
              Creative Commons with the Share-alike Clause (CC-BY-SA 4.0)
            </a>.
          </p>
          <br />
          <br />
        </div>
      </footer>
    </>
  );
}
