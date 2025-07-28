'use client'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary">
        EVENTIFY
      </div>
      <ul className="flex gap-6">
        <li>
          <Link
            href="/"
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/evenements"
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            Evenements
          </Link>
        </li>
        <li>
          <Link
            href="/publication"
            className="text-gray-700 hover:text-primary transition-colors duration-300"
          >
            publication
          </Link>
        </li>
        <li>
          <Link
            href="/inscription1"
            className="text-gray-700 hover:text-secondary transition-colors duration-300"
          >
            inscription1
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

