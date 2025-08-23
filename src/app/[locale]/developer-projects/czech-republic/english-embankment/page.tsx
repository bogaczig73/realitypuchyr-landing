'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiMapPin, FiHome, FiStar, FiPhone, FiMail, FiGrid, FiBox, FiZap } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";
import PhotoGallery from "../../components/photo-gallery";

const projectFeatures = [
    {
        name: "Commercial Space",
        value: "2,800 m²",
        description: "Available for rent",
        icon: "🏢"
    },
    {
        name: "Residential Units",
        value: "200",
        description: "Apartments for sale",
        icon: "🏠"
    },
    {
        name: "Parking Spaces",
        value: "400",
        description: "Including EV charging",
        icon: "🚗"
    },
    {
        name: "Floors",
        value: "8",
        description: "Above ground levels",
        icon: "🏗️"
    }
];

const apartmentTypes = [
    { type: "1+kk", size: "From 30 m²", description: "Compact luxury living" },
    { type: "2+kk", size: "Various sizes", description: "Perfect for couples" },
    { type: "3+kk", size: "Various sizes", description: "Ideal for families" },
    { type: "4+kk", size: "Various sizes", description: "Spacious family living" },
    { type: "Penthouse", size: "Custom layouts", description: "Exclusive top-floor living" },
    { type: "Maisonette", size: "Custom layouts", description: "Unique multi-level design" }
];

const locationFeatures = [
    { feature: "Republic Square", time: "2 min", description: "Cathedral of St. Bartholomew" },
    { feature: "Radbuza River", time: "3 min", description: "Beautiful river embankment" },
    { feature: "City Parks", time: "5 min", description: "Plzeň's most beautiful parks" },
    { feature: "Cultural Center", time: "5 min", description: "Theaters, museums, galleries" }
];

const amenities = [
    { name: "Park Courtyard", description: "Private green inner courtyard with park design", icon: "🌳" },
    { name: "Premium Standards", description: "Triple-glazed windows, wooden floors, underfloor heating", icon: "✨" },
    { name: "Smart Technology", description: "Recuperation and modern comfort systems", icon: "🏠" },
    { name: "EV Parking", description: "Specially adapted parking with fast charging", icon: "⚡" },
    { name: "River Views", description: "Panoramic views of the Radbuza River", icon: "🌊" },
    { name: "City Views", description: "Exclusive views of Plzeň's historic center", icon: "🏛️" }
];

const exteriorPhotos = [
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-07.webp", alt: "River Front View", building: "River Front" },
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-05.webp", alt: "Park Courtyard", building: "Park Area" },
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-06.webp", alt: "Terrace Design", building: "Terraces" },
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp", alt: "Building Entrance", building: "Entrance" },
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-08.webp", alt: "Night View", building: "Night View" }
];

const interiorVisualizations = [
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-04.webp", alt: "Penthouse Design", type: "Penthouse" },
    { src: "/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-02.webp", alt: "Luxury Kitchen", type: "Kitchen" },
];

const projectPartners = [
    { name: "INVESTIKA", role: "Real Estate Fund", description: "One of the largest players on the Czech real estate market" },
    { name: "BC Real", role: "Developer", description: "19+ years of experience in Plzeň, 14 completed projects" },
    { name: "Broker Consulting", role: "Sales & Financing", description: "Most requested independent consultant in Czech Republic" }
];

export default function EnglishEmbankmentPage() {
    const t = useTranslations('developerProjects.czechRepublic');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-03.webp')" }}
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
                            English Embankment Palace
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            Exceptional in all parameters - Luxury palace-style living in the heart of Plzeň's historic center
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-6">
                            {projectFeatures.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-white">{feature.value}</div>
                                    <div className="text-white/80 text-sm">{feature.name}</div>
                                </div>
                            ))}
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
                                The English Embankment Palace is growing in the very heart of Plzeň's historic city center, 
                                where new construction is an exceptionally rare phenomenon. Just a few steps from Republic 
                                Square with the Cathedral of St. Bartholomew and surrounded by Plzeň's most beautiful parks 
                                and the popular Radbuza River embankment.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Simply put, this is a unique opportunity to purchase a luxury city apartment in a perfect 
                                location at a prestigious address. The palace-style building from the drawing board of 
                                renowned architects from PRO-STORY studio will bring its residents not only exclusive views 
                                but also a residential inner courtyard with park landscaping.
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">Construction in Progress</h3>
                                <p className="text-green-700">
                                    Project realization began in June 2024 and construction is already in full swing. 
                                    Completion is scheduled for early 2028.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/anglicke-nabrezi/anglicke-nabrezi-05.webp" 
                                    alt="English Embankment Palace" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Features Grid */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Project Features</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover what makes English Embankment Palace exceptional in all parameters
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiGrid className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Commercial Space</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                The first two above-ground floors will offer nearly three thousand square meters of 
                                commercial space for rent. The first floor will be elevated with approximately 1,200 m² 
                                of retail space, suitable for brand stores, showrooms, or services.
                            </p>
                            <p className="text-slate-600">
                                The second floor will have around 1,600 m² of offices and several apartments available.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHome className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Exclusive Apartments</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                From the third to the eighth floor, exclusively residential units will be located. 
                                The entire project will offer approximately 200 apartments of all layouts and sizes 
                                for sale.
                            </p>
                            <p className="text-slate-600">
                                From the smallest 1+kk with about 30 m² to beautiful spacious penthouses and 
                                maisonettes with custom-designed layouts and terraces overlooking the city center 
                                or the Radbuza River.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiBox className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Hassle-free Parking</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                Parking will be available in a total of four floors, providing sufficient parking 
                                spaces for the administrative high-rise building, as well as for shops, offices, 
                                and apartments.
                            </p>
                            <p className="text-slate-600">
                                We're planning nearly 400 parking spaces. A novelty will be specially adapted 
                                parking spaces for electric vehicles with the possibility of faster charging.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiZap className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Park Courtyard</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                Thanks to uniquely designed green inner courtyards, you'll gain peace and privacy 
                                whenever you desire it. And this at an exclusive address in the very center of 
                                the living West Bohemian metropolis.
                            </p>
                            <p className="text-slate-600">
                                The surrounding street space of the new palace will also be improved and beautified. 
                                The prestige of the location will be emphasized by the building's architecture 
                                with a series of terraces planted with trees and ornamental shrubs.
                            </p>
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
                            Explore the architectural beauty and design of the English Embankment Palace
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
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-sm font-semibold">{photo.building}</div>
                                        <div className="text-xs opacity-90">Exterior View</div>
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
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <div className="text-sm font-semibold">{visualization.type}</div>
                                        <div className="text-xs opacity-90">Interior Design</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Standards */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Highest Standard in Plzeň</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Luxury and comfort as standard - exceptional execution in every detail
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

            {/* Location & Accessibility */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Exclusive Location</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Exceptional location in the very heart of the historic city center, just a few steps 
                                from Republic Square. Surrounded by the river and Plzeň's most beautiful parks. 
                                Culture, gastronomy, business, nightlife – everything that makes the city alive and 
                                inspiring is now just a few steps from your apartment.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {locationFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
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
                                    alt="English Embankment Location Map" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Partners */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Quality Guarantee</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Strong partnerships guarantee the highest quality
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {projectPartners.map((partner, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiStar className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                                <p className="text-green-600 font-medium mb-3">{partner.role}</p>
                                <p className="text-slate-600">{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Available Units Info */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">Find Your Apartment</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            For detailed information about available units, pricing, and current availability, 
                            please contact our sales team directly.
                        </p>
                        <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                            <div className="text-4xl font-bold text-green-600 mb-2">Contact Us</div>
                            <div className="text-xl mb-4">For Unit Information</div>
                            <Link href="#contact">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4">
                                    Get Unit Details
                                </button>
                            </Link>
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
