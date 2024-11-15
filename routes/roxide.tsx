import Navbar from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function roxide() {
  return (
    <>
      <body className="bg-latte-crust dark:bg-mocha-crust text-latte-text dark:text-mocha-text">
        <Navbar />

        <div className="dark:bg-mocha-crust w-full flex justify-center">
          <div className="max-w-4xl p-5">
            <h1 className="text-5xl font-mono font-bold mb-4">Roxide</h1>
            <p>
              <em>
                <b>roxide</b>
              </em>
              is a lightweight, high-performance alternative to the traditional
              <em>
                <b>rm</b>
              </em>
              command, designed with an emphasis on speed and data preservation.
              Unlike standard rm, which permanently deletes files, roxide safely
              moves them to a designated
              <b>
                <em>Trash</em>
              </b>
              directory. This approach enables efficient and fast file removal
              without risking unintended data loss.
            </p>
            <h2 className="text-3xl font-mono font-bold my-5">
              Getting Started
            </h2>
            <ul>
              <li>
                <code class="font-mono font-bold">roxide</code>{" "}
                <em>filename</em> : files will moved to{" "}
                <code>trash dir</code>. ie, $HOME/.local/share/Trash/files/
              </li>
              <li>
                <code class="font-mono font-bold">roxide revert</code>{" "}
                : restors perviously removed file/directory
              </li>
              <li>
                <code class="font-mono font-bold">roxide -r | --recursive</code>
                {" "}
                : Remove directories and their contents recursively
              </li>
              <li>
                <code class="font-mono font-bold">roxide -f | --force</code>
                {" "}
                : Remove without moving to trash directory
              </li>
              <li>
                <code class="font-mono font-bold">roxide -v | --verbose</code>
                {" "}
                : will print the file name and its out path
              </li>
            </ul>
            <h2 className="text-3xl font-mono font-bold my-5" id="installation">Installation</h2>
            <h3 className="text-2xl font-mono font-bold my-5" id="build">Cargo</h3>
            
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.12%29&t=one-dark&wt=none&l=application%2Fx-sh&width=680&ds=false&dsyoff=76px&dsblur=100px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=183%25&si=false&es=2x&wm=false&code=cargo%2520install%2520roxide"
  style="width: 480px; height: 70px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

            <h3 className="text-2xl font-mono font-bold my-5" id="build">Build</h3>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.12%29&t=one-dark&wt=none&l=application%2Fx-sh&width=680&ds=false&dsyoff=76px&dsblur=100px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=183%25&si=false&es=2x&wm=false&code=git%2520clone%2520https%253A%252F%252Fgithub.com%252Fabhi-xyz%252Froxide.git%2520--depth%253D1%2520%250Acd%2520roxide%250Acargo%2520build%2520--release%250Acp%2520target%252Frelease%252Froxide%2520%252Fusr%252Flocal%252Fbin%252F"
  style="width: 500px; height: 173px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

            <h3 className="text-2xl font-mono font-bold my-5" id="build">NixOs</h3>
           <p>Add<em><b> roxide </b></em>as a flake input: In your flake.nix file, add the roxide input pointing to its GitHub repository.</p> 

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.12%29&t=one-dark&wt=none&l=rust&width=680&ds=false&dsyoff=76px&dsblur=100px&wc=false&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=183%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520inputs%2520%253D%2520%257B%250A%2520%2520%2520%2520nixpkgs.url%2520%253D%2520%2522github%253ANixOS%252Fnixpkgs%2522%253B%250A%2520%2520%2520%2520roxide%2520%253D%2520%257B%250A%2520%2520%2520%2520%2520%2520url%2520%253D%2520%2522github%253Aabhi-xyz%252Froxide%2522%253B%250A%2520%2520%2520%2520%2520%2520inputs.nixpkgs.follows%2520%253D%2520%2522nixpkgs%2522%253B%2520%2523%2520Follows%2520the%2520nixpkgs%2520input%250A%2520%2520%2520%2520%257D%253B%250A%2520%2520%257D%253B%250A%250A%2520%2520outputs%2520%253D%2520%257B%2520self%252C%2520roxide%252C%2520nixpkgs%252C%2520...%2520%257D%2540inputs%253A%250A%2520%2520%257B%250A%2520%2520%2520%2520%2523%2520Your%2520NixOS%2520configuration%2520or%2520other%2520settings%250A%2520%2520%257D%253B%250A%257D"
  style="width: 480px; height: 460px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>


            <br />
            <p>Include roxide in NixOS configuration: In the outputs section, set up nixosConfigurations and add roxide as a module to enable it within your system configuration.
</p>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.12%29&t=one-dark&wt=none&l=rust&width=680&ds=false&dsyoff=76px&dsblur=100px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=183%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520outputs%2520%253D%2520%257B%2520self%252C%2520roxide%252C%2520nixpkgs%252C%2520...%2520%257D%2540inputs%253A%250A%2520%2520%257B%250A%2520%2520%2520%2520nixosConfigurations.%2522my-nixos-host%2522%2520%253D%2520nixpkgs.lib.nixosSystem%2520%257B%250A%2520%2520%2520%2520%2520%2520system%2520%253D%2520%2522x86_64-linux%2522%253B%250A%2520%2520%2520%2520%2520%2520specialArgs%2520%253D%2520%257B%2520inherit%2520inputs%253B%2520%257D%253B%250A%2520%2520%2520%2520%2520%2520modules%2520%253D%2520%255B%250A%2520%2520%2520%2520%2520%2520%2520%2520.%252Fhosts%252Fconfiguration.nix%2520%2523%2520Main%2520NixOS%2520configuration%2520file%250A%2520%2520%2520%2520%2520%2520%2520%2520roxide.nixosModules.roxide%2520%2520%2520%2520%2520%2520%2523%2520Enable%2520the%2520%2522roxide%2522%2520module%2520from%2520the%2520flake%250A%2520%2520%2520%2520%2520%2520%255D%253B%250A%2520%2520%2520%2520%257D%253B%250A%2520%2520%257D%253B%250A%257D"
  style="width: 480px; height: 460px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
<p>Activate "roxide" in configuration.nix: Within configuration.nix, enable the "roxide" program</p>
            <br />
            <iframe
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.12%29&t=one-dark&wt=none&l=rust&width=680&ds=false&dsyoff=76px&dsblur=100px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=183%25&si=false&es=2x&wm=false&code=%257B%250A%2520%2520%2523%2520Other%2520configurations...%250A%2520%2520%250A%2520%2520program.roxide.enable%2520%253D%2520true%253B%2520%2523%2520note%253A%2520its%2520program%2520not%2520programs%250A%257D"
  style="width: 476px; height: 200px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
            <br />
<p>Apply Configuration: After updating your configuration, apply it with</p>
            <iframe
  src="https://carbon.now.sh/embed?bg=rgba%280%2C0%2C0%2C0.12%29&t=one-dark&wt=none&l=rust&width=680&ds=false&dsyoff=76px&dsblur=100px&wc=false&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=JetBrains+Mono&fs=14px&lh=183%25&si=false&es=2x&wm=false&code=sudo%2520nixos-rebuild%2520switch%2520--flake%2520."
  style="width: 332px; height: 70px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>
            <br />

            <p>
              <strong>Note</strong>: I am an amateur Rust programmer, so while
              this code might not be the most refined, it prioritizes safety and
              has been thoroughly tested. If you have ideas for improvement or
              notice any issues, contributions are very welcome! This project is
              open to suggestions, code reviews, and pull requests from
              developers of all experience levels.
            </p>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}
