// components/ConsultationButton.tsx
'use client'
import React, { useState } from 'react'

const ConsultationButton = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  const handleClick = () => {
    if (!scriptLoaded) {
      // Create the script element to load the external script
      const script = document.createElement('script')
      script.src =
        'https://speakmeet.com/meet/embed/elevatedreams/booker_elevatedreams'
      script.async = true
      document.body.appendChild(script)

      // Set scriptLoaded to true after the script is appended
      script.onload = () => {
        console.log('Script loaded successfully')

        // After the script loads and the booking system is initialized, open the target URL in a new tab
        window.open('https://www.speakmeet.com/elevatedreams', '_blank') // Open in a new tab
      }

      script.onerror = () => {
        console.error('Error loading the script')
      }

      setScriptLoaded(true) // Update state to indicate script is loaded
    } else {
      // If script is already loaded, directly open the target URL in a new tab
      window.open('https://www.speakmeet.com/elevatedreams', '_blank') // Open in a new tab
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-secondary text-white py-4 px-6 rounded-md shadow-lg hover:bg-green-700"
    >
      BOOK CONSULTATION
    </button>
  )
}

export default ConsultationButton
