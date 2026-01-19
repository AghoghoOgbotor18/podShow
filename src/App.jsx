import React, { useState, Suspense } from 'react'
import Header from './Components/Layout/Header/Header';
import Hero from './Sections/Hero/Hero';
const Trending = React.lazy(() => import("./Sections/Trending/Trending"));
const About = React.lazy(() => import("./Sections/About/About"));
const Speakers = React.lazy(() => import('./Sections/Speakers/Speakers'));
const CTASection = React.lazy(() => import('./Sections/CTASection/CTASection'));
const WhyChooseUs = React.lazy(() => import('./Sections/WhyChooseUs/WhyChooseUs'));
const Testimonials = React.lazy(() => import('./Sections/Testimonials/Testimonials'));
const Contact = React.lazy(() => import('./Sections/Contact/Contact'));
const Footer = React.lazy(() => import('./Components/Layout/Footer/Footer'));
import FloatingContainer from './Components/FloatingContainer/FloatingContainer';


const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <FloatingContainer />
        <Suspense fallback={<p>Loading...</p>}>
          <Trending />
          <About />
          <Speakers />
          <CTASection />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <footer>
        <Suspense fallback={<p>Loading....</p>}>
          <Footer />
        </Suspense>
      </footer>
    </>
  )
}

export default App
