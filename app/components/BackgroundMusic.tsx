'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const hasPlayedRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Ensure looping is set
    audio.loop = true
    audio.volume = 0.7 // Set volume to 70% for pleasant background music
    
    // Preload and start quickly
    audio.load()

    // Try to auto-play the music immediately
    const tryPlay = async () => {
      if (hasPlayedRef.current) return
      
      try {
        // Set currentTime to 0 to ensure it starts from beginning
        audio.currentTime = 0
        await audio.play()
        hasPlayedRef.current = true
      } catch (error) {
        // Autoplay was prevented (browser policy)
        // Will try again on user interaction
      }
    }

    // Attempt initial play immediately
    tryPlay()
    
    // Also try after a very short delay to catch any race conditions
    setTimeout(() => {
      if (!hasPlayedRef.current) {
        tryPlay()
      }
    }, 100)

    // Fallback: Play on any user interaction if autoplay failed
    const handleUserInteraction = () => {
      if (!hasPlayedRef.current && audio.paused) {
        tryPlay()
      }
    }

    // Listen for user interactions
    const events = ['click', 'touchstart', 'keydown', 'scroll']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true })
    })

    // Cleanup on unmount
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/for-oneli.mp3"
      loop
      preload="auto"
      className="hidden"
      aria-label="Background music"
    />
  )
}

