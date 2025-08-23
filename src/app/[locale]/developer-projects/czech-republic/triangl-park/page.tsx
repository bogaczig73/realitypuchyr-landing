'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiCheck, FiMapPin, FiHome, FiStar, FiCalendar, FiUsers, FiPhone, FiMail, FiPlay } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import PhotoGallery from "../../components/photo-gallery";

const projectStages = [
    {
        name: "Third Stage",
        status: "Now Selling",
        startSale: "April 2025",
        startConstruction: "2Q 2025",
        completion: "3Q 2027",
        buildings: ["J", "K", "L", "M"],
        availableUnits: 38,
        image: "/images/property/developer_projects_czech_republic.webp"
    },
    {
        name: "Second Stage",
        status: "Completed",
        startSale: "April 2024",
        startConstruction: "1Q 2024",
        completion: "2Q 2026",
        buildings: ["F", "G", "H"],
        availableUnits: 0,
        image: "/images/property/developer_projects_czech_republic.webp"
    },
    {
        name: "First Stage",
        status: "Completed",
        startSale: "April 2022",
        startConstruction: "2Q 2022",
        completion: "4Q 2024",
        buildings: ["A", "B", "C", "D", "E"],
        availableUnits: 0,
        image: "/images/property/developer_projects_czech_republic.webp"
    }
];

const livingStyles = [
    {
        id: "garden-suite",
        name: "Garden Suite",
        number: "01",
        features: ["Private Garden", "Spacious Layout", "Quality Materials"],
        description: "Perfect for those who appreciate outdoor living and natural surroundings",
        image: "/images/projects/czech-republic/triangl-park/triangl-park-02.webp"
    },
    {
        id: "family-home",
        name: "Family Home",
        number: "02",
        features: ["Balconies or Loggias", "Comfortable Layout", "Natural Materials"],
        description: "Ideal for families seeking comfort and practical living spaces",
        image: "/images/projects/czech-republic/triangl-park/triangl-park-07.webp"
    },
    {
        id: "penthouse-lodge",
        name: "Penthouse Lodge",
        number: "03",
        features: ["Spacious Terraces", "Generous Dimensions", "Luxury Materials"],
        description: "Premium living with exclusive features and panoramic views",
        image: "/images/projects/czech-republic/triangl-park/triangl-park-15.webp"
    }
];

const locationFeatures = [
    { feature: "City Center", time: "10 min", description: "Easy access to Plzeň city center" },
    { feature: "Highway D5", time: "5 min", description: "Quick connection to major roads" },
    { feature: "Shopping Centers", time: "5 min", description: "OC Area Bory and OC Borská pole nearby" },
    { feature: "University", time: "5 min", description: "Západočeská univerzita in walking distance" }
];

const externalBuildingPhotos = [
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-02.webp", alt: "Building A - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-04.webp", alt: "Building C - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-05.webp", alt: "Building D - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-09.webp", alt: "Building H - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-10.webp", alt: "Building J - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-11.webp", alt: "Building K - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-16.webp", alt: "Building M - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-22.webp", alt: "Building M - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-23.webp", alt: "Building M - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-24.webp", alt: "Building M - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-26.webp", alt: "Building M - Exterior View" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-27.webp", alt: "Building M - Exterior View" }

];

const interiorVisualizations = [
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-01.webp", alt: "1+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-03.webp", alt: "3+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-07.webp", alt: "4+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-15.webp", alt: "1+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-17.webp", alt: "2+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-19.webp", alt: "4+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-25.webp", alt: "4+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-18.webp", alt: "3+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-20.webp", alt: "1+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/triangl-park/triangl-park-21.webp", alt: "2+kk Apartment Layout" },

];

export default function TrianglParkPage() {
    const t = useTranslations('developerProjects.czechRepublic');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/triangl-park/triangl-park-23.webp')" }}
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
                            Triangl Park
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            Unique residential concept in southern Plzeň-Bory with three distinct living standards
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white">38</div>
                                <div className="text-white/80">Available Units</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-white">93%</div>
                                <div className="text-white/80">Project Sold</div>
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
                            <h2 className="text-4xl font-bold mb-6">About the Project</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Triangl Park represents a unique residential concept in the southern district of Plzeň-Bory. 
                                This exceptional project stands out not only for its attractive location with easy access to 
                                Plzeň city center, but also for its comprehensive approach, quality standards, and above all, 
                                the unique opportunity to choose from three diverse living standards.
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">Special Offer</h3>
                                <p className="text-green-700">
                                    Now you only need to pay 20% of the apartment purchase price. The remaining amount 
                                    is due after the building inspection. Limited time offer!
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/triangl-park/triangl-park-27.webp" 
                                    alt="Triangl Park Project" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* External Building Views Gallery */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">External Building Views</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Explore the architectural beauty and design of all buildings in Triangl Park
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {externalBuildingPhotos.map((photo, index) => (
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

            {/* Living Styles */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Three Styles, Three Standards, Three Ways of Life</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Triangl Park offers a unique opportunity to choose apartments by style. Each style provides 
                            not only its own range of standards but also specific benefits in the form of relaxation zones, 
                            layout solutions, or views. What's your style?
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {livingStyles.map((style, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={style.image} 
                                        alt={style.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="text-center mb-6">
                                        <div className="text-6xl mb-4">{style.number}</div>
                                        <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                                        <p className="text-slate-600">{style.description}</p>
                                    </div>
                                    <div className="space-y-3">
                                        {style.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <FiCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 text-center">
                                        <Link href="#contact">
                                            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                                                View Available Units
                                            </button>
                                        </Link>
                                    </div>
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
                            Discover the interior layouts and designs for all apartment types and living styles
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

            {/* Project Stages */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Project Construction Stages</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Overview of individual project stages and construction schedule
                        </p>
                    </div>

                    <div className="space-y-8">
                        {projectStages.map((stage, index) => (
                            <div key={index} className={`border-l-4 ${stage.status === 'Now Selling' ? 'border-green-600' : 'border-slate-300'} bg-white p-8 rounded-lg shadow-lg`}>
                                <div className="grid lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <h3 className="text-2xl font-bold">{stage.name}</h3>
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                stage.status === 'Now Selling' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'
                                            }`}>
                                                {stage.status}
                                            </span>
                                        </div>
                                        <div className="space-y-2 text-slate-600">
                                            <div className="flex justify-between">
                                                <span>Start of Sales:</span>
                                                <span className="font-medium">{stage.startSale}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Construction Start:</span>
                                                <span className="font-medium">{stage.startConstruction}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Completion:</span>
                                                <span className="font-medium">{stage.completion}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-sm text-slate-500">Buildings: </span>
                                            <span className="font-medium">{stage.buildings.join(', ')}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600 mb-2">{stage.availableUnits}</div>
                                            <div className="text-slate-600">Available Units</div>
                                            {stage.status === 'Now Selling' && (
                                                <Link href="#contact">
                                                    <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                                                        Select Your Unit
                                                    </button>
                                                </Link>
                                            )}
                                        </div>
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
                            <h2 className="text-4xl font-bold mb-6">Excellent Location & Accessibility</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Bory is a modern and fully equipped district with perfect access to services, education, 
                                work, and the city center. Excellent accessibility to Plzeň city center by public transport 
                                in just a few minutes, great local civic amenities, rich sports activities, and forest areas 
                                within walking distance make Triangl Park an exceptionally attractive location and, above all, 
                                a very pleasant place to live.
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
                                    alt="Triangl Park Location Map" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifestyle & Amenities */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Lifestyle & Amenities</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the exceptional lifestyle that Triangl Park offers to its residents
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-3xl font-bold mb-6">Modern Living Standards</h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Every apartment unit features at least one garden, loggia, balcony, or spacious terrace. 
                                All individual apartments also include their own basement storage space, ensuring convenience 
                                and practical living for every resident.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">Private outdoor spaces for every unit</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">Basement storage included</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">High-quality materials and finishes</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img 
                                            src="/images/property/residential.jpg" 
                                            alt="Modern Living Space" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img 
                                            src="/images/property/residential.jpg" 
                                            alt="Outdoor Living Area" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img 
                                            src="/images/property/residential.jpg" 
                                            alt="Quality Materials" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-square rounded-xl overflow-hidden">
                                        <img 
                                            src="/images/property/residential.jpg" 
                                            alt="Storage Solutions" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-12 text-center">
                        <h3 className="text-3xl font-bold mb-6">Virtual Tour Experience</h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Explore Triangl Park from the comfort of your home with our immersive virtual tour. 
                            Experience the project in 360° and discover every detail of your future home.
                        </p>
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏠</span>
                                </div>
                                <h4 className="font-semibold mb-2">Virtual Apartment</h4>
                                <p className="text-slate-600 text-sm">Explore sample apartments in detail</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏗️</span>
                                </div>
                                <h4 className="font-semibold mb-2">Construction Progress</h4>
                                <p className="text-slate-600 text-sm">See how the project is developing</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🗺️</span>
                                </div>
                                <h4 className="font-semibold mb-2">Location Overview</h4>
                                <p className="text-slate-600 text-sm">Discover the surrounding area</p>
                            </div>
                        </div>
                        <button className="mt-8 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                            <Link href="https://www.triangl-park.cz/vyber/model" target="_blank">
                                Start Virtual Tour
                            </Link>
                        </button>
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
