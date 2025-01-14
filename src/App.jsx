import { Branding } from "./components/Branding";
import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CTA />

      <CTA minify />
    </>
  );
}

export default App;
