import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import {League_Spartan } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import FontLoader from './components/font-loader';
import PerformanceMonitor from './components/performance-monitor';
import CriticalCSS from './components/critical-css';

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
  preload: true,
})

export const metadata = {
  title: 'Pavel Puchýř - Real Estate',
  description: 'Pavel Puchýř - Real estate for everyone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <head>
        <CriticalCSS />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://api-gateway.umami.dev" />
        <link rel="preconnect" href="https://cloud.umami.is" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/agency/pavel.webp" as="image" fetchPriority="high" />
        <link rel="preload" href="/fonts/LeagueSpartan-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/materialdesignicons-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="0e375b50-6281-4376-8873-457d342a18c3"
        strategy="afterInteractive"
        defer
      />
      <body className={`${league_Spartan.className} dark:bg-slate-900`}>
        <FontLoader />
        <PerformanceMonitor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
