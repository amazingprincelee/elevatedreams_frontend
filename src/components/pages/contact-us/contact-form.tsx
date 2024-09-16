import LinkButton from '@/components/shared/button/link-button'
import React from 'react'
import { FaClock, FaMap, FaPhone, FaRegEnvelope } from 'react-icons/fa6'
import { HiMapPin } from 'react-icons/hi2'

const ContactForm = () => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:mt-16 lg:gap-12 container mx-auto mb-8">
      <div className="flex flex-col  justify-center items-center w-full sm:w-1/2 lg:w-auto font-jakarta">
        <h1 className="text-4xl font-semibold py-8">Get in touch with Us</h1>
        <div className="grid gap-5 p-5">
          <div className="flex-center gap-2">
            <div className="bg-primary/5 p-3 rounded-full">
              <FaRegEnvelope color="#DA2721" size={22} className="text-2xl" />
            </div>
            <p className="text-footerText text-lg">
              customercare@loctechng.com
            </p>
          </div>
          <div className="flex-center gap-2">
            <div className="bg-primary/5 p-3 rounded-full">
              <FaPhone color="#DA2721" size={22} className="text-2xl" />
            </div>
            <p className="text-footerText text-lg">+234 703 888 5466</p>
          </div>
          <div className="flex-center gap-2">
            <div className="bg-primary/5 p-3 rounded-full">
              <FaClock color="#DA2721" size={22} className="text-2xl" />
            </div>
            <p className="text-footerText text-lg">
              Mon - Fri: 9:00 AM - 6:00 PM <br />
              Sunday: closed
            </p>
          </div>
          <div>
            <h2 className="pl-14 pb-2 text-2xl text-gray-400">
              Visit our office.
            </h2>

            <div className="flex-center gap-2">
              <div className="bg-primary/5 p-3 rounded-full">
                <HiMapPin color="#DA2721" size={22} className="text-2xl" />
              </div>
              <p className="text-black text-lg font-semibold lg:w-96">
                No 4a Etim Okpoyo close, off Aba Express road by total filling
                station, Port harcourt, rivers State
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form input */}
      <div className="px-5">
        <div className="mx-auto rounded-3xl bg-base px-5 pt-16 pb-12">
          <div className="flex flex-col lg:flex-row lg:gap-4">
            <input
              className="p-5 rounded-lg mb-4"
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-5 rounded-lg mb-4"
              placeholder="Last Name"
              type="text"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-4">
            <input
              className="p-5 rounded-lg mb-4"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-5 rounded-lg mb-4"
              placeholder="Phone Number"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <textarea
              placeholder="How can we help?"
              className="p-5  rounded-lg  h-32"
            />
          </div>

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
