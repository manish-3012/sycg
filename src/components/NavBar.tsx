'use client'

import { NAV_LINKS } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex items-center">
        <Image src="logo-green.svg" alt="logo" width={235} height={40}/>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        {session ? (
          <button onClick={() => signOut()} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
            Sign Out
          </button>
        ) : (
          <button onClick={() => signIn()} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
            Sign In
          </button>
        )}
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar