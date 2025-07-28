
export default function EventCard({ event }) {
  if (!event) return null;

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">{event.titre}</h2>
      <p>{event.lieu} — {event.date}</p>
    </div>
  );
}

