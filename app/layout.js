import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderMarquee from "./Components/HeaderMarque";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EVENTIFY – Vos événements en un clic",
  description: "Découvrez, organisez et participez à des événements autour de vous",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><HeaderMarquee/>
      <NavBar/>
      <main>  {children}</main>
      <Footer/>
      </body>
    </html>
  );
}
