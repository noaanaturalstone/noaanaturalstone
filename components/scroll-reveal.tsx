'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import React from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'slide-up'
  delay?: number
  className?: string
}

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationMap = {
    'fade-up': 'scroll-reveal-fade-up',
    'fade-down': 'scroll-reveal-fade-down',
    'fade-left': 'scroll-reveal-fade-left',
    'fade-right': 'scroll-reveal-fade-right',
    'scale': 'scroll-reveal-scale',
    'slide-up': 'scroll-reveal-slide-up',
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationMap[animation]} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationPlayState: isVisible ? 'running' : 'paused',
      }}
    >
      {children}
    </div>
  )
}
