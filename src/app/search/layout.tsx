import SearchHeader from '@/components/SearchHeader';
import '../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <SearchHeader />
        {children}
      </body>
    </html>
  );
}
