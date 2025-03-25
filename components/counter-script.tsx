"use client"

import { useEffect } from "react"

export function CounterScript() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter")

    const animateCounter = (counter: Element) => {
      const target = Number.parseInt(counter.getAttribute("data-target") || "0")
      const duration = 1500 // durata in millisecondi
      const frameRate = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameRate)
      let frame = 0

      const animate = () => {
        frame++
        const progress = frame / totalFrames
        const currentCount = Math.round(progress * target)

        if (counter instanceof HTMLElement) {
          counter.textContent = `${currentCount}%`
        }

        if (frame < totalFrames) {
          requestAnimationFrame(animate)
        } else {
          if (counter instanceof HTMLElement) {
            counter.textContent = `${target}%`
          }
        }
      }

      animate()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    counters.forEach((counter) => {
      observer.observe(counter)
    })

    return () => {
      counters.forEach((counter) => {
        observer.unobserve(counter)
      })
    }
  }, [])

  return null
}

