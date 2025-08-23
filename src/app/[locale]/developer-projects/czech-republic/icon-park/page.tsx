'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiCheck, FiMapPin, FiHome, FiStar, FiCalendar, FiUsers, FiPhone, FiMail, FiAward, FiBuilding } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import PhotoGallery from "../../components/photo-gallery";

const projectStages = [
    {
        name: "Construction Status",
        status: "Completed & Ready for Move-in",
        completion: "Q3 2025",
        details: "Buildings and apartments are completely finished, including outdoor fitness zone and children's playground",
        image: "/images/projects/czech-republic/icon-park/icon-park-34.webp"
    }
];

const buildingInfo = [
    { name: "Building A1", floors: 4, units: "Various", status: "Completed" },
    { name: "Building A2", floors: 4, units: "Various", status: "Completed" },
    { name: "Building B1", floors: 4, units: "Various", status: "Completed" },
    { name: "Building B2", floors: 4, units: "Various", status: "Completed" },
    { name: "Building C1", floors: 4, units: "Various", status: "Completed" },
    { name: "Building C2", floors: 4, units: "Various", status: "Completed" },
    { name: "Building C3", floors: 4, units: "Various", status: "Completed" }
];

const apartmentTypes = [
    { type: "1+kk", description: "Compact living for singles or couples" },
    { type: "2+kk", description: "Perfect for couples or small families" },
    { type: "3+kk", description: "Ideal for growing families" },
    { type: "4+kk", description: "Spacious living for larger families" }
];

const locationFeatures = [
    { feature: "Kladno Center", time: "5 min", description: "Quick access to city center" },
    { feature: "Václav Havel Airport", time: "10 min", description: "International airport nearby" },
    { feature: "Veleslavín Station", time: "20 min", description: "Direct connection to Prague" },
    { feature: "Masaryk Station", time: "30 min", description: "Main Prague railway station" }
];

const amenities = [
    { name: "Café", description: "Energy boost and sweet endings with the whole family", icon: "☕" },
    { name: "Kindergarten", description: "Quality early education for children", icon: "🏫" },
    { name: "Playground", description: "Safe outdoor play area for children", icon: "🎠" },
    { name: "Outdoor Gym", description: "Fitness equipment in fresh air", icon: "💪" },
    { name: "Public Spaces", description: "Community areas for socializing", icon: "🌳" }
];

const exteriorPhotos = [
    { src: "/images/projects/czech-republic/icon-park/icon-park-01.webp", alt: "Building A1 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-02.webp", alt: "Building A2 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-03.webp", alt: "Building B1 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-04.webp", alt: "Building B2 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-05.webp", alt: "Building C1 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-06.webp", alt: "Building C2 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-07.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-08.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-09.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-10.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-12.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-13.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-14.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-20.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-21.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-22.webp", alt: "Building C3 Exterior" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-23.webp", alt: "Building C3 Exterior" }
];

const interiorVisualizations = [
    { src: "/images/projects/czech-republic/icon-park/icon-park-11.webp", alt: "1+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-15.webp", alt: "2+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-16.webp", alt: "3+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-17.webp", alt: "4+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-18.webp", alt: "Kitchen Design" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-19.webp", alt: "Living Room Design" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-24.webp", alt: "Bedroom Design" },
    { src: "/images/projects/czech-republic/icon-park/icon-park-25.webp", alt: "Bathroom Design" }
];

export default function IconParkPage() {
    const t = useTranslations('developerProjects.czechRepublic');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/icon-park/icon-park-21.webp')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <div className="mb-4">
                            <Link href="/developer-projects/czech-republic" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <FiArrowLeft className="h-4 w-4" />
                                Back to Projects
                            </Link>
                        </div>
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
                            ICON Park Kladno
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            Modern and comfortable living in the new residential district of Kladno
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white">4</div>
                                <div className="text-white/80">Floors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white">230</div>
                                <div className="text-white/80">Total Units</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white">1+kk - 4+kk</div>
                                <div className="text-white/80">Layouts</div>
                            </div>
                        </div>
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

            {/* Project Overview */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Your New Home Starts at ICON Park</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Looking for modern and comfortable living that meets your expectations? ICON Park in Kladno 
                                brings the ideal combination of modern design, comfort, and a quiet location in the newly 
                                revitalized district.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Apartments with layouts from 1+kk to 4+kk are designed with emphasis on quality and comfort, 
                                each with its own space for relaxation - balcony, terrace, or front garden. Project completion 
                                in 2025 means your new home is closer than you think. ICON Park is where your future begins.
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">Ready for Move-in!</h3>
                                <p className="text-green-700">
                                    The building has received final approval and you can start moving in this summer!
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/icon-park/icon-park-34.webp" 
                                    alt="ICON Park Project" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Award Section */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FiAward className="h-12 w-12 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Prestigious Award Winner</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            ICON PARK received the prestigious Jury Award in the Real Estate Project of the Year 2024 competition
                        </p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">Real Estate Project of the Year 2024</h3>
                            <p className="text-slate-600">Nominated Project - Central Bohemian Region</p>
                        </div>
                        <p className="text-lg text-slate-600 text-center leading-relaxed">
                            "We greatly value this award, especially given the strong competition in this year's edition. 
                            It confirms that the combination of modern architecture, quality execution, and attractive location 
                            resonates not only with customers but also with the professional public."
                        </p>
                        <div className="text-center mt-6">
                            <p className="text-sm text-slate-500">- František Vladař, Investment & Project Director, BHM group</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* External Building Views Gallery */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">External Building Views</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Explore the architectural beauty and design of all buildings in ICON Park
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {exteriorPhotos.map((photo, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img 
                                        src={photo.src} 
                                        alt={photo.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interior Visualizations Gallery */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Interior Visualizations</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the interior layouts and designs for all apartment types
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {interiorVisualizations.map((visualization, index) => (
                            <div key={index} className="group relative">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img 
                                        src={visualization.src} 
                                        alt={visualization.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Status */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Project Status</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Current construction status and completion details
                        </p>
                    </div>

                    <div className="space-y-8">
                        {projectStages.map((stage, index) => (
                            <div key={index} className="border-l-4 border-green-600 bg-white p-8 rounded-lg shadow-lg">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <h3 className="text-2xl font-bold">{stage.name}</h3>
                                            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                                                {stage.status}
                                            </span>
                                        </div>
                                        <p className="text-lg text-slate-600 mb-4">{stage.details}</p>
                                        <div className="space-y-2 text-slate-600">
                                            <div className="flex justify-between">
                                                <span>Move-in Available:</span>
                                                <span className="font-medium">{stage.completion}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600 mb-2">Ready!</div>
                                            <div className="text-slate-600">For Move-in</div>
                                        </div>
                                        <Link href="#contact">
                                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                                                Sign me up!
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Accessibility */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Quick Access to Work and Entertainment</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Kladno offers the ideal combination of quiet living and excellent accessibility to Prague. 
                                In the ICON Park residential district, you have everything within reach - quality schools, 
                                kindergartens, shops, services, restaurants, sports facilities, and cycling paths.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Additionally, you can enjoy the proximity of nature while benefiting from excellent 
                                connections to both Kladno and the capital city.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {locationFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-center text-white font-bold">
                                            {feature.time}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{feature.feature}</div>
                                            <div className="text-sm text-slate-600">{feature.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img 
                                    src="/images/map.png" 
                                    alt="ICON Park Location Map" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Comfortable Living with Everything Within Reach</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the amenities that make ICON Park a perfect place to live
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {amenities.map((amenity, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="text-4xl mb-4">{amenity.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{amenity.name}</h3>
                                <p className="text-slate-600">{amenity.description}</p>
                            </div>
                        ))}
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
