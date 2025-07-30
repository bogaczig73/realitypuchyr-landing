'use client'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Switcher from '../components/switcher'
import { reviewsApi, Review } from '@/services/api'

const ReviewCard = ({ review, isExpanded, onToggle, t }: { review: Review, isExpanded: boolean, onToggle: () => void, t: any }) => {
    const MAX_LENGTH = 300;
    const shouldTruncate = review.description.length > MAX_LENGTH && !isExpanded;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{review.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className="flex items-center">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <i key={i} className="mdi mdi-star text-amber-400 text-xl"></i>
                    ))}
                </div>
            </div>
            
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-base">
                    {shouldTruncate 
                        ? `${review.description.substring(0, MAX_LENGTH)}...`
                        : review.description
                    }
                    {review.description.length > MAX_LENGTH && (
                        <button 
                            onClick={onToggle}
                            className="text-green-600 hover:text-green-700 ml-2 text-sm font-medium transition-colors duration-200 underline"
                        >
                            {isExpanded ? t('showLess') : t('readMore')}
                        </button>
                    )}
                </p>
            </div>
        </div>
    );
};

export default function ReviewsPage() {
    const t = useTranslations('reviews');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});

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

    const averageRating = reviews.length > 0 
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
        : 0;

    return (
        <>
            <Navbar navClass="" topnavClass={''} tagline={false}/>
            
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                            {t('description')}
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">{reviews.length}</div>
                                <div className="text-gray-600 dark:text-gray-300">{t('totalReviews')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">{averageRating.toFixed(1)}</div>
                                <div className="text-gray-600 dark:text-gray-300">{t('averageRating')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">5.0</div>
                                <div className="text-gray-600 dark:text-gray-300">{t('highestRating')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="relative py-16">
                <div className="container relative">
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">{t('loading')}</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <div className="text-red-500 text-lg mb-4">{error}</div>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                            >
                                {t('tryAgain')}
                            </button>
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">{t('noReviews')}</div>
                        </div>
                    ) : (
                        <>
                            {/* Reviews Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {reviews.map((review) => (
                                    <ReviewCard
                                        key={review.id}
                                        review={review}
                                        isExpanded={expandedReviews[String(review.id)] || false}
                                        onToggle={() => toggleReview(review.id)}
                                        t={t}
                                    />
                                ))}
                            </div>

                            {/* Load More Button (if needed in future) */}
                            {reviews.length > 12 && (
                                <div className="text-center mt-12">
                                    <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">
                                        {t('loadMore')}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('cta.title')}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                            {t('cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="/contact" 
                                className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                            >
                                {t('cta.contactButton')}
                            </a>
                            <a 
                                href="/list" 
                                className="btn border border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-md"
                            >
                                {t('cta.viewProperties')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
            <Switcher/>
        </>
    )
} 