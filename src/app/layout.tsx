import ThemeProvider from "@/app/providers/ThemeProvider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import '@/app/globals.css'; // Import global styles

export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="min-h-screen">
          <NavBar />
          <div className="max-w-4xl mx-auto px-4">
            <main className="py-12">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
