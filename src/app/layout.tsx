import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
const geistMono = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instashop Test",
  description: "Turn Your Social Presence Into Sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistMono.variable}>
        <NextTopLoader
          color="#8A226F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={100}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Toaster richColors pauseWhenPageIsHidden position="top-right" />
        <main className="mx-auto w-full max-w-[360px] border-4 py-7">
          {children}
        </main>
      </body>
    </html>
  );
}
