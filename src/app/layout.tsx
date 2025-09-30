import '@/app/globals.css';
import { AuthProvider } from '@/lib/auth';
import Header from '@/components/Header';

export const metadata = {
  title: 'Todo Vibe',
  description: 'A simple to-do app built with Next.js and Firebase.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="main-container">
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
