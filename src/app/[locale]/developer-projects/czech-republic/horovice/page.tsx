'use client'
import React from "react";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowLeft, FiMapPin, FiHome, FiStar, FiPhone, FiMail, FiGrid, FiBox, FiZap, FiCheck, FiUsers, FiHeart, FiShield, FiWifi } from 'react-icons/fi';

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import GetInTuch from "../../../components/get-in-touch";
import Switcher from "../../../components/switcher";

const projectFeatures = [
    {
        name: "Location",
        value: "Hořovice",
        description: "Between Plzeň & Prague",
        icon: "📍"
    },
    {
        name: "Construction",
        value: "Brick",
        description: "300mm red brick walls",
        icon: "🧱"
    },
    {
        name: "Sound Insulation",
        value: "Premium",
        description: "Excellent privacy",
        icon: "🔇"
    },
    {
        name: "Custom Kitchens",
        value: "Included",
        description: "Tailored to your apartment",
        icon: "🍳"
    }
];

const apartmentTypes = [
    { type: "1+kk", size: "Various sizes", description: "Perfect for singles or couples" },
    { type: "2+kk", size: "Various sizes", description: "Ideal for young families" },
    { type: "3+kk", size: "Various sizes", description: "Great for growing families" },
    { type: "4+kk", size: "Various sizes", description: "Spacious family living" }
];

const locationFeatures = [
    { feature: "Plzeň", time: "30 min", description: "Quick access to Plzeň" },
    { feature: "Prague", time: "45 min", description: "Easy connection to capital" },
    { feature: "Local Services", time: "5 min", description: "Everything within reach" },
    { feature: "Nature", time: "2 min", description: "Green spaces nearby" }
];

const amenities = [
    { name: "Custom Kitchens", description: "Built-in kitchens tailored to your apartment", icon: "🍳" },
    { name: "Built-in Wardrobes", description: "Custom storage solutions included", icon: "👕" },
    { name: "Sound Insulation", description: "300mm brick walls for complete privacy", icon: "🔇" },
    { name: "Air Conditioning", description: "Preparation for climate control systems", icon: "❄️" },
    { name: "Smart Screens", description: "Preparation for electric screens and blinds", icon: "🪟" },
    { name: "Parking", description: "One reserved space per apartment", icon: "🚗" }
];

const apartmentStandards = [
    { name: "Sound-Insulating Walls", description: "300mm red brick construction for complete privacy" },
    { name: "Air Conditioning Prep", description: "Ready for climate control installation" },
    { name: "Smart Screen Prep", description: "Preparation for electric screens and blinds" },
    { name: "Custom Kitchen", description: "Kitchen tailored to your apartment layout" },
    { name: "Built-in Wardrobes", description: "Custom storage solutions included" },
    { name: "Security Doors", description: "High-quality entrance doors with security features" },
    { name: "Timeless Bathrooms", description: "Quality tiles and modern sanitary equipment" },
    { name: "Chemical-Free Floors", description: "Egger Eclic laminate floors from sustainable sources" },
    { name: "Wooden Doors", description: "Lamistone doors with wooden construction and stainless hardware" },
    { name: "French Windows", description: "Large windows with balcony, terrace, or garden access" }
];

const exteriorPhotos = [
    { src: "/images/projects/czech-republic/horovice/horovice-10.webp", alt: "Building Exterior View" },
    { src: "/images/projects/czech-republic/horovice/horovice-04.webp", alt: "Neighborhood View" },
    { src: "/images/projects/czech-republic/horovice/horovice-05.webp", alt: "Garden Areas" },
    { src: "/images/projects/czech-republic/horovice/horovice-06.webp", alt: "Parking Area" },
    { src: "/images/projects/czech-republic/horovice/horovice-08.webp", alt: "Playground" },
];

const interiorVisualizations = [
    { src: "/images/projects/czech-republic/horovice/horovice-01.webp", alt: "1+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-03.webp", alt: "2+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-07.webp", alt: "3+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-17.webp", alt: "4+kk Apartment Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-18.webp", alt: "Custom Kitchen Design" },
    { src: "/images/projects/czech-republic/horovice/horovice-19.webp", alt: "Built-in Wardrobes" },
    { src: "/images/projects/czech-republic/horovice/horovice-20.webp", alt: "Bathroom Design" },
    { src: "/images/projects/czech-republic/horovice/horovice-21.webp", alt: "Living Room Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-22.webp", alt: "Living Room Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-23.webp", alt: "Living Room Layout" },
    { src: "/images/projects/czech-republic/horovice/horovice-24.webp", alt: "Living Room Layout" }
];

const projectBenefits = [
    { name: "Community Living", description: "Active WhatsApp groups and resident feedback system" },
    { name: "Ongoing Development", description: "Continuous neighborhood improvements and enhancements" },
    { name: "Quality Materials", description: "Timeless design with durable, long-lasting materials" },
    { name: "Custom Solutions", description: "Kitchens and wardrobes tailored to each apartment" },
    { name: "Smart Preparation", description: "Ready for modern amenities like air conditioning" },
    { name: "Privacy Focus", description: "Excellent sound insulation for peaceful living" }
];

export default function HorovicePage() {
    const t = useTranslations('developerProjects.czechRepublic');
    const tCategories = useTranslations('developerProjects.categories');

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            
            {/* Hero Section */}
            <section
                style={{ backgroundImage: "url('/images/projects/czech-republic/horovice/horovice-08.webp')" }}
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
                            Bydlení Hořovice
                        </h3>
                        <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">
                            From the foundation up - a good place for life. We asked ourselves what an ideal place to live should look like, and then we created it.
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
                                Bydlení Hořovice represents our vision of creating an ideal place to live. Located between Plzeň and Prague, 
                                in a city that's growing and developing, this new neighborhood offers the perfect balance for those who 
                                don't want to live in a big city or village, but want everything within reach.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We've built this project from the foundation up with honest, thorough work. Our buildings are constructed 
                                as solid brick structures using quality red bricks that provide excellent sound insulation for privacy and peace. 
                                We've selected timeless materials that last, and we ensure custom kitchen and built-in wardrobe production 
                                tailored to your chosen apartment.
                            </p>
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-semibold text-green-800 mb-2">Community Focus</h3>
                                <p className="text-green-700">
                                    We live and breathe this project with pride. We're constantly building and improving our neighborhood, 
                                    staying connected with residents through WhatsApp groups and always turning feedback into action.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/horovice/horovice-06.webp" 
                                    alt="Bydlení Hořovice Project" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Benefits */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">What Makes Us Special</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the unique benefits that set Bydlení Hořovice apart
                        </p>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiMapPin className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Perfect Location</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                Located between Plzeň and Prague, in a city that's growing and developing. This new neighborhood offers 
                                everything you need: shops, kindergartens, work opportunities, healthcare, culture, and nature - all within reach.
                            </p>
                            <p className="text-slate-600">
                                Perfect for those who don't want to live in a big city or village, but want to have everything at hand.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHome className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Quality Construction</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                We want you to get an honest piece of our work for your money - an apartment that becomes your comfortable 
                                and valuable home. That's why we build our buildings as solid brick structures.
                            </p>
                            <p className="text-slate-600">
                                Using quality red bricks that provide excellent sound insulation for privacy and peace, with timeless design materials that last.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiUsers className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Active Community</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                We live and breathe this project with pride. We're constantly building and improving our neighborhood, 
                                staying connected with residents through WhatsApp groups and always turning feedback into action.
                            </p>
                            <p className="text-slate-600">
                                It's not just about how you feel behind your apartment door - home is made by pleasant neighbors, 
                                cleanliness throughout the neighborhood, a sense of security, and details like parking and playgrounds.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                                    <FiHeart className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Diverse Apartment Options</h3>
                            </div>
                            <p className="text-lg text-slate-600 mb-4">
                                Our neighborhood offers a diverse range of apartment layouts to create a varied and pleasant community. 
                                You'll find apartments for families with children, young couples starting out, and those seeking comfort 
                                and modern living with perfect access to services.
                            </p>
                            <p className="text-slate-600">
                                From 1+kk to 4+kk layouts, there's something for everyone's needs and lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apartment Standards */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Apartment Standards & Benefits</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Carefully thought-out and honest standards you won't find elsewhere
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {apartmentStandards.map((standard, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                                <div className="flex items-start gap-4">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">{standard.name}</h3>
                                        <p className="text-slate-600">{standard.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* External Building Views Gallery */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Neighborhood & Exterior Views</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Explore the beautiful neighborhood and architectural details of Bydlení Hořovice
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
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Interior Visualizations</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Discover the interior layouts and custom features for all apartment types
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

            {/* 3D Configurator */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">3D Apartment Configurator</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Create your perfect apartment interior through our interactive 3D configurator
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
                        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🏠</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Design Your Dream Home</h3>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Choose from a wide range of floor materials, tiles, and wall coverings. Select the color and shape of doors, 
                            or design your future kitchen that we'll custom-manufacture for you. Make buying an apartment more joy than worry.
                        </p>
                        <div className="grid lg:grid-cols-3 gap-8 mb-8">
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h4 className="font-semibold mb-2">Material Selection</h4>
                                <p className="text-slate-600 text-sm">Choose floors, tiles, and wall coverings</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🚪</span>
                                </div>
                                <h4 className="font-semibold mb-2">Door Design</h4>
                                <p className="text-slate-600 text-sm">Select colors and shapes for your doors</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🍳</span>
                                </div>
                                <h4 className="font-semibold mb-2">Kitchen Design</h4>
                                <p className="text-slate-600 text-sm">Design your custom kitchen layout</p>
                            </div>
                        </div>
                        <Link href="https://bydlenihorovice.cz/konfigurator-bytu" target="_blank">
                            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Launch 3D Configurator
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sample Apartment */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Visit Our Sample Apartment</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Want to see the equipment of your future apartment with your own eyes? Touch the materials, 
                                feel the surfaces, and explore the quality of workmanship?
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We'd be happy to welcome you to our sample apartment, right in Hořovice. Experience the quality 
                                and craftsmanship that goes into every detail of your future home.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">See real materials and finishes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">Experience the quality firsthand</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiCheck className="h-6 w-6 text-green-600 flex-shrink-0" />
                                    <span className="text-slate-700">Meet our team in person</span>
                                </div>
                            </div>
                            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Book Your Visit
                            </button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img 
                                    src="/images/projects/czech-republic/horovice/horovice-24.webp" 
                                    alt="Sample Apartment" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Accessibility */}
            <section className="relative lg:py-24 py-16 bg-slate-50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Perfect Location Between Two Cities</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Located between Plzeň and Prague, in a city that's growing and developing. This new neighborhood offers 
                                everything you need: shops, kindergartens, work opportunities, healthcare, culture, and nature - all within reach.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Perfect for those who don't want to live in a big city or village, but want to have everything at hand. 
                                Enjoy the proximity of nature while benefiting from excellent connections to both cities.
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
                                    alt="Bydlení Hořovice Location Map" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Available Units Info */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">Choose Your Apartment</h2>
                        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                            For detailed information about available units, pricing, and current availability, 
                            please contact our sales team directly.
                        </p>
                        <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
                            <div className="text-4xl font-bold text-green-600 mb-2">Contact Us</div>
                            <div className="text-xl mb-4">For Unit Information</div>
                            <Link href="#contact">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
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
