import LinkButton from '@/components/shared/button/link-button'
import React from 'react'
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6'

const ContactForm = () => {
  return (
    <div className="def-contain mb-8 lg:mt-16">
      <div className="grid 2xl:gap-8 lg:grid-cols-2">
        {/* Contact Info Section */}
        <div className="flex flex-col justify-center items-center lg:items-start font-jakarta lg:relative">
          <h1 className="text-5xl font-semibold py-8 lg:absolute lg:top-1">
            Get in Touch with Us
          </h1>
          <div className="grid gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-primary/5 p-3 rounded-full">
                <FaRegEnvelope color="#006965" size={22} />
              </div>
              <p className="text-footerText text-lg font-thin">
                assist@elevatedreams.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/5 p-3 rounded-full">
                <FaPhone color="#006965" size={22} />
              </div>
              <p className="text-footerText text-lg font-thin">
                +234 811 848 4516
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-base rounded-3xl p-5 lg:px-8 lg:py-16">
          <div className="grid gap-4">
            {/* Full Name */}
            <input
              className="p-5 rounded-lg w-full"
              type="text"
              placeholder="Full Name"
            />

            {/* Email Address */}
            <input
              className="p-5 rounded-lg w-full"
              type="text"
              placeholder="Email Address"
            />

            {/* Phone Number */}
            <input
              className="p-5 rounded-lg w-full"
              type="text"
              placeholder="Phone Number"
            />

            {/* Country of Residence */}
            <select className="p-5 rounded-lg w-full">
              <option value="">Country of Residence</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>

            {/* Help Category Selection */}
            <select className="p-5 rounded-lg w-full">
              <option value="">How Can We Help You?</option>
              <option value="eb1-eb2">
                Immigration (EB1 & EB2 Visa Pathways)
              </option>
              <option value="eb5">Immigration (EB5 Visa Pathway)</option>
              <option value="business">International Business Formation</option>
              <option value="intellectual">Intellectual Property</option>
              <option value="inquiries">Just Making Inquiries</option>
            </select>

            {/* Brief Description */}
            <textarea
              placeholder="Brief Description of Your Situation or Goals"
              className="p-5 rounded-lg h-40 w-full"
            />

            {/* Submit Button */}
            <LinkButton
              url={''}
              label={'Send Message'}
              className="mt-10 w-full text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
