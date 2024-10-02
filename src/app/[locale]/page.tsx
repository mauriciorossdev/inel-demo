'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const t = useTranslations('Index')
  const [programaSeleccionado, setProgramaSeleccionado] = useState('programs')

  const informacionProgramas = {
    masterclass: [
      {
        title: "Masterclass 1",
        description: "Garantiza la Protección de los Equipos Electrónicos ",
        date: "2024-01-01",
        hours: "10:00 - 12:00",
        gmt: "GMT-5",
        image: "/masterclass-1.jpeg",
        isFree: true
      },
      {
        title: "Masterclass 2",
        description: "Minimiza los accidentes eléctricos en tu trabajo",
        date: "2024-01-01",
        hours: "10:00 - 12:00",
        gmt: "GMT-5",
        image: "/masterclass-2.jpeg",
        isFree: true
      },
      {
        title: "Masterclass 3",
        description: "Impulsa la producción agrícola y ganadera",
        date: "2024-01-01",
        hours: "10:00 - 12:00",
        gmt: "GMT-5",
        image: "/masterclass-3.jpeg",
        isFree: true
      }
    ],
    programs: [
      {
        title: "En vivo",
        subtitle: "Sincrono",
        description: "Conéctate al horario de clases, interactúa con el instructor y resuelve tus dudas al momento.",
        image: "/sincrono.jpeg"
      },
      {
        title: "Grabado",
        subtitle: "Asincrono",
        description: "¿Sin tiempo? Lleva las clases a tu propio ritmo en el horario que desees..",
        image: "/asincrono.jpeg"
      }
    ],
    courses: [
      {
        title: "Curso 1",
        description: "Cursos corporativos - Ingeniería Eléctrica",
        image: "/curso-corporativo-1.jpeg"
      },
      {
        title: "Curso 2",
        description: "Cursos corporativos - Ingeniería Mecánica",
        image: "/curso-corporativo-2.jpeg"
      }
    ]
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredPoint, setHoveredPoint] = useState(null)

  const worldPoints = [
    { id: 1, x: "20%", y: "30%", name: "América del Norte" },
    { id: 2, x: "30%", y: "60%", name: "América del Sur" },
    { id: 3, x: "48%", y: "25%", name: "Europa" },
    { id: 4, x: "55%", y: "40%", name: "África" },
    { id: 5, x: "70%", y: "35%", name: "Asia" },
  ]

  return (
    <main className="flex min-h-screen flex-col md:p-0 lg:w-[90vw]">
      <section id="hero" className="z-[2] flex min-h-[50vh] lg:min-h-[70vh] h-full w-full flex-col items-center justify-between lg:flex-row ">
        <Image
          src="/hero.jpeg"
          alt="Hero"
          className="absolute z-[1] h-[50vh] md:h-[70vh] w-full object-cover object-[top_center] brightness-50 "
          style={{ objectFit: 'cover', width: '100vw', objectPosition: 'top center' }}
          width={1080}
          height={100}
        />
        <div className="z-[1] h-full mx-auto mt-[50%] lg:mt-0 mb-0 w-2/4 text-center text-white">
          <h1 className="text-3xl font-semibold text-white lg:text-5xl lg:leading-normal lg:font-bold">{t('title')}</h1>
        </div>
      </section>
      <section id="compromiso" className="bg-white flex flex-col items-center justify-center w-full min-h-[50vh] py-8 px-8">
        <div className="flex flex-col gap-4 items-center justify-center w-full">
          <h2 className="text-3xl font-semibold text-center lg:text-5xl lg:leading-normal lg:font-bold mb-6 bg-gradient-to-r from-[#00c4cc] to-[#0088cc] text-transparent bg-clip-text">
            {t('compromiso.title')}
          </h2>
          <div className="flex flex-row gap-2 items-center justify-between mb-6 min:w-1/2">
            <button
              className={`px-2 text-sm text-wrap lg:w-[118px] h-[48px] rounded-full transition-colors duration-300 border-2 border-[#0088cc] ${programaSeleccionado === 'masterclass' ? 'bg-[#0088cc] text-white  border-2 border-white' : 'bg-white text-[#0088cc] '}`}
              onClick={() => setProgramaSeleccionado('masterclass')}
            >
              {t('compromiso.masterclass')}
            </button>
            <button
              className={`px-2 text-sm text-wrap lg:w-[118px] h-[48px] rounded-full transition-colors duration-300 border-2 border-[#0088cc] ${programaSeleccionado === 'programs' ? 'bg-[#0088cc] text-white  border-2 border-white' : 'bg-white text-[#0088cc] '}`}
              onClick={() => setProgramaSeleccionado('programs')}
            >
              {t('compromiso.programs')}
            </button>
            <button
              className={`px-2 text-sm text-wrap lg:w-[118px] h-[48px] rounded-full transition-colors duration-300 border-2 border-[#0088cc] ${programaSeleccionado === 'courses' ? 'bg-[#0088cc] text-white  border-2 border-white' : 'bg-white text-[#0088cc] '}`}
              onClick={() => setProgramaSeleccionado('courses')}
            >
              {t('compromiso.courses')}
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={programaSeleccionado}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white text-center flex justify-center flex-col lg:flex-row gap-4"
            >
              {informacionProgramas[programaSeleccionado].map((programa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center bg-white rounded-lg p-4 pt-8 text-cyan-900 w-full lg:w-1/3 lg:min-w-[368px] lg:min-h-[424px] hover:shadow-lg hover:shadow-cyan-900/50 hover:cursor-pointer transition-all duration-300 "
                >
                 <div className='flex flex-col items-center justify-start h-full'>
                 <h3 className="text-2xl font-bold mb-2 text-center text-[#0088cc] ">{programa.title}</h3>
                 <p className="text-base mb-4">{programa.description}</p>
                 </div>
                  <Image src={programa.image} alt={programa.title} width={300} height={200} className="rounded-lg transition-all duration-300" />
                  {programa.isFree && (
                    <div className='absolute bottom-8 right-[34px] w-1/2 h-[32px] bg-[#0088cc] text-white font-bold text-lg rounded-l-full z-[10]'>
                      {t('texts.free')}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section id="world" className=" bg-white flex flex-col lg:flex-row items-center justify-center w-full min-h-[50vh] py-8 px-8">
        <div id="world-container" className="flex flex-col gap-4 items-center justify-center w-full lg:w-2/3 lg:pr-8">
          <h2 className="text-3xl m-0 p-0 font-semibold text-cyan-900 lg:text-5xl lg:leading-normal lg:font-bold">
            {t('world.title')}
          </h2>
          <p className="text-lg md:text-sm text-cyan-800 mb-4">
            {t('world.description')}
          </p>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-2xl relative"
          >
            <Image src="/world-map.svg" alt="World" width={800} height={400} className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,196,204,0.25)]" />
            {worldPoints.map((point) => (
              <div
                key={point.id}
                className="absolute w-3 h-3 bg-cyan-900 rounded-full cursor-pointer hover:w-6 hover:h-6 transition-all duration-300"
                style={{ left: point.x, top: point.y }}
                onMouseEnter={() => setHoveredPoint(point.id)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {hoveredPoint === point.id && (
                  <div className="absolute bottom-full bottom-10 left-1/2 transform -translate-x-1/2 bg-cyan-900 text-white px-2 py-1 pt-2 rounded text-xs whitespace-nowrap">
                    {point.name}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
        <div id="concepts-container" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-8 lg:mt-0 w-full lg:w-1/3 lg:mt-24">
          {[
            { icon: "/icon-check.png", title: t('world.concepts.double') },
            { icon: "/icon_ieee.png", title: t('world.concepts.ieee') },
            { icon: "/icon-teachers.png", title: t('world.concepts.teachers'), subtitle: "NPS del 80%" },
            { icon: "/icon-access.png", title: t('world.concepts.access') },
            { icon: "/icon-payment.png", title: t('world.concepts.payment') },
            { icon: "/icon-tutor.png", title: t('world.concepts.tutor') },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-2 rounded-lg relative"
            >
              <div className='h-[64px] w-[64px] bg-gradient-to-r from-[#00c4cc] to-[#0088cc] rounded-full p-2 flex items-center justify-center'>
                <Image src={item.icon} alt={item.title} width={24} height={36} className=" w-full max-w-[36px] min-h-[24px]" />
               
              </div>
              <h3 className="text-cyan-900 text-sm font-semibold mb-1 mt-2 h-[80px]">{item.title}</h3>

            </motion.div>
          ))}
        </div>
      </section>

      
    </main>
  )
}