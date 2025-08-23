'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiArrowRight, FiHome, FiMapPin, FiStar, FiCalendar, FiUsers } from 'react-icons/fi';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import GetInTuch from "../../components/get-in-touch";
import Switcher from "../../components/switcher";

const projects = [
    {
        id: "triangl-park",
        title: "Triangl Park",
        location: "Plzeň-Bory",
        status: "Third stage now selling",
        availableUnits: 38,
        completionRate: 93,
        image: "/images/projects/czech-republic/triangl-park/triangl-park-23.webp",
        logo: "/images/projects/czech-republic/triangl-park/triangl-logo.svg",
        description: "Unique residential concept in southern Plzeň-Bory with three distinct living standards",
        features: ["Garden Suite", "Family Home", "Penthouse Lodge"],
        stages: [
            { name: "First Stage", status: "Completed", units: "Sold out" },
            { name: "Second Stage", status: "Completed", units: "Sold out" },
            { name: "Third Stage", status: "Selling now", units: "38 available" }
        ]
    },
    {
        id: "icon-park",
        title: "ICON Park Kladno",
        location: "Kladno",
        status: "Ready for move-in",
        availableUnits: "Contact for details",
        completionRate: 100,
        image: "/images/projects/czech-republic/icon-park/icon-park-21.webp",
        description: "Modern and comfortable living in the new residential district of Kladno",
        logo: "/images/projects/czech-republic/icon-park/icon-park-logo.svg",
        features: ["1+kk to 4+kk", "Award Winner 2024", "Ready for move-in"],
        stages: [
            { name: "Project Status", status: "Completed", units: "Ready for move-in" }
        ]
    },
    {
        id: "english-embankment",
        title: "English Embankment Palace",
        location: "Plzeň Center",
        status: "Construction in progress",
        availableUnits: "Contact for details",
        completionRate: 25,
        image: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp",
        description: "Luxury palace-style living in the heart of Plzeň's historic center",
        logo: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-logo.svg",
        features: ["Luxury Apartments", "Commercial Space", "Park Courtyard"],
        stages: [
            { name: "Construction", status: "In Progress", units: "Completion 2028" }
        ]
    },
    {
        id: "horovice",
        title: "Bydlení Hořovice",
        location: "Hořovice",
        status: "Now selling",
        availableUnits: "Contact for details",
        completionRate: 60,
        image: "/images/projects/czech-republic/horovice/horovice-08.webp",
        logo: "/images/projects/czech-republic/horovice/horovice-09.webp",
        description: "From the foundation up - a good place for life between Plzeň and Prague",
        features: ["Brick Construction", "Custom Kitchens", "3D Configurator"],
        stages: [
            { name: "Project Status", status: "Now Selling", units: "Contact for details" }
        ]
    },
    {
        id: "tiskarna-kristianov",
        title: "Tiskárna Kristiánov",
        location: "Liberec Center",
        status: "Second stage now selling",
        availableUnits: "Contact for details",
        completionRate: 70,
        image: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-02.webp",
        logo: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-logo.png",
        description: "Living with a story in the heart of Liberec - industrial heritage meets modern luxury",
        features: ["Industrial Heritage", "Award-Winning Architecture", "200 Units"],
        stages: [
            { name: "Second Stage", status: "Now Selling", units: "Contact for details" }
        ]
    }
];

export default function DeveloperProjectsCzechRepublic() {
    const t = useTranslations('developerProjects');
    const tCategories = useTranslations('developerProjects.categories');
    
    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/property/developer_projects_czech_republic.webp')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <div className="mb-4">
                            <Link href="/developer-projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <FiArrowLeft className="h-4 w-4" />
                                {tCategories('backToRegions')}
                            </Link>
                        </div>
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                            {t('hero.title')}
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* Projects Section */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="text-green-600 font-semibold text-lg uppercase tracking-wide">Our Projects</span>
                        <h2 className="text-5xl font-bold mt-3 mb-4">Featured Development Projects</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover our premium residential developments across the Czech Republic
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-1 gap-8">
                        {projects.map((project, index) => (
                            <Link 
                                key={index} 
                                href={`/developer-projects/czech-republic/${project.id}`}
                                className="group relative transition-all duration-500 ease-in-out rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="relative h-96">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                                                {project.status}
                                            </div>
                                            <div className="text-right">
                                                <img src={project.logo} alt={project.title} className="w-30 h-30 object-contain text-white" />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-white/80 text-lg mb-4">{project.description}</p>
                                            </div>
                                            
                                            <div className="flex items-center gap-4 text-white/80">
                                                <div className="flex items-center gap-2">
                                                    <FiMapPin className="h-4 w-4" />
                                                    <span>{project.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FiUsers className="h-4 w-4" />
                                                    <span>{project.completionRate}% {project.completionRate === 100 ? 'completed' : 'sold'}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex gap-2">
                                                {project.features.map((feature, idx) => (
                                                    <span key={idx} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                                                <span className="font-semibold">View Project Details</span>
                                                <FiArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">{t('whyChoose.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {t('whyChoose.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiStar className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('whyChoose.experience.title')}</h3>
                            <p className="text-slate-600">{t('whyChoose.experience.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('whyChoose.location.title')}</h3>
                            <p className="text-slate-600">{t('whyChoose.location.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiHome className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{t('whyChoose.quality.title')}</h3>
                            <p className="text-slate-600">{t('whyChoose.quality.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <GetInTuch id="contact" />
            
            <Footer />
            <Switcher />
        </>
    )
} 