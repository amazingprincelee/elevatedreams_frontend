import ContactForm from '@/components/pages/contact-us/contact-form'
import HeroContactUs from '@/components/pages/contact-us/hero'
import DashboardFooter from '@/components/shared/footer/dashboard-footer'
import DashboardNavbar from '@/components/shared/navbar/dashboard-navbar'
import { FC } from 'react'

type Props = {}
const ContactUsPage: FC<Props> = ({}) => {
  return (
    <>
      <HeroContactUs />
      <ContactForm />
      <DashboardNavbar />
      <DashboardFooter />
    </>
  )
}
export default ContactUsPage
