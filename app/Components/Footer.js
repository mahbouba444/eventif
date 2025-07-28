// app/components/Footer.js
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Texte copyright */}
        <p className="text-sm">EVENTIFY © 2025</p>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:text-primary transition">Accueil</Link>
          <Link href="/evenements" className="hover:text-primary transition">Événements</Link>
          <Link href="/publier" className="hover:text-primary transition">Publier</Link>
          <Link href="/inscription" className="hover:text-primary transition">Inscription</Link>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

