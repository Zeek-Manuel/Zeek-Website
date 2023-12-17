import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './Header/NavBar';
import Footer from './Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zeek Website',
  description: 'Your hub for photography and design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme='theme-change' lang="en">
        <body className=" ">
            <NavBar />
          <main>
            {children}
          </main>
            <Footer />
        </body>
    </html>
  )
}
