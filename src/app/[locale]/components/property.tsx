'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LiaCompressArrowsAltSolid } from "react-icons/lia";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { propertyApi } from '@/services/api';
import type { Property } from '@/types/property';
import { useTranslations } from 'next-intl';

export default function Property({
    propertiesPerRow = 3,
    showFeaturedText = true,
    limit = 6
}: {
    propertiesPerRow?: 1 | 2 | 3;
    showFeaturedText?: boolean;
    limit?: number;
}) {
    const t = useTranslations('components.property');
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await propertyApi.getAll(1, limit, '', 'ACTIVE');
                setProperties(response.properties);
            } catch (error) {
                setError('Failed to load properties. Please try again later.');
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [limit]);

    const handleImageLoad = (id: number) => {
        setImageLoading(prev => ({ ...prev, [id]: false }));
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <>
            <div className={`container ${showFeaturedText ? 'lg:mt-24 mt-16' : ''}`}>
                {showFeaturedText && (
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('featuredProperties')}</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">{t('featuredDescription')}</p>
                    </div>
                )}

                <div className={`grid ${propertiesPerRow === 3 ? 'lg:grid-cols-3' : propertiesPerRow === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]`}>
                    {properties.map((item) => (
                        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl dark:hover:shadow-xl shadow-gray-200 dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={item.id}>
                            <div className="relative">
                                {imageLoading[item.id] !== false && (
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                                )}
                                <Link href={`/property-detail/${item.id}`}>
                                    <Image 
                                        src={item.images.find(img => img.isMain)?.url || item.images[0]?.url || '/images/property/placeholder.webp'} 
                                        alt={item.name}
                                        width={0} 
                                        height={0} 
                                        sizes="100vw" 
                                        style={{width:"100%", height:"auto"}} 
                                        priority
                                        onLoad={() => handleImageLoad(item.id)}
                                        className={`${imageLoading[item.id] !== false ? 'opacity-0' : 'opacity-100'} cursor-pointer transition-transform duration-300 group-hover:scale-105`}
                                    />
                                </Link>

                                <div className="absolute top-4 end-4">
                                    <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow-sm shadow-gray-200 dark:shadow-gray-700 !rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600">
                                        <i className="mdi mdi-heart mdi-18px"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="pb-6">
                                    <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
                                </div>

                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                    {item.size && (
                                        <li className="flex items-center me-4">
                                            <LiaCompressArrowsAltSolid className="me-2 text-green-600"/>
                                            <span>{item.size} m²</span>
                                        </li>
                                    )}

                                    {item.beds && (
                                        <li className="flex items-center me-4">
                                            <LuBedDouble className="me-2 text-green-600"/>
                                            <span>{item.beds} {t('beds')}</span>
                                        </li>
                                    )}

                                    {item.layout && (
                                        <li className="flex items-center">
                                            <i className="mdi mdi-floor-plan text-2xl me-2 text-green-600"></i>
                                            <span>{item.layout}</span>
                                        </li>
                                    )}
                                </ul>

                                <ul className="pt-6 flex justify-between items-center list-none">
                                    <li>
                                        <span className="text-slate-400">{t('price')}</span>
                                        <p className="text-lg font-medium">
                                            {formatPrice(parseFloat(String(item.price || '0')))} Kč
                                            {item.discountedPrice && (
                                                <span className="text-sm text-red-500 ml-2 line-through">
                                                    {formatPrice(parseFloat(String(item.discountedPrice)))} Kč
                                                </span>
                                            )}
                                        </p>
                                    </li>

                                    {item.status && (
                                        <li>
                                            <span className="text-slate-400">{t('status')}</span>
                                            <p className="text-lg font-medium text-green-600">
                                                {item.status === 'ACTIVE' ? t('forSale') : item.status === 'SOLD' ? t('sold') : item.status}
                                            </p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

