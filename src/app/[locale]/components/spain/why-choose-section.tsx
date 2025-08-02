'use client'
import React from 'react';
import { FiHome, FiStar, FiMapPin, FiCheck } from 'react-icons/fi';

interface WhyChooseItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    emoji: string;
}

interface WhyChooseSectionProps {
    title: string;
    items: WhyChooseItem[];
}

export default function WhyChooseSection({ title, items }: WhyChooseSectionProps) {
    return (
        <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="flex items-start gap-4 mb-4 flex-1">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            </div>
                            <div className="aspect-video rounded-lg overflow-hidden relative mt-auto">
                                <img 
                                    src={item.image} 
                                    alt={item.imageAlt} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <span className="text-3xl">{item.emoji}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 