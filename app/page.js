'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-blue-100">

      {/* Bannière avec Image */}
      <div className="w-full max-w-4xl h-64 relative mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/banner.jpg"
          alt="Bannière des événements"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Boutons de navigation */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/evenements"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition text-center"
        >
          Voir les événements
        </Link>
        <Link
          href="/publication"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition text-center"
        >
          Publication d'un événement
        </Link>
      </div>
    </main>
  );
}
