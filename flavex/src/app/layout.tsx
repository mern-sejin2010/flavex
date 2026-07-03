import './globals.css';
import './page.module.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
// font
const spaceGrotesk = Space_Grotesk({
  variable: '--space-grotesk',
  subsets: ['latin'],
});
// metadata
export const metadata: Metadata = {
  title: 'Flavex | Premium Restaurant',
  description: `
    Experience exceptional dining at Flavex. Enjoy delicious chef-crafted 
    dishes, fresh ingredients, elegant ambiance, and unforgettable moments.
  `,
};
// root
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={spaceGrotesk.variable}>
      <body>
        { children }
      </body>
    </html>
  );
};