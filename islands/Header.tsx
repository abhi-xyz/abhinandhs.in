import { useState } from "preact/hooks";

export default function Navbar() {
  // State for handling the mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div class="font-bold">
      <nav class="bg-mocha-base shadow-md w-full min-h-32 max-tablet:min-h-16 top-0 left-0 z-10">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center pt-8 max-tablet:py-4">
            {/* Logo */}
            <div
              class="text-5xl max-tablet:text-2xl font-bold text-mocha-text"
              style={{ fontFamily: "'Helvetica Neue', san-serif" }}
            >
              ABHINANDH S<span class="text-vibez-red">.</span>
            </div>

            {/* Desktop Menu */}
            <div class="flex max-tablet:hidden space-x-6 mt-12 pb-7">
              <a href="/" class="text-mocha-text hover:text-vibez-red">Home</a>
              <a href="/portfolio" class="text-mocha-text hover:text-vibez-red">Portfolio</a>
              <a href="/articles" class="text-mocha-text hover:text-vibez-red">Articles</a>
              <a href="/about" class="text-mocha-text hover:text-vibez-red">About</a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div class="hidden max-tablet:flex">
              <button onClick={toggleMenu} class="text-mocha-text focus:outline-none">
                {/* Hamburger Icon */}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div class={`${isMenuOpen ? "" : "hidden"} md:hidden flex flex-col items-center`}>
            <a href="/" class="block py-2 px-4 text-mocha-text hover:text-vibez-red">Home</a>
            <a href="/portfolio" class="block py-2 px-4 text-mocha-text hover:text-vibez-red">Portfolio</a>
            <a href="/articles" class="block py-2 px-4 text-mocha-text hover:text-vibez-red">Articles</a>
            <a href="/about" class="block py-2 px-4 text-mocha-text hover:text-vibez-red">About</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
