import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Providers from './providers';
import { atom } from 'jotai';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Commerce',
  description: 'E-commerce mock site',
};

export const userAtom = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
