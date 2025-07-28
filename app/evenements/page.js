"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";


const categories = ['Tech', 'Design', 'Musique', 'Carriére', 'Cuisine'];

const events = [
  {
    id: 1,
    titre: "Conférence JavaScript",
    categorie: "Tech",
    description: "Conférence sur JS",
    date: "2025-08-15",
    lieu: "Tunis",
  },
  {
    id: 2,
    titre: "Atelier UX Design",
    categorie: "Design",
    description: "Atelier pratique UX",
    date: "2025-09-10",
    lieu: "Sfax",
  },
  {
    id: 3,
    titre: "Concert de Jazz",
    categorie: "Musique",
    description: "Soirée jazz live",
    date: "2025-10-05",
    lieu: "Sousse",
  },
  {
    id: 4,
    titre: "Séminaire Carrière",
    categorie: "Carriére",
    description: "Conseils de carrière",
    date: "2025-11-20",
    lieu: "Tunis",
  },
  {
    id: 5,
    titre: "Cours de Cuisine Italienne",
    categorie: "Cuisine",
    description: "Apprenez la cuisine italienne",
    date: "2025-12-01",
    lieu: "Monastir",
  },
];

export default function EvenementsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredEvents = events.filter(event => {
    const matchTitle = event.titre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory ? event.categorie === selectedCategory : true;
    return matchTitle && matchCategory;
  });

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Événements</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <Input
          placeholder="Rechercher un événement..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-1"
        />

        
        <Select
          onValueChange={setSelectedCategory}
          value={selectedCategory}
        >
          <SelectTrigger className="w-full md:w-60">
            <SelectValue placeholder="Choisir une catégorie" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500">Aucun événement trouvé.</p>
      ) : (
        <ul className="space-y-6">
          {filteredEvents.map(event => (
            <li key={event.id} className="border p-4 rounded shadow-sm">
              <h2 className="text-xl font-semibold">{event.titre}</h2>
              <p className="text-sm text-gray-600">{event.date} - {event.lieu}</p>
              <p className="mt-2">{event.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {event.categorie}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
