"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function Navbar(){
    const pathname=usePathname();

    const navLinks=[
        {
            name:'Journal',href:'/journal'
        },
        {name:'stats',href:'/stats'},
    ]

    return(
        <nav className="flex items-center justify-between px-6 py-4 bg-black text-white shadow-md">
      <Link href="/" className="text-2xl font-bold text-white">
        SkillTrackr
      </Link>

      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`hover:text-gray-300 ${
              pathname === link.href ? 'underline text-gray-300' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}

        <User className="w-5 h-5 text-white cursor-pointer hover:text-gray-300" />
      </div>
    </nav>
    )
}