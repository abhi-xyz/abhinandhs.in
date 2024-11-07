import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Navbar from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <body className="h-lvh text-latte-text dark:text-mocha-text bg-latte-crust dark:bg-mocha-crust" id="home">
        <Navbar />
        <div className="px-4" id="wrapper">
          <h1 class="text-center text-2xl pt-4 px-4 font-sans font-bold">
            Hello Friends
          </h1>
          <h1 class="text-center text-2xl pt-4 px-4 font-sans font-bold">
            Welcome to my corner of Internet<span class="text-vibez-red">
              .
            </span>
          </h1>
          <br />
          <h1 class="text-2xl pt-4 px-4 font-sans font-bold">
            About me<span class="text-vibez-red">.</span>
          </h1>
          <p className="px-4" id="intro">
            I'm Abhinandh S. I am a 21 old guy from India, who loves computers
            and softwares.
          </p>
          <br />
          <p className="px-4" id="intro">
            This place is home for all my psychological dysfunctioning. A place
            where I am in control, with no censorship or manupilation.
          </p>
          <h1 class="text-2xl pt-4 px-4 font-sans font-bold">
            Recent posts<span class="text-vibez-red">.</span>
          </h1>
        </div>
        <Footer />
      </body>
    </>
  );
}
