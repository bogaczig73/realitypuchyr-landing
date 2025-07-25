"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Form from "../components/form";
import Switcher from "../components/switcher";
import { ApiClient } from '@/services/api-client';
import { Property, Pagination } from '@/types/property';

import { LiaCompressArrowsAltSolid } from "react-icons/lia";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function ListContent() {
    const t = useTranslations('components.property');
    const tCommon = useTranslations('components.form');
    const tList = useTranslations('list');
    const searchParams = useSearchParams();
    const [properties, setProperties] = useState<Property[]>([]);
    const [pagination, setPagination] = useState<Pagination>({
        total: 0,
        pages: 0,
        currentPage: 1,
        limit: 12
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const fetchProperties = async (page: number) => {
        try {
            setLoading(true);
            const status = searchParams.get('status') || undefined;
            const search = searchParams.get('search') || undefined;
            const categoryId = searchParams.get('categoryId') || undefined;
            
            const apiClient = ApiClient.getInstance();
            const response = await apiClient.getProperties({
                page,
                limit: 12,
                search,
                status,
                categoryId
            });
            
            setProperties(response.properties);
            setPagination(response.pagination);
            setError(null);
        } catch (err) {
            setError('Failed to load properties. Please try again later.');
            console.error('Error fetching properties:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties(1);
    }, [searchParams]);

    const handlePageChange = (page: number) => {
        fetchProperties(page);
    };

    return (
        <>
            <Navbar navClass="navbar-white" topnavClass={""} tagline={false} />
            <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">{tList('listViewLayout', { defaultValue: 'List View Layout' })}</h3>
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
            <div className="container relative -mt-16 z-1">
                <div className="grid grid-cols-1">
                    <Form />
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container relative">
                    {loading ? (
                        <div className="text-center py-10">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">{tCommon('loading')}</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-10 text-red-600">
                            {tList('loadError', { defaultValue: error })}
                        </div>
                    ) : properties.length === 0 ? (
                        <div className="text-center py-10">
                            <p className="text-gray-600 text-lg">{tList('noPropertiesFound', { defaultValue: 'No properties found matching your search criteria.' })}</p>
                            <p className="text-gray-500 mt-2">{tList('tryAdjustingFilters', { defaultValue: 'Try adjusting your filters or search terms.' })}</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                                {properties.map((property) => (
                                    <div key={property.id} className="group rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl shadow-gray-200 dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 w-full mx-auto xl:max-w-4xl">
                                        <div className="md:flex">
                                            <div className="relative md:w-1/3">
                                                {(() => {
                                                    const mainImage = property.images.find(img => img.isMain);
                                                    const fallbackImage = property.images[0];
                                                    const finalImage = mainImage || fallbackImage;
                                                    return (
                                                        <Image 
                                                            className='h-full w-full object-cover' 
                                                            src={finalImage?.url || '/images/property/placeholder.webp'} 
                                                            alt={property.name}
                                                            width={400}
                                                            height={300}
                                                            style={{ width: '100%', height: '100%' }}
                                                        />
                                                    );
                                                })()}
                                                <div className="absolute top-4 end-4">
                                                    <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700 !rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
                                                        <i className="mdi mdi-heart mdi-18px"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="p-6 md:w-2/3">
                                                <div className="md:pb-4 pb-6">
                                                    <Link href={`/property-detail/${property.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">
                                                        {property.name}
                                                    </Link>
                                                </div>

                                                <ul className="md:py-4 py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                    <li className="flex items-center me-4">
                                                        <LiaCompressArrowsAltSolid width={20} className="me-2 text-green-600 text-2xl" />
                                                        <span>{property.size}</span>
                                                    </li>

                                                    <li className="flex items-center me-4">
                                                        <LuBedDouble width={20} className="me-2 text-green-600 text-2xl" />
                                                        <span>{property.beds} {t('beds')}</span>
                                                    </li>

                                                    <li className="flex items-center">
                                                        <LuBath width={20} className="me-2 text-green-600 text-2xl" />
                                                        <span>{property.baths} {t('baths')}</span>
                                                    </li>
                                                </ul>

                                                <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                                    <li>
                                                        <span className="text-slate-400">{t('price')}</span>
                                                        <p className="text-lg font-medium">
                                                            {property.priceHidden ? (
                                                                <span className="text-green-600">{t('contactForInfo')}</span>
                                                            ) : (
                                                                <>{formatPrice(property.price)} Kč</>
                                                            )}
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {pagination.pages > 1 && (
                                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                                    <div className="md:col-span-12 text-center">
                                        <nav>
                                            <ul className="inline-flex items-center -space-x-px">
                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                                                        disabled={pagination.currentPage === 1}
                                                        className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        <FiChevronLeft className="text-[20px]" />
                                                    </button>
                                                </li>
                                                {[...Array(pagination.pages)].map((_, index) => (
                                                    <li key={index + 1}>
                                                        <button
                                                            onClick={() => handlePageChange(index + 1)}
                                                            className={`w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full ${
                                                                pagination.currentPage === index + 1
                                                                    ? 'text-white bg-green-600'
                                                                    : 'text-slate-400 hover:text-white bg-white dark:bg-slate-900 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600'
                                                            } shadow-xs shadow-gray-200 dark:shadow-gray-700`}
                                                        >
                                                            {index + 1}
                                                        </button>
                                                    </li>
                                                ))}
                                                <li>
                                                    <button
                                                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                                                        disabled={pagination.currentPage === pagination.pages}
                                                        className="w-10 h-10 inline-flex justify-center items-center mx-1 !rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-xs shadow-gray-200 dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        <FiChevronRight className="text-[20px]" />
                                                    </button>
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
            <Switcher />
        </>
    );
}

export default function List() {
    return (
        <Suspense fallback={
            <div className="text-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
            </div>
        }>
            <ListContent />
        </Suspense>
    );
}