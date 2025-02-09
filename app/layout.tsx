import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <div className="flex flex-col min-h-screen">
          <header className="">
            <Navbar />
          </header>

          <main className="flex-grow pt-[56px]">
            <div className="justify-between p-5 px-20">{children}</div>
          </main>

          <footer className="py-4 flex justify-center">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
