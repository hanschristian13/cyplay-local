import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Poppins({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Include all weights
});
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#F5F5F5',
};
export const metadata: Metadata = {
  title: 'Cyber Yokai Play',
  description:
    'Cyber Yokai Play is a leading game development company specializing in immersive and innovative gaming experiences. Dive into the world of Yokai-inspired adventures, where technology meets creativity. Explore our games and bring your imagination to life!',
  icons: {
    icon: { url: '/assets/favicon.svg', type: 'image/svg+xml' },
    shortcut: { url: '/assets/favicon.svg', type: 'image/svg+xml' },
    apple: { url: '/assets/favicon.svg', type: 'image/svg+xml' },
    other: {
      rel: 'mask-icon',
      url: '/assets/favicon.svg',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
        <link
          rel="shortcut icon"
          href="/assets/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/favicon.svg"
          type="image/svg+xml"
        />
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <Header />

        {children}
        <div className="h-[200px] w-min " />
      </body>
    </html>
  );
}
