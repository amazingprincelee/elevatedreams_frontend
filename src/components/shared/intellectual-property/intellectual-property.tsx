import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function InvestmentDetails() {
  return (
    <div className="mb-28 ">
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          Your ideas and creations are valuable. Protect them with our
          intellectual property services:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • Trademark Registration:
            </h2>
            <p className="text-gray-700 mt-2">
              Safeguard your brand identity by registering trademarks in the
              U.S.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • Copyright Registration:
            </h2>
            <p className="text-gray-700 mt-2">
              Protect your creative works, including film, music, art, and
              literature.
            </p>
          </div>

          {/* <div>
            <h2 className="text-lg font-semibold text-gray-900">
              EB5 Visa (Employment-Based Fifth Preference):
            </h2>
            <p className="text-gray-700 mt-2">
              This visa is ideal for those looking to invest in the U.S.
              economy. By making a substantial investment in a U.S. business
              (typically $1 million, or $500,000 in targeted employment areas),
              you can secure permanent residency for yourself and your immediate
              family while creating jobs for U.S. workers.
            </p>
          </div> */}
        </div>

        <div className="flex justify-center mt-6">
          <ConsultationButton />
        </div>
      </div>
    </div>
  )
}

export default InvestmentDetails
