import React from 'react'
import OurTeachersSection from '../../Components/HomeComponents/OurTeachersSection/OurTeachersSection'
import Footer from '../../LayOut/Footer/Footer'
import Navbar from '../../LayOut/Navbar/Navbar'
import "./HomePage.scss"

function HomePage() {
  return (
    <main>
      <Navbar/>
      <OurTeachersSection/>

      <Footer/>
    </main>
  )
}

export default HomePage