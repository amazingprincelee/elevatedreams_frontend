import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function InvestmentDetails() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Internation Investment
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We simplify the process of building a life and business in the United
          States, focusing on three key pathways:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • EB1 Visa (Employment-Based First Preference):
            </h2>
            <p className="text-gray-700 mt-2">
              If you’ve reached the top of your field—whether in the arts,
              sciences, business, or athletics—the EB1 visa is designed for you.
              This visa is for those who have extraordinary achievements that
              set them apart. It’s also available for outstanding professors,
              researchers, or multinational executives and managers. What’s
              unique about this visa is that it doesn’t require a job offer,
              meaning you can apply based on your accomplishments.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • EB2 Visa (Employment-Based Second Preference):
            </h2>
            <p className="text-gray-700 mt-2">
              If you hold an advanced degree (Master’s or higher) or have
              exceptional talent in your field, the EB2 visa may be your gateway
              to the U.S. While this visa usually requires a job offer from a
              U.S. employer, the National Interest Waiver (NIW) allows you to
              skip this requirement if your work benefits the U.S. as a whole.
              This pathway is often used by researchers, entrepreneurs, and
              artists making a meaningful impact.
            </p>
          </div>

          <div>
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
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <ConsultationButton />
        </div>
      </div>
    </div>
  )
}

export default InvestmentDetails
