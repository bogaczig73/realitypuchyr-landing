import React from 'react'
import { useTranslations } from 'next-intl'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import HomeBanner from './components/home-banner'
import { aboutData, blogList, teamData } from '../data/data'
import { FiArrowRight, FiCalendar, FiClock, FiFacebook, FiHexagon, FiInstagram, FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'
import OurCooperation from './components/about-our-cooperation'
import AboutVideoTour from './components/about-video-tour'
import CategoriesSection from './components/categories-section'
import Property from './components/property'
import ClientTwo from './components/client-two'
import GetInTuch from './components/get-in-touch'
import Footer from './components/footer'
import Switcher from './components/switcher'
import CounterSection from './components/counter-section'
import AboutOurCooperation from './components/about-our-cooperation'
import AboutMe from './components/about-me'
import BlogSection from './components/blog-section'
interface AboutData{
    image: string;
    title: string;
    desc: string;
}
interface BlogData{
    id: number;
    title: string;
    date: string;
    type: string;
    image: string;
}

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

     <ClientTwo/>

     <BlogSection/>

     <GetInTuch/>
     <Footer/>
     <Switcher/>
    </>
  )
} 