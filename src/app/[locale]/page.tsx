import React from 'react'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import HomeBanner from './components/home-banner'
import AboutVideoTour from './components/about-video-tour'
import Property from './components/property'
import ClientTwo from './components/client-two'
import GetInTuch from './components/get-in-touch'
import Footer from './components/footer'
import Switcher from './components/switcher'
import CounterSection from './components/counter-section'
import AboutOurCooperation from './components/about-our-cooperation'
import AboutMe from './components/about-me'
import BlogSection from './components/blog-section'
import InstagramEmbed from './components/instagram-embed'
import SpainSection from './components/spain-section'

export default function Page() {
  return (
    <>
     <Navbar navClass="" topnavClass={''} tagline={false}/>
     <Sidebar/>
     <HomeBanner/>   
     <AboutMe/>
     <AboutOurCooperation/>
     <AboutVideoTour/>
     <CounterSection/>

     {/* <CategoriesSection /> */}
     <Property/>

     <SpainSection/>

     <ClientTwo/>

     <BlogSection/>

     <GetInTuch/>
     <InstagramEmbed/>
     <Footer/>
     <Switcher/>
    </>
  )
} 