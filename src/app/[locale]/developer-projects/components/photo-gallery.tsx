'use client'
import React, { useState } from 'react';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PhotoGalleryProps {
    photos: {
        src: string;
        alt: string;
    }[];
    title: string;
    subtitle?: string;
}

export default function PhotoGallery({ photos, title, subtitle }: PhotoGalleryProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const openPhoto = (index: number) => {
        setSelectedPhoto(index);
        document.body.style.overflow = 'hidden';
    };

    const closePhoto = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = 'unset';
    };

    const nextPhoto = () => {
        if (selectedPhoto !== null) {
            setSelectedPhoto((selectedPhoto + 1) % photos.length);
        }
    };

    const prevPhoto = () => {
        if (selectedPhoto !== null) {
            setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closePhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        } else if (e.key === 'ArrowLeft') {
            prevPhoto();
        }
    };

    return (
        <>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{title}</h2>
                        {subtitle && (
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {photos.map((photo, index) => (
                            <div 
                                key={index}
                                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                onClick={() => openPhoto(index)}
                            >
                                <div className="aspect-video relative">
                                    <img 
                                        src={photo.src} 
                                        alt={photo.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                                            <FiZoomIn className="h-6 w-6 text-slate-700" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedPhoto !== null && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={closePhoto}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <div className="relative max-w-7xl max-h-[90vh] mx-4">
                        <button
                            onClick={closePhoto}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                        >
                            <FiX className="h-8 w-8" />
                        </button>
                        
                        <div className="relative">
                            <img 
                                src={photos[selectedPhoto].src} 
                                alt={photos[selectedPhoto].alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                            <p className="text-sm opacity-80">
                                {selectedPhoto + 1} / {photos.length}
                            </p>
                        </div>
                    </div>
                    
                    {/* Fixed navigation arrows positioned relative to viewport */}
                    {photos.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevPhoto();
                                }}
                                className="fixed left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
                            >
                                <FiChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextPhoto();
                                }}
                                className="fixed right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
                            >
                                <FiChevronRight className="h-6 w-6" />
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
} 