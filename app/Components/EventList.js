// app/components/EventList.js
'use client';
import React from 'react';
import EventCard from './EventCard';
import { Events } from '../Data/Events';

export default function EventList() {
  return (
    <div>
      {Events.map((Event) => (
        <EventCard key={Event.id} Event={Event} />
      ))}
    </div>
  );
}

        