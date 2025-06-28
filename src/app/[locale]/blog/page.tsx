import Link from "next/link";
import { BlogService } from "@/services/blog-service";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Switcher from "../components/switcher";
import BlogCard from "../components/blog-card";

interface BlogPost {
    id: number;
    name: string;
    slug: string;
    content: string;
    tags: string[];
    date: string;
    pictures: string[];
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    language: string;
    createdAt: string;
    updatedAt: string;
}

type SearchParams = Promise<{ page?: string }>;
type Params = Promise<{ locale: string }>;

export default async function BlogPage({ 
    searchParams, 
    params 
}: { 
    searchParams: SearchParams;
    params: Params;
}) {
    const { page } = await searchParams;
    const { locale } = await params;
    const pageNumber = Number(page) || 1;
    const blogService = new BlogService(locale);
    let blogs: BlogPost[] = [];
    let totalPages = 1;
    let error = null;

    try {
        const response = await blogService.getAllBlogs(pageNumber);
        blogs = response || [];
        totalPages = Math.ceil(blogs.length / 10); // Assuming 10 items per page
    } catch (err) {
        console.error('Error fetching blogs:', err);
        error = err;
    }

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Blogs & News</h3>
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
                    {error ? (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-4">Unable to load blogs</h2>
                            <p className="text-slate-400 mb-6">We're having trouble connecting to our servers. Please try again later.</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : !blogs || blogs.length === 0 ? (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-4">No blogs found</h2>
                            <p className="text-slate-400">Check back later for new content.</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                                {blogs.map((item: BlogPost) => (
                                    <BlogCard key={item.id} item={item} />
                                ))}
                            </div>

                            {totalPages > 1 && (
                                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                                    <div className="md:col-span-12 text-center">
                                        <nav>
                                            <ul className="inline-flex items-center -space-x-px">
                                                <li>
                                                    <Link 
                                                        href={`/blog?page=${pageNumber > 1 ? pageNumber - 1 : 1}`}
                                                        className={`w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600 ${pageNumber === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    >
                                                        <FiChevronLeft className="text-[20px]"/>
                                                    </Link>
                                                </li>
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                                    <li key={pageNum}>
                                                        <Link 
                                                            href={`/blog?page=${pageNum}`}
                                                            className={`w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full ${
                                                                pageNum === pageNumber 
                                                                    ? 'text-white bg-green-600' 
                                                                    : 'text-slate-400 hover:text-white bg-white dark:bg-slate-900 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600'
                                                            } shadow-xs shadow-gray-200 dark:shadow-gray-700`}
                                                        >
                                                            {pageNum}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <Link 
                                                        href={`/blog?page=${pageNumber < totalPages ? pageNumber + 1 : totalPages}`}
                                                        className={`w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600 ${pageNumber === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    >
                                                        <FiChevronRight className="text-[20px]"/>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
            <Footer />
            <Switcher/>
        </>
    );
}