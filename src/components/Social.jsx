import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

const Social = () => {
  const SOCIAL = [
    {
      icon: <Facebook size={26} />,
      name: 'Facebook',
      slashName: 'hk.vnct.24',
      domain: 'https://www.facebook.com/'
    },
    {
      icon: <Instagram size={26} />,
      name: 'Instagram',
      slashName: 'solivini_06',
      domain: 'https://www.instagram.com/'
    },
    {
      icon: <Linkedin size={26} />,
      name: 'LinkedIn',
      slashName: 'hoangkhoi2406',
      domain: 'https://www.linkedin.com/in/'
    }
  ]

  const CONTACT = {
    gmail: 'hoangkhoi.duong@estuary.solutions',
    phone: {
      link: '0562249850',
      mask: '+84 562 249 850'
    }
  }

  return (
    <>
      <div
        className='card connector relative col-span-1 h-16'
        style={{
          borderBottom: 'none',
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0
        }}
      >
        <p className='px-4 text-center text-sm font-bold'>Social Network</p>
      </div>
      <div className='card col-span-2 h-12 gap-8'>
        <a
          href={`mailto:${CONTACT.gmail}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Mail />
        </a>
        <p>or</p>
        <a
          className='flex items-center justify-center gap-2'
          href={`tel:${CONTACT.phone.link}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Phone />
        </a>
      </div>
      <div
        className='card z-10 col-span-3 -mt-4 flex-col gap-4'
        style={{
          borderTopLeftRadius: 0,
          borderTop: 'none'
        }}
      >
        {SOCIAL.map((social, index) => (
          <div
            key={index}
            className={`${index + 1 === SOCIAL.length ? 'mb-4' : ''} ${index === 0 ? 'mt-4' : ''} w-full px-4`}
          >
            <a
              href={`${social.domain + social.slashName}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-4 rounded-md bg-gray-950 px-4 py-4'
            >
              <div> {social.icon}</div>
              <p className='flex-1 text-center'>{social.slashName}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Social
