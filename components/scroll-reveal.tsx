"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "blur" | "fade-down"

interface ScrollRevealProps {
    children: ReactNode
    variant?: AnimationVariant
    delay?: number
    duration?: number
    threshold?: number
    className?: string
    once?: boolean
}

export function ScrollReveal({
    children,
    variant = "fade-up",
    delay = 0,
    duration = 600,
    threshold = 0.1,
    className = "",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once && ref.current) {
                        observer.unobserve(ref.current)
                    }
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold, once])

    const getInitialStyles = (): React.CSSProperties => {
        const baseStyles: React.CSSProperties = {
            opacity: 0,
            transition: `all ${duration}ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
        }

        switch (variant) {
            case "fade-up":
                return { ...baseStyles, transform: "translateY(40px)" }
            case "fade-down":
                return { ...baseStyles, transform: "translateY(-40px)" }
            case "fade-left":
                return { ...baseStyles, transform: "translateX(40px)" }
            case "fade-right":
                return { ...baseStyles, transform: "translateX(-40px)" }
            case "scale":
                return { ...baseStyles, transform: "scale(0.9)" }
            case "blur":
                return { ...baseStyles, filter: "blur(10px)" }
            default:
                return baseStyles
        }
    }

    const getVisibleStyles = (): React.CSSProperties => ({
        opacity: 1,
        transform: "translateY(0) translateX(0) scale(1)",
        filter: "blur(0)",
        transition: `all ${duration}ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
    })

    return (
        <div
            ref={ref}
            className={className}
            style={isVisible ? getVisibleStyles() : getInitialStyles()}
        >
            {children}
        </div>
    )
}

// Staggered children animation wrapper
interface StaggerContainerProps {
    children: ReactNode
    staggerDelay?: number
    className?: string
}

export function StaggerContainer({
    children,
    staggerDelay = 100,
    className = "",
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (ref.current) observer.unobserve(ref.current)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <div
                        key={index}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateY(0)" : "translateY(30px)",
                            transition: `all 500ms cubic-bezier(0.23, 1, 0.32, 1) ${index * staggerDelay}ms`,
                        }}
                    >
                        {child}
                    </div>
                ))
                : children}
        </div>
    )
}
