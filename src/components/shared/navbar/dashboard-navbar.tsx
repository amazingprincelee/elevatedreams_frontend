import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const DashboardNavbar: FC = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-6 bg-white">
      {/* Left Section (Logo) */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={'/images/logo.png'}
            alt={'blog'}
            width={1200}
            height={900}
            className=" w-20 object-cover"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-10 text-gray-600 text-sm font-medium ml-auto pr-8">
        <li className="hover:text-red-600 cursor-pointer text-red-600">
          Dashboard
        </li>
        <li className="hover:text-red-600 cursor-pointer">Explore Courses</li>
        <li className="hover:text-red-600 cursor-pointer">Notes</li>
      </ul>

      {/* Right Section (Profile) */}
      <div className="flex items-center space-x-4">
        <Image
          src="/images/dashboard/navprofilepix.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-right">
          <span className="block text-sm font-medium">Wumi Innocent</span>
          <span className="block text-xs text-gray-500">Active</span>
        </div>

        <FaChevronDown className="text-red-600" />
      </div>
    </nav>
  )
}

export default DashboardNavbar
