"use client"; // This is a client component 👈🏽
import { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { Link as Link2 } from 'react-scroll';

import { accordion } from "../data/data";
import { FiPhone } from "react-icons/fi";
import Switcher from "../components/switcher";

interface Accordion{
    title: string;
    content: string;
    type: string;
}

export default function Faq() {
    let [activeIndex, setActiveIndex] = useState<number | null>(0);
    let [activeGeneral, setGeneralIndex] = useState<number | null>(0);
    let [activeBuying, setBuyingIndex] = useState<number | null>(0);
    let [activeFinancing, setFinancingIndex] = useState<number | null>(0);
    let [activeSelling, setSellingIndex] = useState<number | null>(0);
    let [activeRenting, setRentingIndex] = useState<number | null>(0);

    let toggleAccordion = (index:number | null) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    let toggleGeneral = (index:number | null) => {
        if (activeGeneral === index) {
            setGeneralIndex(null);
        } else {
            setGeneralIndex(index);
        }
    };

    let toggleBuying = (index:number | null) => {
        if (activeBuying === index) {
            setBuyingIndex(null);
        } else {
            setBuyingIndex(index);
        }
    };

    let toggleFinancing = (index:number | null) => {
        if (activeFinancing === index) {
            setFinancingIndex(null);
        } else {
            setFinancingIndex(index);
        }
    };

    let toggleSelling = (index:number | null) => {
        if (activeSelling === index) {
            setSellingIndex(null);
        } else {
            setSellingIndex(index);
        }
    };

    let toggleRenting = (index:number | null) => {
        if (activeRenting === index) {
            setRentingIndex(null);
        } else {
            setRentingIndex(index);
        }
    };

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Frequently Asked Questions</h3>
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
            {/* <!-- End Hero --> */}
            {/* <!-- Start Section--> */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-700 p-6 sticky top-20">
                                <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                                    <li className="navbar-item p-0"><Link2 to="general" spy={true} activeClass="active"
                                        smooth={true}
                                        duration={500} className="text-base font-medium navbar-link">General Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="buying" className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="financing" className="text-base font-medium navbar-link">Financing Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="selling" className="text-base font-medium navbar-link">Selling Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="renting" className="text-base font-medium navbar-link">Renting Questions</Link2></li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="general" className="mt-8">
                                <h5 className="text-2xl font-semibold">General Questions</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordion.filter((section: Accordion) => section.type === "general").map((section:Accordion, index:number) => (
                                        <div key={index}

                                            className="relative shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                <button type="button" onClick={() => toggleGeneral(index)}
                                                    className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeGeneral === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                    <span>{section.title}</span>
                                                    <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeGeneral === index && (
                                                <div id="accordion-collapse-body-1">
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400 whitespace-pre-line">{section.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                    ))}
                                </div>
                            </div>

                            <div id="buying" className="mt-8">
                                <h5 className="text-2xl font-semibold">Buying Questions</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordion.filter((section: Accordion) => section.type === "buying").map((section:Accordion, index:number) => (
                                        <div key={index}

                                            className="relative shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                <button type="button" onClick={() => toggleBuying(index)}
                                                    className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeBuying === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                    <span>{section.title}</span>
                                                    <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeBuying === index && (
                                                <div id="accordion-collapse-body-1">
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400 whitespace-pre-line">{section.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                    ))}
                                </div>
                            </div>

                            <div id="financing" className="mt-8">
                                <h5 className="text-2xl font-semibold">Financing Questions</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordion.filter((section: Accordion) => section.type === "financing").map((section:Accordion, index:number) => (
                                        <div key={index}

                                            className="relative shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                <button type="button" onClick={() => toggleFinancing(index)}
                                                    className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeFinancing === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                    <span>{section.title}</span>
                                                    <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeFinancing === index && (
                                                <div>
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400 whitespace-pre-line">{section.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div id="selling" className="mt-8">
                                <h5 className="text-2xl font-semibold">Selling Questions</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordion.filter((section: Accordion) => section.type === "selling").map((section:Accordion, index:number) => (
                                        <div key={index}

                                            className="relative shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                <button type="button" onClick={() => toggleSelling(index)}
                                                    className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeSelling === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                    <span>{section.title}</span>
                                                    <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeSelling === index && (
                                                <div>
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400 whitespace-pre-line">{section.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div id="renting" className="mt-8">
                                <h5 className="text-2xl font-semibold">Renting Questions</h5>

                                <div id="accordion-collapse" data-accordion="collapse" className="mt-6">
                                    {accordion.filter((section: Accordion) => section.type === "renting").map((section:Accordion, index:number) => (
                                        <div key={index}

                                            className="relative shadow-sm shadow-gray-200 dark:shadow-gray-700 rounded-md overflow-hidden mt-4">
                                            <h2 className="text-base font-medium" id="accordion-collapse-heading-1">
                                                <button type="button" onClick={() => toggleRenting(index)}
                                                    className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeRenting === index ? 'bg-gray-50 dark:bg-slate-800 text-green-600' : ''}`}>
                                                    <span>{section.title}</span>
                                                    <svg className="w-4 h-4 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeRenting === index && (
                                                <div>
                                                    <div className="p-5">
                                                        <p className="text-slate-400 dark:text-gray-400 whitespace-pre-line">{section.content}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                        <div className="mt-6">
                            <Link2 to="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><FiPhone className="align-middle me-2"></FiPhone> Contact us</Link2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    );

}

