'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight, FiDribbble, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiShoppingCart, FiTwitter } from "react-icons/fi";
import {BsPencil} from 'react-icons/bs'
import {RiBehanceFill} from 'react-icons/ri'
import { useTranslations } from 'next-intl';

export default function Footer(){
    const t = useTranslations('components.footer');
    
    return (
        <>
            <footer className="relative bg-slate-900 dark:bg-slate-800 pt-24">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="relative py-16">
                            {/* <!-- Subscribe --> */}
                            <div className="relative w-full">
                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link href="#" className="text-[22px] focus:outline-none">
                                            <Image src="/images/logo-light.png" alt="" width={98} height={28}/>
                                        </Link>
                                        <p className="mt-6 text-gray-300">{t('description')}</p>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">{t('sitemap')}</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link href="/list" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('listing')}</span> </Link></li>
                                            <li className="mt-[10px]"><Link href="#services" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('services')}</span> </Link></li>
                                            <li className="mt-[10px]"><Link href="/faq" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>FAQ</span> </Link></li>
                                            <li className="mt-[10px]"><Link href="/blog" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('blog')}</span> </Link></li>
                                            <li className="mt-[10px]"><Link href="/contact" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('contact')}</span> </Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">{t('usefulLinks')}</h5>
                                        <ul className="list-none footer-list mt-6">
                                              <li><Link href="/blog/1" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('blogPost')}</span> </Link></li>
                                              <li className="mt-[10px]"><Link href="/blog/2" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('blogPost')}</span> </Link></li>
                                              <li className="mt-[10px]"><Link href="/terms" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('termsOfService')}</span> </Link></li>
                                              <li className="mt-[10px]"><Link href="/privacy" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span>{t('privacyPolicy')}</span> </Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">{t('contactDetails')}</h5>
                                        <div className="flex mt-6">
                                            <FiMapPin  className="w-5 h-5 text-green-600 me-3"></FiMapPin >
                                            <div className="">
                                                <h6 className="text-gray-300 mb-2">{t('address')}</h6>
                                                <Link href="https://maps.app.goo.gl/9YwTpPK67SnaomM36" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox">{t('viewOnGoogleMap')}</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <FiMail className="w-5 h-5 text-green-600 me-3"></FiMail>
                                            <div className="">
                                                <Link href="mailto:pavel.puchyr@bcas.cz" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">pavel.puchyr@bcas.cz</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <FiPhone className="w-5 h-5 text-green-600 me-3"></FiPhone >
                                            <div className="">
                                                <Link href="tel:+420733781696" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+420 733 781 696</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Subscribe --> */}
                        </div>
                    </div>
                </div>
                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <ul className="list-none md:text-end text-center">
                                <li className="inline ms-1"><Link href="https://www.facebook.com/realitypuchyr" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiFacebook className="h-4 w-4"></FiFacebook></Link></li>
                                <li className="inline ms-1"><Link href="https://www.instagram.com/realitypuchyr/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiInstagram className="h-4 w-4"></FiInstagram></Link></li>
                                <li className="inline ms-1"><Link href="https://www.linkedin.com/in/pavel-puch%C3%BD%C5%99-5527aa160/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiLinkedin className="h-4 w-4"></FiLinkedin></Link></li>
                                <li className="inline ms-1"><Link href="mailto:pavel.puchyr@bcas.cz" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiMail className="h-4 w-4"></FiMail></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}