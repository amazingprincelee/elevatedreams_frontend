import LinkButton from '@/components/shared/button/link-button'
import React from 'react'
import { FaClock, FaMap, FaPhone, FaRegEnvelope } from 'react-icons/fa6'
import { HiMapPin } from 'react-icons/hi2'

const ContactForm = () => {
  return (
    <div className="container mx-auto lg:p-14 mb-8 grid gap-8 lg:grid-cols-2 lg:mt-16 px-5">
      {/* Contact Info Section */}
      <div className="flex flex-col justify-center items-center lg:items-start font-jakarta">
        <h1 className="text-4xl font-semibold py-8">Get in touch with Us</h1>
        <div className="grid gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-3 rounded-full">
              <FaRegEnvelope color="#DA2721" size={22} />
            </div>
            <p className="text-footerText text-lg font-thin">
              customercare@loctechng.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-3 rounded-full">
              <FaPhone color="#DA2721" size={22} />
            </div>
            <p className="text-footerText text-lg font-thin">
              +234 703 888 5466
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-3 rounded-full">
              <FaClock color="#DA2721" size={22} />
            </div>
            <p className="text-footerText text-lg font-thin">
              Mon - Fri: 9:00 AM - 6:00 PM <br />
              Sunday: closed
            </p>
          </div>
          <div>
            <h2 className="pb-2 text-2xl text-gray-400">Visit our office.</h2>
            <div className="flex items-center gap-3">
              <div className="bg-primary/5 p-3 rounded-full">
                <HiMapPin color="#DA2721" size={22} />
              </div>
              <p className="text-black text-lg font-semibold">
                No 4a Etim Okpoyo close, off Aba Express road by total filling
                station, Port harcourt, rivers State
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-base rounded-3xl p-5 lg:px-8 lg:py-16">
        <div className="grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              className="p-5 rounded-lg mb-4 lg:mb-0 w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-5 rounded-lg w-full"
              placeholder="Last Name"
              type="text"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              className="p-5 rounded-lg mb-4 lg:mb-0 w-full"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-5 rounded-lg w-full"
              placeholder="Phone Number"
              type="text"
            />
          </div>

          <textarea
            placeholder="How can we help?"
            className="p-5 rounded-lg h-32 w-full"
          />

          <LinkButton
            url={''}
            label={'Send Message'}
            className="mt-10 w-full text-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
