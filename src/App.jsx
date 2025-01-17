import { Branding } from "./components/Branding";
import { BulletPoints } from "./components/BulletPoints";
import { CTA } from "./components/CTA";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CTA />
      <BulletPoints />
      <Pricing />
      <CTA minify />
    </>
  );
}

export default App;
