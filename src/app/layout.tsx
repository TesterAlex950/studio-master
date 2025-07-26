import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PPC & Media Buying Portfolio',
  description: 'The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'PPC & Media Buying Portfolio',
    description: 'The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC & Media Buying Portfolio',
    description: 'The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
