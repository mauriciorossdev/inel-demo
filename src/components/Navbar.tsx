'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'

export default function Navbar() {
  const t = useTranslations('Index')
  const [selectedOption, setSelectedOption] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const locale = router.locale || 'es'

  const menuItems = [
    {
      name: 'home',
      href: `/${locale}`
    },
    {
      name: 'about',
      href: `/${locale}/about`
    },
    {
      name: 'study',
      href: `/${locale}/study`
    },
    {
      name: 'business',
      href: `/${locale}/business`
    },
    {
      name: 'work',
      href: `/${locale}/work`
    }
  ]

  const getItemClasses = (item: string) => {
    const baseClasses = "border-2 border-white font-semibold text-center rounded-full px-2 py-2 w-full md:w-[140px] hover:cursor-pointer"
    return selectedOption === item
      ? `bg-white text-black ${baseClasses}`
      : `bg-transparent text-white ${baseClasses}`
  }

  return (
    <nav className="bg-gradient-to-r from-[#00c4cc] to-[#0088cc] p-4">
      <div className="flex justify-between items-center">
        
        <button
          className="md:hidden text-white text-5xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <LanguageSwitcher className="block md:hidden" />
      </div>
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-end items-center gap-2 mt-4 md:mt-0`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`${getItemClasses(item.name)} w-full `}
            onClick={() => {
              setSelectedOption(item.name)
              setIsMenuOpen(false)
            }}
          >
           <Link href={item.href} className="block w-full">{t(`menu.${item.name}`)}</Link>
          </li>
        ))}
        <li>
          <LanguageSwitcher className="hidden md:flex align-middle" />
        </li>
      </ul>
    </nav>
  )
}
