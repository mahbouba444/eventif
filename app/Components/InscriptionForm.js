'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup.object().shape({
  nom: yup.string().required('Le nom est requis'),
  email: yup.string().email('Email invalide').required('L’email est requis'),
  motDePasse: yup.string().min(6, '6 caractères minimum').required('Mot de passe requis'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('motDePasse')], 'Les mots de passe ne correspondent pas')
    .required('Confirmation requise'),
  conditions: yup.boolean().oneOf([true], 'Vous devez accepter les conditions'),
});

export default function PageInscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Formulaire soumis :', data);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-primary">Inscription</h1>

      {submitted ? (
        <p className="text-green-600 font-semibold text-center">Inscription réussie !</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Nom</label>
            <input
              type="text"
              {...register('nom')}
              className="input input-bordered w-full"
            />
            {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              {...register('email')}
              className="input input-bordered w-full"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Mot de passe</label>
            <input
              type="password"
              {...register('motDePasse')}
              className="input input-bordered w-full"
            />
            {errors.motDePasse && (
              <p className="text-red-500 text-sm">{errors.motDePasse.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Confirmation du mot de passe</label>
            <input
              type="password"
              {...register('confirmation')}
              className="input input-bordered w-full"
            />
            {errors.confirmation && (
              <p className="text-red-500 text-sm">{errors.confirmation.message}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register('conditions')}
              className="checkbox mr-2"
            />
            <label>
              J’accepte les <a href="#" className="text-blue-600 underline">conditions générales</a>.
            </label>
          </div>
          {errors.conditions && (
            <p className="text-red-500 text-sm">{errors.conditions.message}</p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            S’inscrire
          </button>
        </form>
      )}
    </div>
  );
}
