import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
});

export const metadata: Metadata = {
  title: "Aina Tiavina",
  description: "This is the portfolio of RAJOELISON Aina Tiavina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} dark bg-white text-black`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
