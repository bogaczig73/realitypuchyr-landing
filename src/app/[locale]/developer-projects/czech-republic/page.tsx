'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiArrowRight, FiHome, FiMapPin, FiStar, FiCalendar, FiUsers } from 'react-icons/fi';

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import GetInTuch from "../../components/get-in-touch";
import Switcher from "../../components/switcher";

export default function DeveloperProjectsCzechRepublic() {
    const t = useTranslations('developerProjects');
    const tCategories = useTranslations('developerProjects.categories');
    const tOverview = useTranslations('developerProjects.overviewPages.czechRepublic');

    const projects = [
        {
            id: "triangl-park",
            title: tOverview('projectsData.trianglPark.title'),
            location: tOverview('projectsData.trianglPark.location'),
            status: tOverview('projectsData.trianglPark.status'),
            availableUnits: 38,
            completionRate: 93,
            image: "/images/projects/czech-republic/triangl-park/triangl-park-23.webp",
            logo: "/images/projects/czech-republic/triangl-park/triangl-logo.svg",
            description: tOverview('projectsData.trianglPark.description'), 
        },
        {
            id: "icon-park",
            title: tOverview('projectsData.iconPark.title'),
            location: tOverview('projectsData.iconPark.location'),
            status: tOverview('projectsData.iconPark.status'),
            availableUnits: "Contact for details",
            completionRate: 100,
            image: "/images/projects/czech-republic/icon-park/icon-park-21.webp",
            description: tOverview('projectsData.iconPark.description'),
            logo: "/images/projects/czech-republic/icon-park/icon-park-logo.svg",
        },
        {
            id: "english-embankment",
            title: tOverview('projectsData.englishEmbankment.title'),
            location: tOverview('projectsData.iconPark.location'),
            status: tOverview('projectsData.englishEmbankment.status'),
            availableUnits: "Contact for details",
            completionRate: 25,
            image: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp",
            description: tOverview('projectsData.englishEmbankment.description'),
            logo: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-logo.svg",
        },
        {
            id: "horovice",
            title: tOverview('projectsData.horovice.title'),
            location: tOverview('projectsData.horovice.location'),
            status: tOverview('projectsData.horovice.status'),
            availableUnits: "Contact for details",
            completionRate: 60,
            image: "/images/projects/czech-republic/horovice/horovice-08.webp",
            logo: "/images/projects/czech-republic/horovice/horovice-09.webp",
            description: tOverview('projectsData.horovice.description'),
        },
        {
            id: "tiskarna-kristianov",
            title: tOverview('projectsData.tiskarnaKristianov.title'),
            location: tOverview('projectsData.tiskarnaKristianov.location'),
            status: tOverview('projectsData.tiskarnaKristianov.status'),
            availableUnits: "Contact for details",
            completionRate: 70,
            image: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-02.webp",
            logo: "/images/projects/czech-republic/tiskarna-kristianov/kristianov-logo.png",
            description: tOverview('projectsData.tiskarnaKristianov.description'),
        }
    ];
    
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
                        <span className="text-green-600 font-semibold text-lg uppercase tracking-wide">{tOverview('projects.badge')}</span>
                        <h2 className="text-5xl font-bold mt-3 mb-4">{tOverview('projects.title')}</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            {tOverview('projects.subtitle')}
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
                                                    <span>{project.completionRate}% {project.completionRate === 100 ? tOverview('projects.completed') : tOverview('projects.sold')}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                                                <span className="font-semibold">{tOverview('projects.viewProjectDetails')}</span>
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