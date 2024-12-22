'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

const footerLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Courses', href: '/courses' },
  { label: 'Our Team', href: '/team' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const socialLinks = [
  { icon: <FaXTwitter className="text-lg" />, href: 'https://twitter.com' },
  {
    icon: <FaInstagram className="text-lg" />,
    href: 'https://instagram.com',
  },
  { icon: <FaLinkedin className="text-lg" />, href: 'https://linkedin.com/' },
  { icon: <FaYoutube className="text-lg" />, href: 'https://youtube.com/' },
]

export const Footer = () => {
  const pathname = usePathname()

  const hideFooterPaths = [
    '/login',
    '/register',
    '/reset-password',
    '/verify-otp',
    '/forgot-password',
  ]

  if (hideFooterPaths.includes(pathname)) {
    return null
  }

  return (
    <div className={`md:def-contain`}>
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className=" bg-footer md:rounded-[40px] p-8 lg:p-12 2xl:p-24 mb-8 w-full"
      >
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
            {/* Logo and address */}
            <div className=" w-full  md:col-span-2">
              <Link href={'/'}>
                <Image
                  src="/images/logo.png"
                  width={116}
                  height={52}
                  alt="logo"
                />
              </Link>
              <p className="mt-8 max-w-xs lg:max-w-none w-full md:w-96 text-footerText font-medium text-medium ">
                6391 Elgin St. Celina, NYC 10299
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5  col-span-3">
              {/* Pages */}
              <div className="flex flex-col w-full sm:w-1/2 lg:w-auto">
                <h2 className="font-bold ml-0 mb-6 text-xl text-secondary">
                  Pages
                </h2>
                <FooterLinks links={footerLinks} />
              </div>

              {/* Contact Us */}
              <div className="w-full sm:w-1/2 lg:w-auto ">
                <h2 className="font-bold mb-6 text-xl text-secondary">
                  Contact Us
                </h2>
                <div className="grid gap-5">
                  <div className="flex-center gap-2">
                    <div className="bg-primary/5 p-3 rounded-full">
                      <FaRegEnvelope
                        color="#006965"
                        size={16}
                        className="text-2xl"
                      />
                    </div>
                    <p className="text-footerText text-sm md:text-lg">
                      customercare@elevatedreams.com
                    </p>
                  </div>
                  <div className="flex-center gap-2">
                    <div className="bg-primary/5 p-3 rounded-full">
                      <FaPhone color="#006965" size={16} className="text-2xl" />
                    </div>
                    <p className="text-footerText text-sm md:text-lg">
                      +234 810 763 9372
                    </p>
                  </div>
                  <div className="flex-center gap-2">
                    <div className="bg-primary/5 p-3 rounded-full">
                      <FaClock color="#006965" size={16} className="text-2xl" />
                    </div>
                    <p className="text-footerText text-sm md:text-lg">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom: Social Links and Copyright */}
        <div className="flex flex-col items-center mt-16">
          <SocialLinks links={socialLinks} />
          <p className="text-center mt-4">
            © 2024 Built by Collabogig Innovations. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
