"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { User } from 'react-feather';
import { usePathname } from "next/navigation";

export default function Navbar({ navClass, topnavClass, tagline }:{ navClass:string, topnavClass:string, tagline:boolean }) {
    let [isOpen, setIsOpen] = useState(true);
    let [topNavbar, setTopNavBar] = useState(false);

    let [manu , setManu] = useState('');
    let [subManu , setSubManu] = useState('');

    let current = usePathname();

    useEffect(() => {

        setManu(current)
        setSubManu(current)

        function windowScroll() {
            setTopNavBar(window.scrollY >= 50)
        }

        window.addEventListener('scroll', windowScroll )
        window.scrollTo(0, 0)
        return()=>{
            window.removeEventListener('scroll', windowScroll )
        }
      }, []);


    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    
        const navigation = document.getElementById("navigation");
        if (navigation) {
            const anchorArray = Array.from(navigation.getElementsByTagName("a"));
    
            anchorArray.forEach((element) => {
                element.addEventListener("click", (elem: Event) => {
                    const target = elem.target as HTMLElement;
                    if (target) {
                        const href = target.getAttribute("href");
                        if (href && href !== "") {
                            const nextSibling = target.nextElementSibling;
                            if (nextSibling && nextSibling.nextElementSibling) {
                                const submenu = nextSibling.nextElementSibling as HTMLElement;
                                submenu.classList.toggle("open");
                            }
                        }
                    }
                });
            });
        }
    };
    

    return (
        <React.Fragment>
            <nav id="topnav" className={`${topNavbar ? 'nav-sticky': ''} ${tagline ? 'tagline-height' : ''} ${topnavClass ? topnavClass : ''} defaultscroll is-sticky`} >
               
                <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                    {/* <!-- Logo container--> */}
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" href="/">
                            <Image src="/images/logo-dark.png" className="inline-block dark:hidden" alt="" width={98} height={24}/>
                            <Image src="/images/logo-light.png" className="hidden dark:inline-block" alt="" width={98} height={24} />
                        </Link> :
                        <Link className="logo" href="#">
                            <span className="inline-block dark:hidden">
                                <Image src="/images/logo-dark.png" className="l-dark"  alt="" width={98} height={24}/>
                                <Image src="/images/logo-light.png" className="l-light"  alt="" width={98} height={24}/>
                            </span>
                            <Image src="/images/logo-light.png"  className="hidden dark:inline-block" alt="" width={98} height={24}/>
                        </Link>
                    }
                    {/* <!-- End Logo container--> */}

                    {/* <!-- Start Mobile Toggle --> */}
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End Mobile Toggle --> */}

                    {/* <!-- Login button Start --> */}
                    <ul className="buy-button list-none mb-0">
                        <li className="sm:inline ps-1 mb-0 hidden">
                            <Link href="tel:+420725511970" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white !rounded-full">+420 725 511 970</Link>
                        </li>
                    </ul>
                    {/* <!--Login button End--> */}

                    <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`} >
                        {/* <!-- Navigation Menu--> */}
                        <ul className={`navigation-menu  ${navClass === '' || navClass === undefined ? '' : 'nav-light'}   ${topnavClass !== '' && topnavClass !== undefined ? '!justify-center' : '!justify-end'}`}>
                            <li className={`has-submenu parent-menu-item ${["/"].includes(manu) ? 'active' : ''}`}><Link href="/">Home</Link></li>
                            <li className={`has-submenu parent-menu-item ${["/list"].includes(manu) ? 'active' : ''}`}><Link href="/list"> Listing </Link></li>
                            <li className={manu === "/faq" ? "active" : ''}><Link href="/faq" className="sub-menu-item">FAQ</Link></li>
                            <li className={manu === "/blog" ? "active" : ''}><Link href="/blog" className="sub-menu-item"> Blog</Link></li>
                            <li className={manu === "/contact" ? "active" : ''}><Link href="/contact" className="sub-menu-item">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar  */}
        </React.Fragment>
    );

}
