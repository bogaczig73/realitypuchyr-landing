import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import {League_Spartan } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
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
      <link rel="preload" href="/images/agency/pavel.webp" as="image" fetchPriority="high" />
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="0e375b50-6281-4376-8873-457d342a18c3"
        strategy="afterInteractive"
        defer
      />
      <body className={`${league_Spartan.className} dark:bg-slate-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
