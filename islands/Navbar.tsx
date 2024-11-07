import { useState } from "preact/hooks";

export default function Navbar() {
  // State for handling the mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div>
      <div class="font-bold z-20 absolute fixed left-0 top-0 w-full">
        <nav class="bg-mocha-base w-full min-h-32 max-tablet:min-h-16 top-0 left-0 z-50">
          <div class="mx-auto">
            <div class="flex justify-between items-center pt-8 max-tablet:py-4 px-4">
              {/* Logo */}
              <div
                class="text-5xl max-tablet:text-2xl font-bold text-mocha-text"
                style={{ fontFamily: "'Helvetica Neue', san-serif" }}
              >
                ABHINANDH S<span class="text-vibez-red">.</span>
              </div>

              {/* Desktop Menu items */}
              <div class="flex max-tablet:hidden space-x-6 mt-12 pb-7">
                <a href="/" class="text-mocha-text hover:text-vibez-red">Home</a>
                <a href="/portfolio" class="text-mocha-text hover:text-vibez-red">
                  Portfolio
                </a>
                <a href="/articles" class="text-mocha-text hover:text-vibez-red">
                  Articles
                </a>
                <a href="/about" class="text-mocha-text hover:text-vibez-red">
                  About
                </a>
              </div>

              {/* Mobile Hamburger Menu */}
              <div class="hidden max-tablet:flex">
                <button
                  onClick={toggleMenu}
                  class="text-mocha-text focus:outline-none"
                >
                  {/* Hamburger Icon */}
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
            <div
              class={`${
isMenuOpen ? "" : "hidden"
} md:hidden flex flex-col h-lvh w-2/3 bg-mocha-base bg-opacity-100 opacity-100 float-right items-center z-50`}
            >
              <a
                href="/"
                class="block py-2 px-4 text-mocha-text hover:text-vibez-red"
              >
                Home
              </a>
              <a
                href="/portfolio"
                class="block py-2 px-4 text-mocha-text hover:text-vibez-red"
              >
                Portfolio
              </a>
              <a
                href="/articles"
                class="block py-2 px-4 text-mocha-text hover:text-vibez-red"
              >
                Articles
              </a>
              <a
                href="/about"
                class="block py-2 px-4 text-mocha-text hover:text-vibez-red"
              >
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="min-h-32 max-tablet:min-h-16"></div>
    </div>
  );
}
