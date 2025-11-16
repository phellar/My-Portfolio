import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'DevJachi | Inventive Software Engineer',
  description: 'Inventive Software Engineer with 6+ years of experience, specializing in fullstack web development and app development. Building scalable products with great user experiences.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Cloud Computing', 'Graphics Designer', 'Full Stack Developer', 'DevJachi', 'Onwoh Jachukwunma', 'Onwoh Emmanuel', 'Jachi'],
  authors: [{ name: 'DevJachi' }],
  creator: 'DevJachi',
  publisher: 'DevJachi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devjachi.vercel.app',
    siteName: 'DevJachi Portfolio',
    title: 'DevJachi | Software Engineer',
    description: 'Software Engineer specializing in web development, app development and cloud computing. Building scalable products with great user experiences.',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'DevJachi - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevJachi | Software Engineer',
    description: 'Software engineer building scalable products with great user experiences.',
    creator: '@EOnwoh',
    images: ['/banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DevJachi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
