import Image from "next/image";
import Link from "next/link";
import { BlogService, BlogPost } from "@/services/blog-service";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Switcher from "../../components/switcher";
import { notFound } from "next/navigation";
import React from "react";
import {FiFacebook, FiGithub, FiGitlab, FiInstagram, FiLinkedin, FiMail, FiMessageCircle, FiSearch, FiTwitter, FiUser, FiYoutube} from 'react-icons/fi'
import { useTranslations } from 'next-intl';

type Params = Promise<{ slug: string; locale: string }>;

export default async function Page({ params }: { params: Params }) {
    const { slug, locale } = await params;
    const blogService = new BlogService();
    let blog: BlogPost;
    let otherBlogs: BlogPost[] = [];
    let error = null;
    const t = useTranslations('blog');
    
    try {
        // Get the current blog first
        blog = await blogService.getBlogBySlug(slug);
        
        // Then fetch other blogs
        const allBlogs = await blogService.getAllBlogs(1, 3); // Get 3 recent blogs
        // Filter out the current blog from the list
        otherBlogs = allBlogs.filter(b => b.slug !== slug);
    } catch (err) {
        console.error('Error fetching blogs:', err);
        error = err;
        notFound();
    }
   
    return(
        <>
          <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
          <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white mb-3">{blog.name}</h3>

                        <ul className="list-none mt-6">
                            <li className="inline-block text-white/50 mx-5"> <span className="text-white block">{t('author')} :</span> <span className="block">Pavel Puchýř</span></li>
                            <li className="inline-block text-white/50 mx-5"> <span className="text-white block">{t('date')} :</span> <span className="block">{new Date(blog.date).toLocaleDateString()}</span></li>
                            <li className="inline-block text-white/50 mx-5"> <span className="text-white block">{t('time')} :</span> <span className="block">{Math.ceil(blog.content.split(/\s+/).length / 250)} {t('readTime')}</span></li>
                        </ul>
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
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:order-1 order-2">
                            <div className="relative overflow-hidden rounded-xl shadow-sm shadow-gray-200 dark:shadow-gray-800">
                                <Image 
                                    src={blog.pictures[0]} 
                                    alt={blog.name} 
                                    width={0} 
                                    height={0} 
                                    sizes="100vw" 
                                    style={{width:"100%", height:"auto"}}
                                />

                                <div className="p-6">
                                    <div 
                                        className="blog-content prose dark:prose-invert max-w-none"
                                        dangerouslySetInnerHTML={{ 
                                            __html: blog.content.replace(/\n/g, '<br>') 
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:order-2 order-1">
                            <div className="sticky top-20">
                                <form>
                                    <div>
                                        <label htmlFor="searchname" className="font-medium text-lg">{t('searchProperties')}</label>
                                        <div className="relative mt-2">
                                            <FiSearch className="text-lg absolute top-[8px] start-3" width={18}/>
                                            <input name="search" id="searchname" type="text" className="form-input border !border-gray-200 dark:!border-gray-800 !ps-10" placeholder="Search" />
                                        </div>
                                    </div>
                                </form>

                                <h5 className="font-medium text-lg mt-[30px]">{t('recentPosts')}</h5>
                                {otherBlogs.map((otherBlog) => (
                                    <div key={otherBlog.id} className="flex items-center mt-4">
                                        <Image 
                                            src={otherBlog.pictures[0]} 
                                            className="h-16 rounded-md shadow-sm shadow-gray-200 dark:shadow-gray-800" 
                                            alt={otherBlog.name}
                                            width={96} 
                                            height={64}
                                        />
                                        <div className="ms-3">
                                            <Link href={`/blog/${otherBlog.slug}`} className="font-medium hover:text-green-600">{otherBlog.name}</Link>
                                            <p className="text-sm text-slate-400">{new Date(otherBlog.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))}

                                <h5 className="font-medium text-lg mt-[30px]">{t('socialSites')}</h5>
                                <ul className="list-none mt-4">
                                    <li className="inline ms-1"><Link href="https://www.facebook.com/realitypuchyr" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiFacebook className="h-4 w-4"></FiFacebook></Link></li>
                                    <li className="inline ms-1"><Link href="https://www.instagram.com/realitypuchyr/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiInstagram className="h-4 w-4"></FiInstagram></Link></li>
                                    <li className="inline ms-1"><Link href="https://www.linkedin.com/in/pavel-puch%C3%BD%C5%99-5527aa160/" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiLinkedin className="h-4 w-4"></FiLinkedin></Link></li>
                                    <li className="inline ms-1"><Link href="https://www.youtube.com/@pavelpuchyrreality941" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiYoutube className="h-4 w-4"></FiYoutube></Link></li>
                                    <li className="inline ms-1"><Link href="mailto:pavel.puchyr@bcas.cz" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-green-600 hover:text-white hover:bg-green-600"><FiMail className="h-4 w-4"></FiMail></Link></li>
                                </ul>
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