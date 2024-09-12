'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { linksData } from '.'
import LinkButton from '../button/link-button'
import MobileNavbar from './mobile/navbar'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-lg">
      <div className="def-contain">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src={'/images/logo.png'}
              alt={'blog'}
              width={1200}
              height={900}
              className=" w-20 object-cover"
            />
          </Link>
          <div className="hidden lg:flex space-x-8 items-center">
            {linksData.map((el, index) => (
              <Link
                key={index}
                href={el.url}
                className="text-gray-500 hover:text-gray-800 text-sm"
              >
                {el.name}
              </Link>
            ))}
            <Image
              src={'/icons/whatsapp.svg'}
              alt={'blog'}
              width={1200}
              height={900}
              className="h-6 w-6 object-cover"
            />
            <Image
              src={'/icons/cart.svg'}
              alt={'blog'}
              width={1200}
              height={900}
              className="h-6 w-6 object-cover"
            />
            <div className="flex-center gap-3">
              <LinkButton
                url={''}
                label={'Log in'}
                className="border border-primary bg-transparent text-primary hover:text-white py-3"
              ></LinkButton>
              <LinkButton
                url={''}
                label={'Get Started'}
                className="hover:text-primary border hover:border-primary py-3 hover:bg-transparent"
              ></LinkButton>
            </div>
          </div>
          <div className="lg:hidden flex space-x-5 items-center">
            <Image
              src={'/icons/whatsapp.svg'}
              alt={'blog'}
              width={1200}
              height={900}
              className="h-6 w-6 object-cover"
            />
            <Image
              src={'/icons/cart.svg'}
              alt={'blog'}
              width={1200}
              height={900}
              className="h-6 w-6 object-cover"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-gray-600  hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileNavbar isOpen setIsOpen={setIsOpen} />}
    </nav>
  )
}

export default Navbar
