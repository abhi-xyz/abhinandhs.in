import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
// import Navbar from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  const count = useSignal(3);
  // <Navbar />
  return (
    <>
      <div id="hero_image" class="h-96 relative">
        <img
          class="absolute object-cover top-0 left-0 w-full h-full"
          src="/images/home/christian-buehner-DItYlc26zVI-unsplash.jpg"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
      </div>

      <div class="px-4 py-8 mx-auto dark:text-mocha-text dark:bg-mocha-crust bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />
        </div>
      </div>
      <Footer />
    </>
  );
}
