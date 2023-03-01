import Footer from '@/components/Footer';
import HomeHeader from '@/components/HomeHeader';
import './globals.css';
import Providers from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <HomeHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
