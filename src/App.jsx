import React, { useState } from 'react'
import Header from './Components/Layout/Header/Header';
import Hero from './Sections/Hero/Hero';
import Trending from "./Sections/Trending/Trending";
import About from "./Sections/About/About";
import Speakers from './Sections/Speakers/Speakers';
import CTASection from './Sections/CTASection/CTASection';
import WhyChooseUs from './Sections/WhyChooseUs/WhyChooseUs';
import Testimonials from './Sections/Testimonials/Testimonials';
import Contact from './Sections/Contact/Contact';
import Footer from './Components/Layout/Footer/Footer';

const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Trending />
        <About />
        <Speakers />
        <CTASection />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
