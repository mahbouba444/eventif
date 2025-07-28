'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const categories = ['Tech', 'Design', 'Business', 'Art', 'Sport'];

const schema = yup.object().shape({
  titre: yup.string().required('Le titre est requis'),
  image: yup.string().url('Lien d\'image invalide').required('L\'image est requise'),
  date: yup.string().required('La date est requise'),
  description: yup.string().required('La description est requise'),
  lieu: yup.string().required('Le lieu est requis'),
  categorie: yup.string().required('La catégorie est requise'),
});

export default function PagePublier() {
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setMessage("✅ Événement envoyé avec succès !");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-6">Publier un événement</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Titre */}
        <div>
          <input
            type="text"
            placeholder="Titre de l'événement"
            {...register('titre')}
            className="w-full border px-3 py-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.titre?.message}</p>
        </div>

        {/* Image */}
        <div>
          <input
            type="text"
            placeholder="Lien de l'image"
            {...register('image')}
            className="w-full border px-3 py-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.image?.message}</p>
        </div>

        {/* Date */}
        <div>
          <input
            type="date"
            {...register('date')}
            className="w-full border px-3 py-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.date?.message}</p>
        </div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Description"
            {...register('description')}
            className="w-full border px-3 py-2 rounded min-h-[100px]"
          ></textarea>
          <p className="text-red-500 text-sm">{errors.description?.message}</p>
        </div>

        {/* Lieu */}
        <div>
          <input
            type="text"
            placeholder="Lieu"
            {...register('lieu')}
            className="w-full border px-3 py-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.lieu?.message}</p>
        </div>

        {/* Catégorie */}
        <div>
          <select
            {...register('categorie')}
            className="w-full border px-3 py-2 rounded"
            defaultValue=""
          >
            <option value="" disabled>Choisir une catégorie</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
          <p className="text-red-500 text-sm">{errors.categorie?.message}</p>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Publier
        </button>

        {/* Message */}
        {message && <p className="text-green-600 mt-2">{message}</p>}
      </form>
    </div>
  );
}
