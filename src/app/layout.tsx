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
        </Providers>
      </body>
    </html>
  );
}
