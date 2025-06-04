import React from 'react'
import Navbar from '../components/navbar'
import Link from 'next/link'
import { FiArrowRight, FiFacebook, FiHexagon, FiInstagram, FiLinkedin, FiMail, FiPhone, FiTwitter } from 'react-icons/fi'
import { properties, servicesData } from '../data/data'
import { LiaBathSolid, LiaCompressArrowsAltSolid } from 'react-icons/lia'
import { BiBed } from 'react-icons/bi'
import Footer from '../components/footer'
import Image from 'next/image'
import Switcher from '../components/switcher'
import Property from '../components/property'

export default function Page() {
    const yearsOfExperience = new Date().getFullYear() - 2019;

    return (
        <>
            <Navbar navClass={''} topnavClass={''} tagline={false} />
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="contact-iframe" src="https://maps.app.goo.gl/QRhp383hsunG8P3Z8" style={{ border: '0' }} className="w-full h-[500px]" allowFullScreen></iframe>
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
                                        <h5 className="text-2xl font-medium">Pavel Puchýř <span className="text-base md:inline-block md:mt-0 mt-2"><span className="text-slate-400"><span className="mdi mdi-circle-medium align-middle md:inline-block hidden"></span> Broker</span> of <Link href="https://www.bcas.cz/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">Broker Consulting a.s.</Link></span></h5>

                                        <ul className="list-none mt-2 md:flex items-center md:divide-x-[1px] divide-slate-400">
                                            <li className="md:inline-flex flex">
                                                <ul className="text-amber-400 list-none">
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline ms-1 rtl:me-1 rtl:ms-0 text-black dark:text-white">5.00(30)</li>
                                                </ul>
                                            </li>

                                            <li className="md:inline-flex flex items-center md:mx-2 md:mt-0 mt-2 md:px-2"><FiPhone className="size-4 align-middle text-green-600 me-2" /> +420 733 781 696</li>

                                            <li className="md:inline-flex flex items-center md:mx-2 md:mt-0 mt-2 md:px-2">
                                                <ul className="list-none">
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="https://www.facebook.com/realitypuchyr" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600"><FiFacebook className="size-4" /></Link></li>
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="https://www.instagram.com/realitypuchyr/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600"><FiInstagram className="size-4" /></Link></li>
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="https://www.linkedin.com/in/pavel-puch%C3%BD%C5%99-5527aa160/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600"><FiLinkedin className="size-4" /></Link></li>
                                                    <li className="inline me-1 rtl:me-0 ms-0 rtl:ms-1"><Link href="mailto:pavel.puchyr@bcas.cz" className="btn btn-icon btn-sm border border-gray-300 dark:border-gray-400 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600 dark:hover:border-green-600"><FiMail className="size-4" /></Link></li>
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
                                <h5 className="text-xl font-medium mb-4">Contact me</h5>

                                <form>
                                    <p className="mb-0" id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label htmlFor="name" className="font-medium">Your Name:</label>
                                            <input name="name" id="name" type="text" className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" placeholder="Name :" />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="font-medium">Your Email:</label>
                                            <input name="email" id="email" type="email" className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" placeholder="Email :" />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="font-medium">Your Question:</label>
                                            <input name="subject" id="subject" className="form-input border !border-gray-200 dark:!border-gray-800 mt-2" placeholder="Subject :" />
                                        </div>

                                        <div>
                                            <label htmlFor="comments" className="font-medium">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="form-input border !border-gray-200 dark:!border-gray-800 mt-2 textarea" placeholder="Message :"></textarea>
                                        </div>

                                        <button type="submit" id="submit" name="send" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7 order-1 md:order-2">
                            <h5 className="text-xl font-medium">About me</h5>

                            <p className="text-slate-400 mt-3">With over {yearsOfExperience} years of experience in the real estate market, helping clients in Prague and the Central Bohemia region is more than just a job—it’s about building trust and delivering results. Honesty, diligence, and responsibility are at the core of every interaction, ensuring smooth transactions where both buyers and sellers feel satisfied and well taken care of.</p>
                            <p className="text-slate-400 mt-3">Success in real estate starts with mutual trust and a genuine connection. Whether you're buying or selling, the goal is to make the process transparent, efficient, and tailored to your needs. Let’s meet in person—I’d love to get to know you and discuss how we can achieve your real estate goals together.</p>
                            
                            <h5 className="text-xl font-medium mt-6">Services</h5>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                                {servicesData.map((item: typeof servicesData[number], index: number) => {
                                    return (
                                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                                            <div className="relative overflow-hidden text-transparent -m-3">
                                                <FiHexagon className="size-32 fill-green-600/5 mx-auto" />
                                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                                    <img src={item.image} className="size-12" alt="" />
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <Link href="" className="text-xl font-medium hover:text-green-600">{item.title}</Link>
                                                <p className="text-slate-400 mt-3">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <h5 className="text-xl font-medium mt-6">My Listings</h5>
                            <Property propertiesPerRow={2} showFeaturedText={false} limit={6}/>
                            
                            <div className="md:flex justify-center text-center mt-6">
                                <div className="md:w-full">
                                    <Link href="/list" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View More Properties <FiArrowRight className="ms-1" /></Link>
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
