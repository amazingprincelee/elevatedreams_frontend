import countries from '@/components/pages/contact-us/countries'
import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: '',
  })

  const [isSending, setIsSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSending(true)
    setSuccessMessage('')
    setErrorMessage('')

    const serviceId = 'your_service_id' // Replace with your EmailJS service ID
    const templateId = 'your_template_id' // Replace with your EmailJS template ID
    const userId = 'your_user_id' // Replace with your EmailJS user ID

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        setSuccessMessage('Your message has been sent successfully!')
        setIsSending(false)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          service: '',
          message: '',
        })
      })
      .catch((error) => {
        setErrorMessage('Something went wrong. Please try again.')
        setIsSending(false)
      })
  }

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
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              className="p-5 rounded-lg w-full"
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              className="p-5 rounded-lg w-full"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-5 rounded-lg w-full"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              className="p-5 rounded-lg w-full"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country of Residence</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <select
              className="p-5 rounded-lg w-full"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">What Services are you interested in?</option>
              <option value="eb1-eb2">
                Immigration (EB1 & EB2 Visa Pathways)
              </option>
              <option value="eb5">Immigration (EB5 Visa Pathway)</option>
              <option value="business">International Business Formation</option>
              <option value="intellectual">Intellectual Property</option>
              <option value="inquiries">Just Making Inquiries</option>
            </select>
            <textarea
              placeholder="Brief Description of Your Situation or Goals"
              className="p-5 rounded-lg h-40 w-full"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="mt-10 w-full text-lg bg-primary text-white py-3 rounded-lg"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {successMessage && (
            <p className="text-green-600 mt-3">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-600 mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default ContactForm
