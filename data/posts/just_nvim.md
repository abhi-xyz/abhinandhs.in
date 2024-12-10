---
title: just.nvim
publish_at: 2024-12-10T16:04:20.010Z
updated_at: Monday, December 10, 2024
snippet: Neovim plugin for encrypting and decrypting text files inside neovim using `age` with ease.
---

**Neovim plugin for encrypting and decrypting text files inside neovim using `age` with ease.**

## Installation

Install Just using your favorite plugin manager. For example, with [lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
-- ~/.config/nvim/lua/plugins/just.lua

{
    'abhi-xyz/just.nvim',
    cmd = { "Just", "J" },
    config = function()
      local key = require('key')

      require('just').setup({
        public_key = "ageXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        private_key = key.private_key, -- defined in another lua file which is not included in git for safety
      })
    end
}
```
```lua
-- ~/.config/nvim/lua/key.lua

return {
  private_key = "AGE-SECRET-KEY-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
}
```

## Usage

Just provides the `:Just` command with the following syntax:

```vim
:Just [action]
```

- `[action]` can be one of:
  - `encrypt`,
  - `decrypt`,

#### Examples:

- Kills the current buffer and switches to a previous buffer or creates a scratch buffer in case there is no buffer to switch, then encrypts the file with the provided age key.

```vim
:Just encrypt
```

- Decrypts the currently opened encrypted file, then decrypts it and switches to the decrypted file.
```vim
:Just decrypt
```
