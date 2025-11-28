import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "SuperLearn",
  description: "Advanced learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
            <Header />
            <main className="pt-11">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}