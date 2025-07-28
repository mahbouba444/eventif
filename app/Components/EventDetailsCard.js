import Image from 'next/image';
import Link from 'next/link';

export default function EventDetailsCard({ event }) {
  return (
    <div className="max-w-2xl mx-auto p-4 border shadow rounded">
      <Image
        src={event.image}
        alt={event.titre}
        width={600}
        height={400}
        className="rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{event.titre}</h2>
      <p className="mb-1"><strong>Date:</strong> {event.date}</p>
      <p className="mb-1"><strong>Lieu:</strong> {event.lieu}</p>
      <p className="mb-1"><strong>Catégorie:</strong> {event.categorie}</p>
      <p className="mb-4">{event.description}</p>

      <Link
        href="/inscription"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        S’inscrire
      </Link>
    </div>
  );
}
