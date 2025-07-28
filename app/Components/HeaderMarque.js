'use client'

import Marquee from 'react-fast-marquee'

export default function HeaderMarquee() {
  return (
    <div className="bg-[#BE123C] py-2 text-white">
      <Marquee pauseOnHover={true} speed={50}>
        🎉 Bienvenue sur EVENTIFY – Participez à vos événements préférés partout en Tunisie ! 🎉
      </Marquee>
    </div>
  )
}

