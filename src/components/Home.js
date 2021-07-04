import React from 'react'
import Header from './Header/Header'; 
import SubHeader from './SubHeader/SubHeader'; 
import Footer from './Footer/Footer'; 
import Navbar from './Navbar/Navbar'; 
import FadeIn from 'react-fade-in';

 function Home() {
    return (
        <div>
            <FadeIn>

          <Navbar/>
      <Header/>
     
      <SubHeader/>
      <Footer/>
      </FadeIn>

        </div>
    )
}

export default Home
