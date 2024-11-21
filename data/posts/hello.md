---
title: Hello World
publish_at: 2022-06-26T13:49:37.703Z
snippet: My first blog entry.
---

Hey folks, this is my _new_ blog.

# JAVASCRIPT

```javascript
export default function Home() {
  return (
    <body>
    </body>
  );
}
```

# TYPESCRIPT

```typescript
// wow this is a comment!
export default function Home() {
  return (
    <body>
    </body>
  );
}
```

# RUST

```rust
pub fn main() -> String {
    String::from("hello")
}
```

# nix

```nix
    { config, lib, ... }:
let
  cfg = config.TM.programs.aria2;
  inherit (lib) mkEnableOption mkIf;
in
{
  options.TM.programs.aria2.enable = mkEnableOption "Aria2 downloader" // {
    default = true;
  };

  config = mkIf cfg.enable {
    programs.aria2 = {
      enable = true;
      settings = {
        file-allocation = "none";
        log-level = "warn";
        max-connection-per-server = 16;
        min-split-size = "1M";
        human-readable = true;
        reuse-uri = true;
        rpc-save-upload-metadata = true;
        max-file-not-found = 0;
        remote-time = true;
        async-dns = true;
        stop = 0;
        allow-piece-length-change = true;
        parameterized-url = true;
        optimize-concurrent-downloads = true;
        deferred-input = true;
        continue = true;
        check-integrity = true;
        realtime-chunk-checksum = true;
        piece-length = "1M";
        split = 16;
        # Seconds:
        save-session-interval = 60;
        # Caches in memory
        disk-cache = "32M";
        save-not-found = true;
        download-result = "full";
        truncate-console-readout = true;
        retry-wait = 30;
        max-tries = 15;
        enable-color = true;
        enable-http-keep-alive = true;
        enable-http-pipelining = true;
        http-accept-gzip = true;
        follow-torrent = true;
        bt-save-metadata = true;
        seed-time = 0;
        bt-load-saved-metadata = true;
        metalink-preferred-protocol = "https";
      };
    };
  };
}
```
