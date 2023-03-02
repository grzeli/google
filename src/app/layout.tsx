import Footer from '@/components/Footer';
import './globals.css';
import Providers from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
