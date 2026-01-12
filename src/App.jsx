import React from 'react'
import Header from './Components/Layout/Header/Header';
import Hero from './Sections/Hero/Hero';
import Trending from "./Sections/Trending/Trending";
import About from "./Sections/About/About";
import Speakers from './Sections/Speakers/Speakers';
import CTASection from './Sections/CTASection/CTASection';
import WhyChooseUs from './Sections/WhyChooseUs/WhyChooseUs';
import Testimonials from './Sections/Testimonials/Testimonials';

const App = () => {
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
      </main>
    </>
  )
}

export default App
