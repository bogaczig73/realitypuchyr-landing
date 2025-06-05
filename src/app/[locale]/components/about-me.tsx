'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FiArrowRight, FiHexagon } from 'react-icons/fi'
import { aboutData } from '../../data/data'

interface AboutData {
    image: string;
    title: string;
    desc: string;
}

export default function AboutMe() {
    const t = useTranslations('aboutMe');

    return (
        <section className="relative md:pb-24 pb-16" id="services">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{t('whatDoIDo.title')}</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">{t('whatDoIDo.description')}</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {aboutData.map((item: AboutData, index: number) => {
                        return (
                            <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center" key={index}>
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <FiHexagon className="size-32 fill-green-600/5 mx-auto" />
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                        <img src={item.image} className="size-12" alt="" />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href="" className="text-xl font-medium hover:text-green-600">{t(`services.${index}.title`)}</Link>
                                    <p className="text-slate-400 mt-3">{t(`services.${index}.description`)}</p>

                                    <div className="mt-4">
                                        <Link href="" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">{t(`services.${index}.readMore`)} <FiArrowRight className="ms-1" /></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
} 