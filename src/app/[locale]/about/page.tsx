'use client'

import { useTranslations } from "next-intl"
import { motion, useInView } from "framer-motion" // Añade useInView
import { useRef } from 'react' // Añade useRef

export default function About() {
  const t = useTranslations('About')

  // Obtener los pasos desde las traducciones
  const steps = [
   {
    title: t('steps.step1.title'),
    description: t('steps.step1.description')
   },
   {
    title: t('steps.step2.title'),
    description: t('steps.step2.description')
   },
   {
    title: t('steps.step3.title'),
    description: t('steps.step3.description')
   },
   {
    title: t('steps.step4.title'),
    description: t('steps.step4.description')
   },
   
    // Añade más pasos según sea necesario
  ]

  const hitos = [
    {
      year: '2017',
      description: 'El 28 junio fundamos Inel, Escuela Técnica de Ingeniería.',
      icon: 'building'
    },
    {
      year: '2018',
      description: 'Nos abrimos a nuevos públicos a nivel de Latinoamérica',
      icon: 'lightbulb'
    },
    {
      year: '2020',
      description: 'Llegamos a brindar 40 cursos, 6 programas y especializar a 5000 alumnos al más alto nivel.',
      icon: 'bolt'
    },
    {
      year: '2022',
      description: 'El 20 de junio participamos por primera vez del evento más importante de nuestro sector: Expo Energía Perú 2022.',
      icon: 'target'
    },
    {
      year: '2023',
      description: 'Fuimos aprobados como proveedores de of IEEE CEU/PDH Certificates.',
      icon: 'rocket'
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="container mx-auto px-4 py-20 text-center lg:w-[80vw]">
      <h1 className="text-5xl lg:w-1/2 font-bold mb-8 mx-auto  text-center bg-gradient-to-t from-blue-500 to-cyan-500 text-transparent bg-clip-text">{t('title')}</h1>
      
      {/* Vista horizontal para pantallas grandes */}
      <div className="hidden md:block relative py-20">
        <motion.div 
          className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="flex justify-between relative"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 1,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center w-1/4 ${
                index % 2 === 0 ? 'mt-20' : 'mt-0'
              }`}
              variants={{
                hidden: { opacity: 0, y: index % 2 === 0 ? 20 : -20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className={`text-center h-[92px] ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-t from-blue-500 to-cyan-500 text-transparent bg-clip-text">{step.title}</h2>
                <p className={`text-sm text-center`}>{step.description}</p>
              </div>
              <div className={`w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold ${index % 2 === 0 ? 'order-1 mt-4' : 'order-1 mb-4'}`}>
                <div className="w-6  h-6 bg-white rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Vista vertical para dispositivos móviles */}
      <div className="md:hidden">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start justify-start text-left gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0 mr-2 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">{step.title}</h2>
                <p className="text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <section id="hitos" className="mt-20">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-t from-blue-500 to-cyan-500 text-transparent bg-clip-text">Hitos en INEL</h2>
        <p className="mb-10">Estos hechos relevantes representan avances significativos que han marcado el crecimiento de nuestra organización.</p>
        
        {/* Vista para pantallas grandes */}
        <div className="hidden md:block relative py-20 mt-32" ref={ref}>
          <div className="absolute left-0 right-0 bottom-0 bg-black" style={{height: '1px'}}></div>
          <div className="relative h-[300px]">
            <div className="absolute left-0 right-0 bottom-0 bg-black" style={{
              height: '2px',
              transform: 'rotate(-12deg)',
              transformOrigin: 'bottom left'
            }}></div>
            {hitos.map((hito, index) => (
              <motion.div 
                key={index} 
                className="absolute flex flex-col items-center" 
                style={{
                  left: `${index * 20}%`, 
                  bottom: `${index * 50}px`
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                 <motion.div 
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: (index * 0.2) + 0.2 }}
                >
                  <h3 className="text-xl font-bold">{hito.year}</h3>
                  <p className="text-sm max-w-[150px]">{hito.description}</p>
                </motion.div>
                <motion.div 
                  className="w-[100px] h-[100px] bg-gradient-to-t from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 20 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  <i className={`fas fa-${hito.icon}`}></i>
                </motion.div>
               
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vista para dispositivos móviles */}
        <div className="md:hidden space-y-8 relative" ref={ref}>
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-black"></div>
          {hitos.map((hito, index) => (
            <motion.div 
              key={index} 
              className="flex items-start relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0 mr-4 flex items-center justify-center text-white text-xl z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: (index * 0.2) + 0.2 }}
              >
                <i className={`fas fa-${hito.icon}`}></i>
              </motion.div>
              <motion.div 
                className="flex-grow text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: (index * 0.2) + 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-t from-cyan-500 to-cyan-900 text-transparent bg-clip-text">{hito.year}</h3>
                <p className="text-base">{hito.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}