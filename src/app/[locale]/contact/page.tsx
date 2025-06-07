'use client'
import React, { useState } from 'react'
import Navbar from '../../[locale]/components/navbar'
import Link from 'next/link'
import { FiArrowRight, FiFacebook, FiHexagon, FiInstagram, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'
import { LiaBathSolid, LiaCompressArrowsAltSolid } from 'react-icons/lia'
import { BiBed } from 'react-icons/bi'
import Footer from '../../[locale]/components/footer'
import Image from 'next/image'
import Switcher from '../../[locale]/components/switcher'
import Property from '../../[locale]/components/property'
import { useTranslations } from 'next-intl'
import GoogleMap from '../components/GoogleMap'
import { ContactFormService } from '../../../services/contact-form'

const servicesData = [
    {
        image:'/images/rent.png',
        titleKey: 'realEstate',
        descKey: 'realEstate'
    },
    {
        image:'/images/buy.png',
        titleKey: 'financialServices',
        descKey: 'financialServices'
    },
    {
        image:'/images/sell.png',
        titleKey: 'careerOpportunities',
        descKey: 'careerOpportunities'
    }
]

export default function Page() {
    const yearsOfExperience = new Date().getFullYear() - 2019;
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phoneNumber: ''
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: null, message: '' });

        try {
            const contactFormService = ContactFormService.getInstance();
            await contactFormService.submitForm(formData);
            
            setStatus({ type: 'success', message: t('form.successMessage') });
            setFormData({ name: '', email: '', subject: '', message: '', phoneNumber: '' });
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: error instanceof Error ? error.message : t('form.errorMessage') 
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Navbar navClass={''} topnavClass={''} tagline={false} />
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <GoogleMap 
                            latitude={50.10334373610132} 
                            longitude={14.434238320049817} 
                            height="500px"
                            showPlaces={false}
                        />
                    </div>
                </div>
            </div>
            <section className="relative md:py-24 pt-24 pb-16">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="p-6 rounded-md bg-green-600/10 dark:bg-green-600/20">
                            <div className="md:flex items-center">
                                <Image src='/images/agency/pavel-2.webp' width={112} height={112} className="rounded-full object-cover w-28 h-28" alt="" />

                                <div className="md:ms-4 md:mt-0 mt-4 md:flex justify-between items-end">
                                    <div>
                                        <h5 className="text-2xl font-medium">Pavel Puchýř <span className="text-base md:inline-block md:mt-0 mt-2"><span className="text-slate-400"><span className="mdi mdi-circle-medium align-middle md:inline-block hidden"></span> {t('broker')}</span> {t('of')} <Link href="https://www.bcas.cz/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Broker Consulting a.s.</Link></span></h5>

                                        <ul className="list-none mt-2 md:flex items-center md:divide-x-[1px] divide-slate-400">
                                            <li className="md:inline-flex flex">
                                                <ul className="text-amber-400 list-none">
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0 text-black dark:text-white">{t('rating')}</li>
                                                </ul>
                                            </li>

                                            <li className="md:inline-flex flex items-center md:mx-2 md:mt-0 mt-2 md:px-2"><FiPhone className="size-4 align-middle text-green-600 me-2" /> {t('phone')}: +420 733 781 696</li>

                                            <li className="md:inline-flex flex items-center md:mx-2 md:mt-0 mt-2 md:px-2">
                                                <ul className="list-none">
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="https://www.facebook.com/realitypuchyr" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600" aria-label={t('socialMedia.facebook')}><FiFacebook className="size-4" /></Link></li>
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="https://www.instagram.com/realitypuchyr/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600" aria-label={t('socialMedia.instagram')}><FiInstagram className="size-4" /></Link></li>
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="https://www.linkedin.com/in/pavel-puch%C3%BD%C5%99-5527aa160/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600" aria-label={t('socialMedia.linkedin')}><FiLinkedin className="size-4" /></Link></li>
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="mailto:pavel.puchyr@bcas.cz" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600" aria-label={t('socialMedia.email')}><FiMail className="size-4" /></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mt-6">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5 order-1 md:order-1">
                            <div className="p-6 rounded shadow-sm shadow-gray-200 dark:shadow-gray-700 sticky top-20">
                                <h5 className="text-xl font-medium mb-4">{t('contactMe')}</h5>

                                <form onSubmit={handleSubmit}>
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    {status.type && (
                                        <div className={`p-4 mb-4 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {status.message}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label htmlFor="name" className="font-medium">{t('yourName')}:</label>
                                            <input 
                                                name="name" 
                                                id="name" 
                                                type="text" 
                                                className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" 
                                                placeholder={t('form.namePlaceholder')}
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="font-medium">{t('yourEmail')}:</label>
                                            <input 
                                                name="email" 
                                                id="email" 
                                                type="email" 
                                                className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" 
                                                placeholder={t('form.emailPlaceholder')}
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phoneNumber" className="font-medium">{t('yourPhone')}:</label>
                                            <input 
                                                name="phoneNumber" 
                                                id="phoneNumber" 
                                                type="tel" 
                                                className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" 
                                                placeholder={t('form.phonePlaceholder')}
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="font-medium">{t('yourQuestion')}:</label>
                                            <input 
                                                name="subject" 
                                                id="subject" 
                                                className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" 
                                                placeholder={t('form.subjectPlaceholder')}
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="font-medium">{t('yourComment')}:</label>
                                            <textarea 
                                                name="message" 
                                                id="message" 
                                                className="form-input border !border-gray-200 dark:!border-gray-800 mt-2 textarea" 
                                                placeholder={t('form.messagePlaceholder')}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">{t('send')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7 order-1 md:order-2">
                            <h5 className="text-xl font-medium">{t('aboutMe')}</h5>

                            <p className="text-slate-400 mt-3">{t('aboutMeText', { years: yearsOfExperience })}</p>
                            <p className="text-slate-400 mt-3">{t('aboutMeText2')}</p>
                            
                            <h5 className="text-xl font-medium mt-6">{t('services')}</h5>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                                {servicesData.map((item, index) => {
                                    return (
                                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                                            <div className="relative overflow-hidden text-transparent -m-3">
                                                <FiHexagon className="size-32 fill-green-600/5 mx-auto" />
                                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                                    <img src={item.image} className="size-12" alt="" />
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <Link href="" className="text-xl font-medium hover:text-green-600">{t(`servicesData.${item.titleKey}.title`)}</Link>
                                                <p className="text-slate-400 mt-3">{t(`servicesData.${item.descKey}.description`)}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <h5 className="text-xl font-medium mt-6">{t('myListings')}</h5>
                            <Property propertiesPerRow={2} showFeaturedText={false} limit={6}/>
                            
                            <div className="md:flex justify-center text-center mt-6">
                                <div className="md:w-full">
                                    <Link href="/list" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">{t('viewMore')} <FiArrowRight className="ms-1" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    )
} 