import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from "@/components/ui/toaster"
import { Providers} from '../Providers'
import TopLoader from "@/components/loaders/TopLoader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medrepo",
  description: "Track your health, by tracking test reports, diagonosis, doctor appointments and medicines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <TopLoader/>
        <Toaster/>
        {children}
        </ThemeProvider>
      </Providers>
        </body>
    </html>
  );
}
