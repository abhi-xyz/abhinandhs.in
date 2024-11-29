import { useState } from "preact/hooks";
import ThemeToggle from "../islands/ThemeToggle.tsx";

export default function PortfolioHeader() {
  // State for handling the mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div class="font-bold">
      <nav class="w-full min-h-32 max-tablet:min-h-16 top-0 left-0 z-10">
        <div class="mx-auto px-4">
          <div class="flex justify-end items-center pt-8 max-tablet:py-4">
            {/* Desktop Menu */}
            <div class="flex max-tablet:hidden space-x-16 mt-12 pb-7 px-16">
              <ThemeToggle />
              <a
                href="/"
                class="hover:text-just-red aria-[current='page']:text-just-red"
              >
                Home
              </a>
              <a
                href="/portfolio"
                class="hover:text-just-red aria-[current]:text-just-red"
              >
                Portfolio
              </a>
              <a
                href="/articles"
                class="hover:text-just-red aria-[current]:text-just-red"
              >
                Articles
              </a>
              <a
                href="/about"
                class="hover:text-just-red aria-[current]:text-just-red"
              >
                About
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div class="hidden max-tablet:flex">
              <ThemeToggle />
              <div className="pr-3"></div>
              <button
                onClick={toggleMenu}
                class="focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <div
            class={`${
              isMenuOpen ? "" : "hidden"
            } md:hidden flex flex-col items-center`}
          >
            <a
              href="/"
              class="block py-2 px-4 hover:text-just-red"
            >
              Home
            </a>
            <a
              href="/portfolio"
              class="block py-2 px-4 hover:text-just-red aria-[current]:text-just-red"
            >
              Portfolio
            </a>
            <a
              href="/articles"
              class="block py-2 px-4 hover:text-just-red aria-[current]:text-just-red"
            >
              Articles
            </a>
            <a
              href="/about"
              class="block py-2 px-4 hover:text-just-red aria-[current]:text-just-red"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
