import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

type TeamMember = {
  id: number
  name: string
  role: string
  image: string
  socials: { platform: string; link: string }[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Lorraine Birabil',
    role: 'Co founder',
    image: '/images/team/member1.png', // Updated path
    socials: [
      { platform: 'Facebook', link: 'https://facebook.com' },
      { platform: 'Twitter', link: 'https://twitter.com' },
      { platform: 'LinkedIn', link: 'https://linkedin.com' },
    ],
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    role: 'Co founder',
    image: '/images/team/member2.png', // Updated path
    socials: [
      { platform: 'Facebook', link: 'https://facebook.com' },
      { platform: 'Twitter', link: 'https://twitter.com' },
      { platform: 'LinkedIn', link: 'https://linkedin.com' },
    ],
  },
  {
    id: 3,
    name: 'Evans Dule',
    role: 'Co founder',
    image: '/images/team/member3.png', // Updated path
    socials: [
      { platform: 'Facebook', link: 'https://facebook.com' },
      { platform: 'Twitter', link: 'https://twitter.com' },
      { platform: 'LinkedIn', link: 'https://linkedin.com' },
    ],
  },
  // Add more team members as needed
]

const Team: FC = () => {
  return (
    <div className="def-contain mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ translateY: [50, 0], opacity: [0, 1] }}
        className="text-center mb-12"
      >
        <p className="text-sm text-green-600 font-medium">Popular Activities</p>
        <h2 className="text-3xl font-bold">
          Meet Our Experienced{' '}
          <span className="text-green-600">Team Members</span>
        </h2>
        <div className="flex justify-center mb-5 mt-5">
          <p className="text-center w-[50rem] text-lg">
            With years of experience across immigration, business formation, and
            intellectual property, our consultants are here to help you navigate
            your journey with confidence and clarity.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ translateY: [50, 0], opacity: [0, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={320}
              className="w-full h-80 object-cover object-top" // Adjusted to focus on the top of the image
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <div className="mt-4 flex gap-4 justify-center">
                  {member.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-600 transition-colors"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Team
