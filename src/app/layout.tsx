import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Menu } from "@/components/ui/navbar-menu";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import { Footer } from "@/components/custom/footer";
import Logo from "@/components/custom/logo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zulu Tech",
  description: "Zulu Tech Ethiopia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#05132e] dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />

          <div className="right-4 top-3 z-10 fixed max-sm:top-0 max">
            <ThemeToggle />
          </div>
          <div className="left-4 top-0 z-10 fixed max-sm:hidden">
            <Logo />
          </div>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
