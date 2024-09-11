import Image from 'next/image'
import React from 'react'
import {
  FaClock,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

const footer = () => {
  return (
    <div>
      <div className="container bg-violet-300 rounded-[40px] p-24 mb-8">
        <div className="flex gap-24">
          <div className="w-[500px]">
            <Image src="/images/logo.png" width={116} height={52} alt="logo" />

            <p className="w-96 mt-8">
              No 4a Etim Okpoyo close, off Aba Express road by total filling
              station, Port harcourt, rivers State
            </p>
          </div>
          <div className="w-96">
            <h2 className="font-bold mb-6 text-xl">Pages</h2>
            <ul>
              <li className="mb-6">About Us</li>
              <li className="mb-6">Courses</li>
              <li className="mb-6">Our Team</li>
              <li className="mb-6">Blogs</li>
              <li className="mb-6">Contact Us</li>
            </ul>
          </div>
          <div className="p-2 w-96">
            <h2 className="font-bold mb-8 text-xl">Contact Us</h2>
            <div className="flex gap-2 mb-8">
              <p className="bg-pink-300 p-2 rounded-full">
                <FaRegEnvelope color="red" className="text-2xl " />
              </p>
              <p>customercare@loctechng.com</p>
            </div>
            <div className="flex gap-2 mb-8">
              <p className="bg-pink-300 p-2 rounded-full">
                <FaPhone color="red" className="text-2xl" />
              </p>
              <p>customercare@loctechng.com</p>
            </div>
            <div className="flex gap-2">
              <p className="bg-pink-300 p-2 rounded-full">
                <FaClock color="red" className="text-2xl" />
              </p>
              <p>customercare@loctechng.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-40">
          <div className="flex gap-6 mb-8">
            <FaXTwitter className="text-lg" />
            <FaInstagram className="text-lg" />
            <FaLinkedin className="text-lg" />
            <FaYoutube className="text-lg" />
          </div>
          <p>© 2024 Crafelo Studios. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default footer
