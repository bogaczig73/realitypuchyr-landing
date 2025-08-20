'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Preload critical fonts
    if ('fonts' in document) {
      // @ts-ignore - Font loading API
      Promise.all([
        document.fonts.load('300 16px "League Spartan"'),
        document.fonts.load('400 16px "League Spartan"'),
        document.fonts.load('600 16px "League Spartan"'),
        document.fonts.load('700 16px "League Spartan"'),
      ]).then(() => {
        // Mark fonts as loaded
        document.documentElement.classList.add('fonts-loaded')
      })
    }
  }, [])

  return null
}
