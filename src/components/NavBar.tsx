'use client'

import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-end lg:hidden">
          <div className="bg-white w-full p-5">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" onClick={toggleMenu}>
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="flex justify-center mt-4">
              {session ? (
                <button onClick={() => { signOut(); toggleMenu(); }} className="regular-16 text-gray-900 cursor-pointer pb-1.5 transition-all hover:font-bold">
                  Sign Out
                </button>
              ) : (
                <button onClick={() => { signIn(); toggleMenu(); }} className="regular-16 text-gray-900 cursor-pointer pb-1.5 transition-all hover:font-bold">
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
