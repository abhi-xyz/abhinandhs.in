{ pkgs ? import <nixpkgs> {} }:
let
in
  pkgs.mkShell rec {

    buildInputs = with pkgs; [
      clang
      neovim
      llvmPackages.bintools
      deno
      tailwindcss-language-server
    ];
    shellHook = ''
    '';
  }
