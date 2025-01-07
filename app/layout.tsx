import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./utils/navbar";


const roboto = Roboto({
  weight: "700",
  subsets: ['cyrillic']

})
const publicSans  = Public_Sans({
   weight: '900',
   subsets: ['latin']
})

export const metadata: Metadata = {
  title: "ProBEST",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased bg-primary-foreground text-primary flex h-screenn flex-col m-2 `}
      >

        <div className={`${publicSans.className}`}>
            <Navbar/>
        </div>

        <div className={`flex-1 ${roboto.className} overflow-x-hidden`}>
          {children}
        </div>
        
      </body>
    </html>
  );
}
