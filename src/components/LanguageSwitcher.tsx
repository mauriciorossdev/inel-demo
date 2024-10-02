'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function LanguageSwitcher({
  className
}: {
  className: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const changeLanguage = (newLocale: string) => {
    const currentPathname = pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${currentPathname}`)
  }

  return (
    <Select
      value={locale}
      onValueChange={changeLanguage}
    >
      <SelectTrigger className={`w-[100px] ${className}`}>
        <SelectValue placeholder="Selecciona un idioma" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">Español</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  )
}
