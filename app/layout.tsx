import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vishal C B | Full-Stack Developer',
  description: 'Full-stack developer specializing in Flutter, Node.js, and PostgreSQL. Building production apps with real-world impact.',
  openGraph: {
    title: 'Vishal C B | Full-Stack Developer',
    description: 'Full-stack developer specializing in Flutter, Node.js, and PostgreSQL',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
