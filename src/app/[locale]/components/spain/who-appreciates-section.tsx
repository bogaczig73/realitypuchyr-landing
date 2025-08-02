'use client'
import React from 'react';

interface WhoAppreciatesItem {
    emoji: string;
    title: string;
    gradientFrom: string;
    gradientTo: string;
}

interface WhoAppreciatesSectionProps {
    title: string;
    items: WhoAppreciatesItem[];
}

export default function WhoAppreciatesSection({ title, items }: WhoAppreciatesSectionProps) {
    return (
        <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className={`w-20 h-20 bg-gradient-to-br from-${item.gradientFrom} to-${item.gradientTo} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                <span className="text-3xl">{item.emoji}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 