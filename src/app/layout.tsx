import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Excellence Education | Transforming University Careers',
  description: 'Premium EdTech platform providing top-tier training for university students in Cloud Computing, Fullstack, Java Fullstack, and DBMS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
