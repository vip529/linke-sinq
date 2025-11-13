import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'LinkeSinq - Learn Intelligently',
  description: 'Transform scattered internet resources into structured learning',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
