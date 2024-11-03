{
  description = "Rust flake templalte";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-24.05";
    unstable-nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };
  outputs = {
    self,
    nixpkgs,
    unstable-nixpkgs,
    }: let
      system = "x86_64-linux";
      pkgs = unstable-nixpkgs.legacyPackages.${system};
    in {
      formatter.${system} = pkgs.alejandra;
      devShells.${system}.default = import ./shell.nix { inherit pkgs; };
    };
}
