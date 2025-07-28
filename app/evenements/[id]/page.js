import { events } from '../../Data/Events'; 
import EventDetailsCard from '../../Components/EventDetailsCard'; 
import Link from 'next/link';

export default function EvenementPage({ params }) {
  const { id } = params;

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold">
        Événement introuvable.
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <EventDetailsCard event={event} />

      <div className="text-center">
        <Link href="/inscription">
          <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-red-700 transition">
            S'inscrire
          </button>
        </Link>
      </div>
    </div>
  );
}
