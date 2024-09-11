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
import FooterLinks from './footer-links'
import SocialLinks from './footer-social-links'

const Footer = () => {
  const footerLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Our Team', href: '/team' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const socialLinks = [
    { icon: <FaXTwitter className="text-lg" />, href: 'https://twitter.com' },
    {
      icon: <FaInstagram className="text-lg" />,
      href: 'https://instagram.com',
    },
    { icon: <FaLinkedin className="text-lg" />, href: 'https://linkedin.com/' },
    { icon: <FaYoutube className="text-lg" />, href: 'https://youtube.com/' },
  ]

  return (
    <div className="bg-violet-300 rounded-[40px] p-8 sm:p-12 lg:p-24 mb-8">
      <div className="flex flex-col sm:flex-row lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-[450px]">
          <Image src="/images/logo.png" width={116} height={52} alt="logo" />

          <p className="mt-8 max-w-xs lg:max-w-none w-96">
            No 4a Etim Okpoyo close, off Aba Express road by total filling
            station, Port Harcourt, Rivers State
          </p>
        </div>
        <div className="lg:w-96 flex flex-col">
          <h2 className="font-bold ml-0 mb-6 text-xl">Pages</h2>
          <FooterLinks links={footerLinks} />
        </div>
        <div className="p-2 lg:w-96">
          <h2 className="font-bold mb-6 text-xl">Contact Us</h2>
          <div className="flex gap-2 mb-6">
            <div className="bg-pink-300 p-2 rounded-full">
              <FaRegEnvelope color="red" className="text-2xl" />
            </div>
            <p>customercare@loctechng.com</p>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="bg-pink-300 p-2 rounded-full">
              <FaPhone color="red" className="text-2xl" />
            </div>
            <p>+234 123 456 7890</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-pink-300 p-2 rounded-full">
              <FaClock color="red" className="text-2xl" />
            </div>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <SocialLinks links={socialLinks} />
        <p className="text-center">
          © 2024 Crafelo Studios. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
