"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface RichTextRendererProps {
    content: string
    className?: string
}

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
    if (!content) return null

    // Split content by double newlines to separate paragraphs
    const paragraphs = content.split(/\n\n+/)

    return (
        <div className={cn("space-y-4", className)}>
            {paragraphs.map((paragraph, index) => {
                // Check if paragraph is a list item (starts with • or -)
                if (paragraph.trim().startsWith("•") || paragraph.trim().startsWith("- ")) {
                    const items = paragraph.split(/\n/).filter(line => line.trim())
                    return (
                        <ul key={index} className="list-disc pl-5 space-y-2 marker:text-amber-500">
                            {items.map((item, itemIndex) => (
                                <li key={itemIndex} className="pl-1">
                                    <FormattedText text={item.replace(/^[•-]\s*/, "")} />
                                </li>
                            ))}
                        </ul>
                    )
                }

                // Check if paragraph is a header (starts with ** and ends with **)
                const headerMatch = paragraph.match(/^\*\*(.*?)\*\*$/) || paragraph.match(/^\*\*(.*)\*\*:/)
                if (headerMatch) {
                    // It's a header
                    return (
                        <h3 key={index} className="text-xl font-bold text-amber-900 mt-6 mb-3 font-serif">
                            {headerMatch[1]}
                        </h3>
                    )
                }

                // Standard paragraph
                return (
                    <p key={index} className="leading-relaxed text-Neutral-700">
                        <FormattedText text={paragraph} />
                    </p>
                )
            })}
        </div>
    )
}

function FormattedText({ text }: { text: string }) {
    if (!text) return null

    // Split by bold markers (**text**)
    const parts = text.split(/(\*\*.*?\*\*)/g)

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <span key={index} className="font-bold text-amber-900/90">
                            {part.slice(2, -2)}
                        </span>
                    )
                }
                return <span key={index}>{part}</span>
            })}
        </>
    )
}
