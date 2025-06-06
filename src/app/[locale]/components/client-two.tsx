'use client'
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { reviewsApi, Review } from '@/services/api';
import { useTranslations } from 'next-intl';

const ReviewSlide = ({ review, isExpanded, onToggle, t }: { review: Review, isExpanded: boolean, onToggle: () => void, t: any }) => {
    const MAX_LENGTH = 250;
    const shouldTruncate = review.description.length > MAX_LENGTH && !isExpanded;

    return (
        <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-3">
            <div className="text-center mx-3">
                <p className="text-lg text-slate-400 italic">
                    {shouldTruncate 
                        ? `${review.description.substring(0, MAX_LENGTH)}...`
                        : review.description
                    }
                    {review.description.length > MAX_LENGTH && (
                        <button 
                            onClick={onToggle}
                            className="text-green-600 hover:text-green-700 ml-1 text-sm font-medium transition-colors duration-200"
                        >
                            {isExpanded ? t('showLess') : t('readMore')}
                        </button>
                    )}
                </p>

                <div className="text-center mt-5">
                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <li className="inline ms-1" key={`${review.id}-star-${i}`}><i className="mdi mdi-star"></i></li>
                        ))}
                    </ul>

                    <h6 className="mt-2 fw-semibold">{review.name}</h6>
                    <span className="text-slate-400 text-sm">{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default function ClientTwo() {
    const t = useTranslations('components.clientTwo');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            containScroll: 'trimSnaps',
            breakpoints: {
                '(min-width: 768px)': { slidesToScroll: 3 }
            }
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const toggleReview = (reviewId: string | number) => {
        setExpandedReviews(prev => ({
            ...prev,
            [String(reviewId)]: !prev[String(reviewId)]
        }));
    };

    useEffect(() => {
        reviewsApi.getAll()
            .then(setReviews)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <div className="container pb-16 pt-24">
                <div className="grid grid-cols-1 pb-12 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('title')}</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">{t('description')}</p>
                </div>

                <div className="flex justify-center relative mt-8">
                    <div className="relative w-full">   
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {loading ? (
                                    <div className="text-center">{t('loading')}</div>
                                ) : error ? (
                                    <div className="text-center text-red-500">{error}</div>
                                ) : (
                                    reviews.map((review) => (
                                        <ReviewSlide
                                            key={review.id}
                                            review={review}
                                            isExpanded={expandedReviews[String(review.id)] || false}
                                            onToggle={() => toggleReview(review.id)}
                                            t={t}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center gap-1.5 mt-6">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                        index === selectedIndex 
                                            ? 'bg-green-600 scale-125' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


