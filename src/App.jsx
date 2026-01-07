import React from 'react'
import Header from './Components/Layout/Header/Header'
import Hero from './Sections/Hero/Hero'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <main>
          <Hero />
        </main>
      </body>
    </>
  )
}

export default App
