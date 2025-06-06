'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = "Before and after comparison" }: BeforeAfterSliderProps) {
    const t = useTranslations('services.staging.beforeAfter');
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const position = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const position = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-[400px] rounded-xl overflow-hidden cursor-ew-resize group"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* After Image (Full width) */}
            <div className="absolute inset-0">
                <img
                    src={afterImage}
                    alt={`${alt} - After`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Before Image (Clipped) */}
            <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={`${alt} - Before`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Slider Line */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize transition-opacity duration-300"
                style={{ 
                    left: `${sliderPosition}%`,
                    opacity: isHovered ? 1 : 0.7
                }}
            >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {t('before')}
            </div>
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {t('after')}
            </div>

            {/* Drag Instruction */}
            <div className={`absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {t('dragToCompare')}
            </div>
        </div>
    );
} 