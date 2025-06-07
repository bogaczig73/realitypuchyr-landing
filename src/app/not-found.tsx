'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000);

        const countdownInterval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(countdownInterval);
        };
    }, [router]);

    return (
        <>
            <section className="relative bg-green-600/5">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                            <div className="text-center">
                                <Link href="/"><Image src="/images/logo-dark.png" className="mx-auto" alt="" width={100} height={100}/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <Image src="/images/error.png" width={200} height={200} className="mx-auto" alt="" />
                                <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold">Page Not Found?</h1>
                                <p className="text-slate-400">Whoops, this is embarassing. <br /> Looks like the page you were looking for wasnt found.</p>
                                <p className="text-slate-400 mt-2">Redirecting to home page in {countdown} seconds...</p>

                                <div className="mt-4">
                                    <Link href="/" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 