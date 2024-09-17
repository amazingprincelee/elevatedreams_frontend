'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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
    { label: 'About Us', href: '/about-us' },
    { label: 'Courses', href: '/courses' },
    { label: 'Our Team', href: '/team' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact-us' },
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
    <div className="md:def-contain ">
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
              <p className="mt-8 max-w-xs lg:max-w-none w-full md:w-96 text-footerText font-medium text-sm md:text-base">
                No 4a Etim Okpoyo close, off Aba Express road by total filling
                station, Port Harcourt, Rivers State
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5  col-span-3">
              {/* Pages */}
              <div className="flex flex-col w-full sm:w-1/2 lg:w-auto">
                <h2 className="font-bold ml-0 mb-6 text-xl">Pages</h2>
                <FooterLinks links={footerLinks} />
              </div>

              {/* Contact Us */}
              <div className="w-full sm:w-1/2 lg:w-auto ">
                <h2 className="font-bold mb-6 text-xl">Contact Us</h2>
                <div className="grid gap-5">
                  <div className="flex-center gap-2">
                    <div className="bg-primary/5 p-3 rounded-full">
                      <FaRegEnvelope
                        color="#DA2721"
                        size={16}
                        className="text-2xl"
                      />
                    </div>
                    <p className="text-footerText text-sm md:text-lg">
                      customercare@loctechng.com
                    </p>
                  </div>
                  <div className="flex-center gap-2">
                    <div className="bg-primary/5 p-3 rounded-full">
                      <FaPhone color="#DA2721" size={16} className="text-2xl" />
                    </div>
                    <p className="text-footerText text-sm md:text-lg">
                      +234 123 456 7890
                    </p>
                  </div>
                  <div className="flex-center gap-2">
                    <div className="bg-primary/5 p-3 rounded-full">
                      <FaClock color="#DA2721" size={16} className="text-2xl" />
                    </div>
                    <p className="text-footerText text-sm md:text-lg">
                      Mon - Fri: 9:00 AM - 6:00 PM
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
            © 2024 Built by Appnovia team. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
