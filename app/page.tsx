'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Confetti from 'react-confetti'
import { Heart, Star, Sparkles, Gift, Camera, ArrowRight, Play, Pause } from 'lucide-react'

// ============================================
// EDITABLE CONFIGURATION SECTION
// ============================================
const CONFIG = {
  name: 'Oneli',
  heroMessage: 'Another year of amazing adventures begins today! ✨',
  
  candleLetters: [
    {
      id: 1,
      letter: 'H',
      message: 'Happy Birthday! May your special day be filled with endless joy and beautiful moments. 💖',
    },
    {
      id: 2,
      letter: 'A',
      message: 'Another amazing year begins! You are growing more beautiful and wonderful each day. ✨',
    },
    {
      id: 3,
      letter: 'P',
      message: 'Pure happiness and love surround you. May all your dreams come true! 🌟',
    },
    {
      id: 4,
      letter: 'P',
      message: 'Perfect moments await you. Embrace every adventure with a smile! 💫',
    },
    {
      id: 5,
      letter: 'Y',
      message: 'You are amazing! Your kindness and beauty light up the world around you. 🌸',
    },
    {
      id: 6,
      letter: 'B',
      message: 'Beautiful soul, may this year bring you everything your heart desires! 🎈',
    },
    {
      id: 7,
      letter: 'I',
      message: 'Incredible person! Your presence makes every moment brighter. 🌈',
    },
    {
      id: 8,
      letter: 'R',
      message: 'Radiant and wonderful! May your light shine even brighter this year. ☀️',
    },
    {
      id: 9,
      letter: 'T',
      message: 'Today is your day! Celebrate all the amazing things that make you special. 🎉',
    },
    {
      id: 10,
      letter: 'H',
      message: 'Here\'s to another year of beautiful memories and endless possibilities! 💕',
    },
    {
      id: 11,
      letter: 'D',
      message: 'Dream big, shine bright! You deserve all the happiness in the world. 🦋',
    },
    {
      id: 12,
      letter: 'A',
      message: 'Always remember how special you are. You make the world a better place! 🌺',
    },
    {
      id: 13,
      letter: 'Y',
      message: 'You bring so much joy to everyone around you. Happy Birthday! 🎊',
    },
  ],
  
  wishes: [
    'May all your dreams come true! ✨',
    'Wishing you endless happiness and joy! 💖',
    'May this year bring you amazing adventures! 🌟',
    'Here\'s to another year of beautiful memories! 🎈',
    'May your heart always be full of love! 💕',
    'Wishing you success in everything you do! 🌈',
    'May every day be filled with laughter! 😊',
    'Here\'s to a year of growth and discovery! 🌸',
    'May you always find reasons to smile! ☀️',
    'Wishing you peace, love, and endless joy! 🦋',
  ],
  
  videos: [
    { 
      id: 1, 
      src: '/Girl_Laughing_Touching_Frock_Spinning.mp4', 
      title: 'Joyful Moments',
      thumbnail: '/1.png',
    },
    { 
      id: 2, 
      src: '/Video_Generation_of_Girl_Touching_Hair.mp4', 
      title: 'Beautiful Memories',
      thumbnail: '/2.png',
    },
  ],
  
  galleryImages: [
    { id: 1, url: '/1.png', alt: 'Beautiful Memory 1' },
    { id: 2, url: '/2.png', alt: 'Beautiful Memory 2' },
    { id: 3, url: '/3.png', alt: 'Beautiful Memory 3' },
  ],
}

// ============================================
// COMPONENTS
// ============================================

// Animated Background with Video-like Effects
function AnimatedBackground() {
  const particles = Array.from({ length: 30 }, (_, i) => i)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Generate random values for particles
  const particleData = particles.map(() => ({
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1,
  }))

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255,111,174,0.15) 0%, rgba(255,215,232,0.1) 30%, rgba(255,247,251,1) 70%)',
            'radial-gradient(circle at 80% 50%, rgba(139,92,246,0.15) 0%, rgba(255,215,232,0.1) 30%, rgba(255,247,251,1) 70%)',
            'radial-gradient(circle at 50% 20%, rgba(255,111,174,0.15) 0%, rgba(139,92,246,0.1) 30%, rgba(255,247,251,1) 70%)',
            'radial-gradient(circle at 20% 50%, rgba(255,111,174,0.15) 0%, rgba(255,215,232,0.1) 30%, rgba(255,247,251,1) 70%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large floating bokeh circles */}
      {particleData.slice(0, 8).map((data, i) => (
        <motion.div
          key={`bokeh-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: data.size,
            height: data.size,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(255,111,174,0.2), transparent)'
              : 'radial-gradient(circle, rgba(139,92,246,0.2), transparent)',
          }}
          initial={{
            x: `${data.x}%`,
            y: `${data.y}%`,
          }}
          animate={{
            x: [
              `${data.x}%`,
              `${(data.x + 30) % 100}%`,
              `${(data.x - 20 + 100) % 100}%`,
              `${data.x}%`,
            ],
            y: [
              `${data.y}%`,
              `${(data.y + 20) % 100}%`,
              `${(data.y - 30 + 100) % 100}%`,
              `${data.y}%`,
            ],
            scale: [1, 1.2, 0.8, 1],
            opacity: [data.opacity, data.opacity * 1.5, data.opacity * 0.7, data.opacity],
          }}
          transition={{
            duration: data.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: data.delay,
          }}
        />
      ))}

      {/* Parallax glow that follows cursor */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255,111,174,0.5) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)',
          x: useTransform(springX, (v) => v - 192),
          y: useTransform(springY, (v) => v - 192),
        }}
      />
      
      {/* Floating decorative particles */}
      {particles.map((i) => {
        const data = particleData[i] || {
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 3,
        }
        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: `${data.x}%`,
              y: `${data.y}%`,
              scale: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [
                `${data.y}%`,
                `${(data.y - 20 + 100) % 100}%`,
                `${(data.y + 10) % 100}%`,
                `${data.y}%`,
              ],
              x: [
                `${data.x}%`,
                `${(data.x + 15) % 100}%`,
                `${(data.x - 10 + 100) % 100}%`,
                `${data.x}%`,
              ],
              rotate: [0, 180, 360],
              scale: [0.3, 0.6, 0.4, 0.3],
            }}
            transition={{
              duration: data.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: data.delay,
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="w-5 h-5 text-primary/25" />
            ) : i % 4 === 1 ? (
              <Star className="w-4 h-4 text-accent/25" />
            ) : i % 4 === 2 ? (
              <Sparkles className="w-4 h-4 text-secondary/30" />
            ) : (
              <div className="w-3 h-3 rounded-full bg-primary/20" />
            )}
          </motion.div>
        )
      })}

      {/* Animated gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 0%, rgba(255,111,174,0.05) 50%, transparent 100%)',
            'linear-gradient(135deg, transparent 0%, rgba(139,92,246,0.05) 50%, transparent 100%)',
            'linear-gradient(225deg, transparent 0%, rgba(255,215,232,0.05) 50%, transparent 100%)',
            'linear-gradient(45deg, transparent 0%, rgba(255,111,174,0.05) 50%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

// Hero Section
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center z-10 overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="text-center max-w-4xl mx-auto relative z-10 px-4 w-full">
        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-gradient">Happy Birthday,</span>
        </motion.h1>
        <motion.h2
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {CONFIG.name} 
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-text/90 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {CONFIG.heroMessage}
        </motion.p>
        
        {/* Subtle glow pulse */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </motion.section>
  )
}

// Sinhala Poem Section
function SinhalaPoemSection() {
  const lines = [
    'අහස් කුස කොයිතරම් සුදු වලා තියෙනවද',
    'වලා තුල සනීපෙට සදක් නිදි දන්නවද',
    'සුමුදු ඒ සද මඩල ඔනෙලි නුඹ දන්නවද',
    'මහද පැතු සුබ පැතුම් ඔය හිතට දැනෙනවද',
  ]

  return (
    <motion.section
      className="relative py-16 md:py-20 px-4 z-10 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-primary/30 relative overflow-hidden">
          {/* Decorative sparkles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/40" />
            </motion.div>
          ))}

          {/* Animated lines */}
          <div className="relative z-10 space-y-6 md:space-y-8">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className="text-xl md:text-2xl lg:text-3xl text-text font-body text-center leading-relaxed"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.05,
                  color: '#FF6FAE',
                  transition: { duration: 0.3 },
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-10 pointer-events-none"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(255,111,174,0.1) 0%, transparent 100%)',
                'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 100%)',
                'linear-gradient(225deg, rgba(255,215,232,0.1) 0%, transparent 100%)',
                'linear-gradient(45deg, rgba(255,111,174,0.1) 0%, transparent 100%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </motion.section>
  )
}

// Strawberry Component
function Strawberry({ 
  x, y, progress, threshold, rotate = 0, size = 'md' 
}: { 
  x: number, y: number, progress: any, threshold: number, rotate?: number, size?: 'sm' | 'md' 
}) {
  const scale = useTransform(progress, (v: number) => v > threshold ? 1 : 0)
  const opacity = useTransform(progress, (v: number) => v > threshold ? 1 : 0)
  
  return (
    <motion.div
      className={`absolute ${size === 'sm' ? 'w-5 h-6 md:w-6 md:h-8' : 'w-6 h-8 md:w-8 md:h-10'}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        scale,
        opacity,
      }}
    >
      <div className="w-full h-full bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-full relative">
        <div className={`absolute ${size === 'sm' ? '-top-0.5' : '-top-1'} left-1/2 -translate-x-1/2 ${size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'} bg-green-500 rounded-full`} />
      </div>
    </motion.div>
  )
}

// Candle Component
function Candle({ 
  candle, index, total, progress, isOpen, onOpen 
}: { 
  candle: typeof CONFIG.candleLetters[0], index: number, total: number, progress: any, isOpen: boolean, onOpen: (id: number) => void 
}) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  const radius = 120
  const x = 50 + (radius * Math.cos(angle)) / 10
  const y = 50 + (radius * Math.sin(angle)) / 10
  const threshold = index / total
  
  const scale = useTransform(progress, (v: number) => v > threshold ? 1 : 0)
  const opacity = useTransform(progress, (v: number) => v > threshold ? 1 : 0)
  const yPos = useTransform(progress, (v: number) => v > threshold ? 0 : 50)
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        scale,
        opacity,
        y: yPos,
      }}
      whileHover={{ 
        scale: 1.2,
        transition: { type: 'spring', stiffness: 400 }
      }}
      onClick={() => onOpen(candle.id)}
    >
      {/* Candle */}
      <div className="relative">
        {/* Candle Stick */}
        <div className="relative w-8 h-20 md:w-10 md:h-28 mx-auto">
          {/* Candle body */}
          <motion.div
            className="w-full h-full bg-gradient-to-b from-white via-primary/90 to-accent/80 rounded-t-lg shadow-lg border-2 border-white/40"
          >
            {/* Letter on candle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-heading text-lg md:text-2xl font-bold drop-shadow-lg">
                {candle.letter}
              </span>
            </div>
          </motion.div>

          {/* Flame */}
          <motion.div
            className="absolute -top-2 left-1/2 -translate-x-1/2"
            style={{
              opacity,
            }}
            animate={{
              scale: [1, 1.1, 0.9, 1],
              opacity: [0.9, 1, 0.8, 0.9],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Outer flame */}
            <motion.div
              className="w-3 h-6 md:w-4 md:h-8 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Inner flame */}
            <motion.div
              className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-4 md:w-2.5 md:h-5 bg-yellow-200 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Message Popup */}
      {isOpen && (
        <>
          {/* Confetti burst */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              className="absolute top-0 left-1/2 w-2 h-2 rounded-full"
              style={{
                background: ['#FF6FAE', '#8B5CF6', '#FFD6E8', '#FFB6C1'][i % 4],
              }}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 300,
                y: (Math.random() - 0.5) * 300,
                scale: [0, 1, 0],
                rotate: 720,
              }}
              transition={{
                duration: 2,
                delay: i * 0.05,
              }}
            />
          ))}

          <motion.div
            className="absolute top-32 md:top-36 left-1/2 -translate-x-1/2 w-80 md:w-96 z-50"
            style={{
              transform: `translate(-50%, -100%) translateY(-20px)`,
            }}
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
          >
            <div className="glass rounded-2xl p-8 shadow-2xl border-2 border-primary/40 relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

              <div className="flex items-start justify-between mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onOpen(candle.id)
                  }}
                  className="text-text/60 hover:text-primary text-xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>
              
              <motion.p
                className="text-text font-body text-base md:text-lg leading-relaxed mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {candle.message}
              </motion.p>
              
              <div className="flex justify-end items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}

// Birthday Cake Section - Scroll-Triggered Build Animation
function BirthdayCake() {
  const [openedLetter, setOpenedLetter] = useState<string | null>(null)
  
  // "HAPPY" letters - first row
  const happyLetters = [
    { letter: 'H', message: 'Happy Birthday! May your special day be filled with endless joy and beautiful moments. 💖' },
    { letter: 'A', message: 'Another amazing year begins! You are growing more beautiful and wonderful each day. ✨' },
    { letter: 'P', message: 'Pure happiness and love surround you. May all your dreams come true! 🌟' },
    { letter: 'P', message: 'Perfect moments await you. Embrace every adventure with a smile! 💫' },
    { letter: 'Y', message: 'You are amazing! Your kindness and beauty light up the world around you. 🌸' },
  ]
  
  // "BIRTHDAY" letters - second row
  const birthdayLetters = [
    { letter: 'B', message: 'Beautiful soul, may this year bring you everything your heart desires! 🎈' },
    { letter: 'I', message: 'Incredible person! Your presence makes every moment brighter. 🌈' },
    { letter: 'R', message: 'Radiant and wonderful! May your light shine even brighter this year. ☀️' },
    { letter: 'T', message: 'Today is your day! Celebrate all the amazing things that make you special. 🎉' },
    { letter: 'H', message: 'Here\'s to another year of beautiful memories and endless possibilities! 💕' },
    { letter: 'D', message: 'Dream big, shine bright! You deserve all the happiness in the world. 🦋' },
    { letter: 'A', message: 'Always remember how special you are. You make the world a better place! 🌺' },
    { letter: 'Y', message: 'You bring so much joy to everyone around you. Happy Birthday! 🎊' },
  ]

  return (
    <section className="relative py-20 px-4 z-10 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Happy Birthday! 🎉✨
        </motion.h2>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Floating sparkles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/40" />
            </motion.div>
          ))}

          {/* Letters Display - Two Rows */}
          <div className="flex flex-col items-center gap-6 md:gap-8 px-4">
            {/* HAPPY Row */}
            <div className="flex justify-center items-center gap-2 md:gap-3 relative z-20">
              {happyLetters.map((item, index) => {
                const letterId = `happy-${item.letter}-${index}`
                const isOpen = openedLetter === letterId
                
                return (
                  <motion.div
                    key={letterId}
                    className="relative z-20"
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    <motion.button
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl glass shadow-lg border-2 border-primary/30 flex items-center justify-center cursor-pointer group z-20"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0],
                        boxShadow: '0 10px 30px rgba(255, 111, 174, 0.4)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setOpenedLetter(isOpen ? null : letterId)}
                    >
                      {/* Letter */}
                      <span className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                        {item.letter}
                      </span>
                      
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.button>

                    {/* Message Popup - Behind letters */}
                    {isOpen && (
                      <>
                        {/* Confetti burst */}
                        {Array.from({ length: 15 }).map((_, i) => (
                          <motion.div
                            key={`confetti-${i}`}
                            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full z-10"
                            style={{
                              background: ['#FF6FAE', '#8B5CF6', '#FFD6E8', '#FFB6C1'][i % 4],
                            }}
                            initial={{
                              x: 0,
                              y: 0,
                              scale: 0,
                              rotate: 0,
                            }}
                            animate={{
                              x: (Math.random() - 0.5) * 200,
                              y: (Math.random() - 0.5) * 200 - 50,
                              scale: [0, 1, 0],
                              rotate: 720,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.05,
                            }}
                          />
                        ))}

                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 left-full ml-4 md:ml-6 w-72 md:w-80 z-10"
                          initial={{ opacity: 0, scale: 0.5, x: -20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                        >
                          <div className="glass rounded-2xl p-6 shadow-2xl border-2 border-primary/40 relative overflow-hidden">
                            {/* Decorative corners */}
                            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
                            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

                            <div className="flex items-start justify-between mb-4">
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              >
                                <Sparkles className="w-6 h-6 text-primary" />
                              </motion.div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setOpenedLetter(null)
                                }}
                                className="text-text/60 hover:text-primary text-xl font-bold transition-colors"
                              >
                                ×
                              </button>
                            </div>
                            
                            <motion.p
                              className="text-text font-body text-base md:text-lg leading-relaxed mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {item.message}
                            </motion.p>
                            
                            <div className="flex justify-end items-center gap-2">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* BIRTHDAY Row */}
            <div className="flex justify-center items-center gap-2 md:gap-3 relative z-20">
              {birthdayLetters.map((item, index) => {
                const letterId = `birthday-${item.letter}-${index}`
                const isOpen = openedLetter === letterId
                
                return (
                  <motion.div
                    key={letterId}
                    className="relative z-20"
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (happyLetters.length + index) * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    <motion.button
                      className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl glass shadow-lg border-2 border-primary/30 flex items-center justify-center cursor-pointer group z-20"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0],
                        boxShadow: '0 10px 30px rgba(255, 111, 174, 0.4)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setOpenedLetter(isOpen ? null : letterId)}
                    >
                      {/* Letter */}
                      <span className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                        {item.letter}
                      </span>
                      
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl -z-10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.button>

                    {/* Message Popup - Behind letters */}
                    {isOpen && (
                      <>
                        {/* Confetti burst */}
                        {Array.from({ length: 15 }).map((_, i) => (
                          <motion.div
                            key={`confetti-${i}`}
                            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full z-10"
                            style={{
                              background: ['#FF6FAE', '#8B5CF6', '#FFD6E8', '#FFB6C1'][i % 4],
                            }}
                            initial={{
                              x: 0,
                              y: 0,
                              scale: 0,
                              rotate: 0,
                            }}
                            animate={{
                              x: (Math.random() - 0.5) * 200,
                              y: (Math.random() - 0.5) * 200 - 50,
                              scale: [0, 1, 0],
                              rotate: 720,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.05,
                            }}
                          />
                        ))}

                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 left-full ml-4 md:ml-6 w-72 md:w-80 z-10"
                          initial={{ opacity: 0, scale: 0.5, x: -20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                        >
                          <div className="glass rounded-2xl p-6 shadow-2xl border-2 border-primary/40 relative overflow-hidden">
                            {/* Decorative corners */}
                            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
                            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
                            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

                            <div className="flex items-start justify-between mb-4">
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              >
                                <Sparkles className="w-6 h-6 text-primary" />
                              </motion.div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setOpenedLetter(null)
                                }}
                                className="text-text/60 hover:text-primary text-xl font-bold transition-colors"
                              >
                                ×
                              </button>
                            </div>
                            
                            <motion.p
                              className="text-text font-body text-base md:text-lg leading-relaxed mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {item.message}
                            </motion.p>
                            
                            <div className="flex justify-end items-center gap-2">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Video Showcase Section with Auto-Play on Scroll
function VideoShowcase() {
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  const containerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  // Get only the second video (id: 2) - remove first video
  const video = CONFIG.videos.find(v => v.id === 2)

  // Wishing quotes with animations
  const quotes = [
    'May your special day be filled with endless joy and beautiful moments! 💖',
    'Another amazing year begins! You are growing more beautiful each day. ✨',
    'Pure happiness and love surround you. May all your dreams come true! 🌟',
    'Perfect moments await you. Embrace every adventure with a smile! 💫',
    'You are amazing! Your kindness lights up the world around you. 🌸',
    'Beautiful soul, may this year bring you everything your heart desires! 🎈',
    'Incredible person! Your presence makes every moment brighter. 🌈',
    'Radiant and wonderful! May your light shine even brighter this year. ☀️',
  ]

  useEffect(() => {
    // Auto-rotate quotes
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [quotes.length])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Play when 50% of video is visible
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const videoId = parseInt(entry.target.getAttribute('data-video-id') || '0')
        const videoElement = videoRefs.current[videoId]

        if (!videoElement) return

        if (entry.isIntersecting) {
          // Video is in view - play it
          videoElement.play().catch(() => {
            // Autoplay might be blocked, that's okay
          })
        } else {
          // Video is out of view - pause it
          videoElement.pause()
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all video containers
    Object.keys(containerRefs.current).forEach((key) => {
      const container = containerRefs.current[parseInt(key)]
      if (container) {
        observer.observe(container)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (!video) return null

  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Beautiful Moments ✨
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Animated Quotes */}
          <motion.div
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating sparkles */}
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={`quote-sparkle-${i}`}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'easeInOut',
                  }}
                >
                  <Sparkles className="w-4 h-4 text-primary/40" />
                </motion.div>
              ))}

              {/* Quote Cards */}
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center px-6"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{
                    opacity: currentQuoteIndex === index ? 1 : 0,
                    scale: currentQuoteIndex === index ? 1 : 0.8,
                    y: currentQuoteIndex === index ? 0 : 20,
                    zIndex: currentQuoteIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <div className="glass rounded-2xl p-8 shadow-2xl border-2 border-primary/40 relative max-w-md">
                    <motion.div
                      className="absolute -top-3 -left-3"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.p
                      className="text-text font-body text-lg md:text-xl leading-relaxed text-center"
                      key={index}
                    >
                      {quote}
                    </motion.p>
                    <motion.div
                      className="absolute -bottom-3 -right-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              ref={(el) => {
                containerRefs.current[video.id] = el
              }}
              data-video-id={video.id}
              className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30"
            >
              <video
                ref={(el) => {
                  videoRefs.current[video.id] = el
                }}
                className="w-full h-auto object-cover"
                src={video.src}
                loop
                muted
                playsInline
                poster={video.thumbnail}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Video title */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white/90" />
                  <h3 className="text-white font-heading text-lg font-semibold">{video.title}</h3>
                </div>
              </motion.div>

              {/* Decorative sparkles */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Sparkles className="w-6 h-6 text-white/80" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Wish Jar Section
function WishJar() {
  const [currentWish, setCurrentWish] = useState<string | null>(null)
  const [isFlipping, setIsFlipping] = useState(false)

  const revealWish = () => {
    setIsFlipping(true)
    setTimeout(() => {
      const randomWish = CONFIG.wishes[Math.floor(Math.random() * CONFIG.wishes.length)]
      setCurrentWish(randomWish)
      setIsFlipping(false)
    }, 300)
  }

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold mb-8 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Wish Jar ✨
        </motion.h2>

        <motion.div
          className="relative min-h-[300px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Wish card with flip animation */}
          <motion.div
            className="glass rounded-2xl p-8 shadow-xl w-full min-h-[250px] flex items-center justify-center relative overflow-hidden"
            animate={{
              rotateY: isFlipping ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {currentWish ? (
              <motion.p
                className="text-2xl md:text-3xl font-heading text-primary text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentWish}
              </motion.p>
            ) : (
              <div className="text-center">
                <Gift className="w-16 h-16 mx-auto mb-4 text-primary/50" />
                <p className="text-text/60 text-lg">Click to reveal a wish!</p>
              </div>
            )}

            {/* Sparkle particles */}
            {currentWish && (
              <>
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: '50%',
                      y: '50%',
                      scale: 0,
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      scale: [0, 1, 0],
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={revealWish}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-5 h-5" />
          Reveal a Wish
        </motion.button>
      </div>
    </section>
  )
}

// Photo Gallery Section
function PhotoGallery() {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Beautiful Memories
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CONFIG.galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-2xl aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Actual image */}
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Shine sweep effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{
                    x: '200%',
                    transition: { duration: 0.6 },
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function CTASection({ onWishClick }: { onWishClick: () => void }) {
  const [showToast, setShowToast] = useState(false)

  const handleMakeWish = () => {
    onWishClick()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Make a Wish! ✨
          </h2>
          <p className="text-lg text-text/70 mb-8">
            Close your eyes, make a wish, and let the magic begin...
          </p>
          
          <motion.button
            onClick={handleMakeWish}
            className="px-10 py-5 bg-gradient-to-r from-primary via-accent to-primary text-white rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1,
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <span>Make a Wish</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Toast notification */}
        {showToast && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-4 shadow-2xl z-50"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold text-primary">✨ Wish sent!</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Main Page Component
export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleMakeWish = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Confetti */}
      {showConfetti && windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      {/* Animated background */}
      <AnimatedBackground />

      {/* Sections */}
      <HeroSection />
      <SinhalaPoemSection />
      <BirthdayCake />
      <VideoShowcase />
      <WishJar />
      <PhotoGallery />
      <CTASection onWishClick={handleMakeWish} />

      {/* Footer */}
      <footer className="relative py-8 text-center text-text/60 z-10">
        <p>Made with 💖 for {CONFIG.name}</p>
      </footer>
    </main>
  )
}

