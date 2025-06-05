'use client'
import React from 'react'
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Link as Link2 } from 'react-scroll';
import { FiPhone } from "react-icons/fi";

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Switcher from '../components/switcher';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function Faq() {
    const t = useTranslations('faq');
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const sections = [
        { key: 'general', title: t('sections.general') },
        { key: 'buying', title: t('sections.buying') },
        { key: 'financing', title: t('sections.financing') },
        { key: 'selling', title: t('sections.selling') },
        { key: 'renting', title: t('sections.renting') }
    ];

    const questions = [
        { key: 'foreignersBuy', section: 'buying' },
        { key: 'popularCities', section: 'buying' },
        { key: 'marketPerformance', section: 'buying' },
        { key: 'buyingSteps', section: 'buying' },
        { key: 'feesAndTaxes', section: 'buying' },
        { key: 'needLawyer', section: 'buying' },
        { key: 'foreignersMortgage', section: 'financing' },
        { key: 'downPayment', section: 'financing' },
        { key: 'sellingTaxes', section: 'selling' },
        { key: 'sellingTime', section: 'selling' },
        { key: 'rentingInvestment', section: 'renting' },
        { key: 'tenantRights', section: 'renting' },
        { key: 'cadastralRegister', section: 'general' },
        { key: 'residencePermit', section: 'general' },
        { key: 'shortTermRentals', section: 'renting' }
    ];

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
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">{t('title')}</h3>
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
                                        duration={500} className="text-base font-medium navbar-link">{t('sections.general')}</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="buying" className="text-base font-medium navbar-link">{t('sections.buying')}</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="financing" className="text-base font-medium navbar-link">{t('sections.financing')}</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="selling" className="text-base font-medium navbar-link">{t('sections.selling')}</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 spy={true} activeClass="active" smooth={true} duration={500} to="renting" className="text-base font-medium navbar-link">{t('sections.renting')}</Link2></li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div className="p-6 rounded-md shadow-md dark:shadow-gray-800">
                                <h5 className="text-xl font-semibold mb-4">{t('title')}</h5>
                                <div className="grid grid-cols-1 gap-4">
                                    {sections.map((section, sectionIndex) => (
                                        <div key={section.key} className="mb-6">
                                            <h6 className="text-lg font-semibold mb-4">{section.title}</h6>
                                            {questions
                                                .filter(q => q.section === section.key)
                                                .map((question, index) => (
                                                    <div key={question.key} className="mb-4">
                                                        <button
                                                            onClick={() => toggleAccordion(index)}
                                                            className="flex justify-between items-center w-full text-left p-4 bg-gray-50 dark:bg-slate-800 rounded-md"
                                                        >
                                                            <span className="font-medium">{t(`questions.${question.key}.title`)}</span>
                                                            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                                                        </button>
                                                        {activeIndex === index && (
                                                            <div className="p-4 bg-white dark:bg-slate-900 rounded-b-md">
                                                                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                                                                    {t(`questions.${question.key}.content`)}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            <Switcher/>
        </>
    )
} 