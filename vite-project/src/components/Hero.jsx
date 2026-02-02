import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
  {
    title: 'IRON MAN',
    desc: `Un esprit visionnaire enfermé dans une armure de pointe. Alimenté par l’intelligence, et non par des super-pouvoirs. Tony Stark construit des solutions là où d’autres voient des limites. Innovation, sacrifice et responsabilité le définissent. Un héros forgé par le choix, et non par le destin.`,
    bg: 'linear-gradient(135deg, #1a0000, #3b0a0a, #090000)',
    image: './images/a1.png',
    offsetX: 0,            
  },
  {
    title: 'THOR',
    desc: `Né comme un dieu, façonné par l’humilité. Porteur de Mjolnir et protecteur des royaumes. Une force guidée par l’honneur et la loyauté. Le tonnerre répond à sa volonté. Un guerrier qui apprend ce que signifie réellement être digne.`,
    bg: 'linear-gradient(135deg, #020a18, #071d3a, #010409)',
    image: './images/a2.png',
    offsetX: 60,             
  },
  {
    title: 'SPIDER MAN',
    desc: `Un héros du quartier au cœur chargé de responsabilités. Doté de pouvoirs, mais lié par le sens du devoir. Il équilibre courage, doute et sacrifice. Chaque chute lui enseigne la résilience. La preuve que même une vie ordinaire peut devenir extraordinaire.`,
    bg: 'linear-gradient(135deg, #050505, #1a0000, #020b14)',
    image: './images/a3.png',
    offsetX: 210,            
  },
  {
    title: 'CAPTAIN AMERICA',
    desc: `Un symbole d’espoir face au chaos. Une force ancrée dans des valeurs inébranlables. Il dirige non par la force, mais par l’exemple. Fidèle à la vérité, à la justice et à l’humanité. Un soldat qui ne cesse jamais de défendre ce qui est juste.`,
    bg: 'linear-gradient(135deg, #020f08, #06301a, #010805)',
    image: './images/a4.png',
    offsetX: 250,
  },
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < slides.length - 1) {
      setIndex((prev) => prev + 1)
    }
  }

  return (
    <section className="hero" style={{ background: slides[index].bg }}>

      <div className="left-stack">
        {slides.slice(0, index).map((slide) => (
          <motion.div
            key={slide.image}
            className="stack-image"
            layoutId={slide.image}
            layout="position"
            style={{ background: slide.bg }}
          >
            <img src={slide.image} alt="" />
          </motion.div>
        ))}
      </div>

      <div className="main-slide">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            className="hero-text"
            initial={{ y: 40, opacity: 0 }}   
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1>{slides[index].title}</h1>
            <p>{slides[index].desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className={`hero-image ${index === slides.length - 1 ? 'center-image' : ''}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={slides[index].image}
              layoutId={slides[index].image}
              layout="position"
              src={slides[index].image}
              alt=""
              initial={{
                opacity: 0,
                x: 120 + (slides[index].offsetX || 0),
                scale: 1,
              }}
              animate={{
                opacity: 1,
                x: slides[index].offsetX || 0,   
                scale: 1,
              }}
              exit={{
                scale: 0.35,
                opacity: 1,
                transformOrigin: 'right center',
              }}
              transition={{
                layout: {
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                },
                x: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
            />
          </AnimatePresence>
        </div>

      </div>

      <button className="arrow right" onClick={next}>
        ›
      </button>
    </section>
  )
}

export default Hero
