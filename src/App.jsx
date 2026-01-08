import React from 'react'
import Header from './Components/Layout/Header/Header';
import Hero from './Sections/Hero/Hero';
import Trending from "./Sections/Trending/Trending";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Trending />
      </main>
    </>
  )
}

export default App
