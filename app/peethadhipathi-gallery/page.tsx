"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/lib/language-context"

export default function PeethadhipathiGalleryPage() {
  const { t } = useLanguage()
  const [activeSwamiIndex, setActiveSwamiIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  const peethadhipathis = [
    {
      id: 1,
      name: t("swami1.name"),
      title: t("swami1.title"),
      period: t("swami1.period"),
      image: "/mouna-swami-portrait-1.jpg",
      imagePosition: "object-top",
      gallery: [
        "/mouna-swami-portrait-1.jpg",
        "/mouna-swami-tapas.jpg",
        "/mouna-swami-seated.jpg",
        "/mouna-swami-procession.jpg",
      ],
      description: t("swami1.long_description"),
      contributions: [
        t("swami1.contribution1"),
        t("swami1.contribution2"),
        t("swami1.contribution3"),
        t("swami1.contribution4"),
        t("swami1.contribution5"),
        t("swami1.contribution6"),
        t("swami1.contribution7"),
      ],
    },
    {
      id: 2,
      name: t("swami2.name"),
      title: t("swami2.title"),
      period: t("swami2.period"),
      image: "/vimalananda-bharati-portrait.jpg",
      imagePosition: "object-top",
      gallery: ["/vimalananda-bharati-portrait.jpg", "/vimalananda-bharati-statue.jpg"],
      description: t("swami2.long_description"),
      contributions: [
        t("swami2.contribution1"),
        t("swami2.contribution2"),
        t("swami2.contribution3"),
        t("swami2.contribution4"),
      ],
    },
    {
      id: 3,
      name: t("swami3.name"),
      title: t("swami3.title"),
      period: t("swami3.period"),
      image: "/trivikrama-ramananda-standing.jpg",
      imagePosition: "object-top",
      gallery: ["/trivikrama-ramananda-standing.jpg", "/trivikrama-ramananda-puja.jpg", "/trivikrama-ramananda-official.jpg"],
      description: t("swami3.long_description"),
      contributions: [
        t("swami3.contribution1"),
        t("swami3.contribution2"),
        t("swami3.contribution3"),
        t("swami3.contribution4"),
      ],
    },
    {
      id: 4,
      name: t("swami4.name"),
      title: t("swami4.title"),
      period: t("swami4.period"),
      image: "/siva-chidananda-standing.jpg",
      imagePosition: "object-top",
      gallery: [
        "/siva-chidananda-standing.jpg",
        "/siva-chidananda-seated.jpg",
      ],
      description: t("swami4.long_description"),
      contributions: [
        t("swami4.contribution1"),
        t("swami4.contribution2"),
        t("swami4.contribution3"),
        t("swami4.contribution4"),
        t("swami4.contribution5"),
      ],
    },
    {
      id: 5,
      name: t("swami5.name"),
      title: t("swami5.title"),
      period: t("swami5.period"),
      image: "/peethadhipathi-updated.png",
      imagePosition: "object-top",
      gallery: [
        "/peethadhipathi-updated.png",
        "/siddheswarananda-blessing.png",
        "/siddheswarananda-seated.png",
        "/siddheswarananda-garland.jpg",
        "/siddheswarananda-bharati-portrait.png"
      ],
      description: t("swami5.long_description"),
      contributions: [
        t("swami5.contribution1"),
        t("swami5.contribution2"),
        t("swami5.contribution3"),
        t("swami5.contribution4"),
        t("swami5.contribution5"),
        t("swami5.contribution6"),
      ],
    },
    {
      id: 6,
      name: t("swami6.name"),
      title: t("swami6.title"),
      period: t("swami6.period"),
      image: "/datteshwarananda-final.jpg",
      imagePosition: "object-top",
      gallery: ["/datteshwarananda-final.jpg", "/datteshwarananda-standing.jpg", "/datteshwarananda-blessing.jpg", "/datteshwarananda-throne.jpg"],
      description: t("swami6.long_description"),
      contributions: [
        t("swami6.contribution1"),
        t("swami6.contribution2"),
        t("swami6.contribution3"),
        t("swami6.contribution4"),
        t("swami6.contribution5"),
      ],
    },
  ]

  const activeSwami = peethadhipathis[activeSwamiIndex]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextSwami = () => {
    setActiveSwamiIndex((prev) => (prev + 1) % peethadhipathis.length)
    setCurrentImageIndex(0)
  }

  const prevSwami = () => {
    setActiveSwamiIndex((prev) => (prev - 1 + peethadhipathis.length) % peethadhipathis.length)
    setCurrentImageIndex(0)
  }

  const openLightbox = (imageIndex: number) => {
    setLightboxImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % activeSwami.gallery.length)
  }

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + activeSwami.gallery.length) % activeSwami.gallery.length)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-neutral-950">
        {/* Hero Section - Devotional & Respectful */}
        <div className="relative min-h-[80vh] flex items-center overflow-hidden bg-radial-[at_50%_0%] from-amber-900/40 via-neutral-950 to-neutral-950">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 pt-20 pb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSwami.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm">
                      <p className="text-amber-300 font-medium tracking-widest uppercase text-xs">
                        {activeSwami.period === "Successor" ? "Successor Designate" : activeSwami.period}
                      </p>
                    </div>
                    <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-amber-200 to-amber-500 font-bold mb-6 leading-tight drop-shadow-sm">
                      {activeSwami.name}
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent mx-auto md:mx-0 mb-6" />
                    <p className="text-amber-100/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                      {activeSwami.title}
                    </p>
                  </motion.div>

                  {/* Desktop Navigation Arrows (Moved here for better UX) */}
                  <div className="hidden md:flex items-center gap-4 mt-12">
                    <button
                      onClick={prevSwami}
                      className="p-3 rounded-full border border-amber-500/30 text-amber-200 hover:bg-amber-500/20 hover:text-white transition-all group"
                      aria-label="Previous Swami"
                    >
                      <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div className="h-px flex-1 bg-amber-500/20" />
                    <button
                      onClick={nextSwami}
                      className="p-3 rounded-full border border-amber-500/30 text-amber-200 hover:bg-amber-500/20 hover:text-white transition-all group"
                      aria-label="Next Swami"
                    >
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Swami Image - Framed & Respectful */}
                <div className="relative order-1 md:order-2 flex justify-center">
                  {/* Glow behind image */}
                  <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full scale-75" />

                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {/* The Frame */}
                    <div className="relative p-3 rounded-2xl bg-gradient-to-b from-amber-300/20 to-amber-500/5 backdrop-blur-sm border border-amber-200/20 shadow-2xl">
                      <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-white/5 aspect-[3/4] md:aspect-[3/4] max-h-[60vh] w-auto mx-auto shadow-inner">
                        <Image
                          src={activeSwami.image}
                          alt={activeSwami.name}
                          fill
                          className={`object-cover ${activeSwami.imagePosition} p-2`}
                          priority
                        />
                      </div>
                      {/* Corner Ornaments */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400/50 rounded-tl-lg -mt-1 -ml-1" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400/50 rounded-tr-lg -mt-1 -mr-1" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400/50 rounded-bl-lg -mb-1 -ml-1" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400/50 rounded-br-lg -mb-1 -mr-1" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-between items-center mt-8 px-4">
              <button onClick={prevSwami} className="p-2 text-amber-200 hover:text-white"><ChevronLeft size={32} /></button>
              <div className="flex gap-2">
                {peethadhipathis.map((_, idx) => (
                  <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === activeSwamiIndex ? "w-6 bg-amber-400" : "w-1.5 bg-amber-800"}`} />
                ))}
              </div>
              <button onClick={nextSwami} className="p-2 text-amber-200 hover:text-white"><ChevronRight size={32} /></button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-stone-50 relative">
          {/* Decorative Wave */}
          <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-stone-50" />

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <FadeUp key={activeSwami.id}>
              {/* Story Section */}
              <section className="mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">The Story</h2>
                </div>
                <div className="prose prose-lg prose-amber max-w-none">
                  <p className="text-xl md:text-2xl leading-relaxed text-neutral-700 font-serif whitespace-pre-line first-letter:text-6xl first-letter:font-bold first-letter:text-amber-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                    {activeSwami.description}
                  </p>
                </div>
              </section>

              {/* Photo Gallery Grid */}
              <section className="mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">{t("gallery.photo_gallery")}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {activeSwami.gallery.map((photo, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`relative overflow-hidden rounded-xl cursor-pointer group bg-neutral-100 border border-neutral-200 shadow-sm hover:shadow-md transition-all ${idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
                        }`}
                      onClick={() => openLightbox(idx)}
                    >
                      {/* Inner "Mat" frame */}
                      <div className="absolute inset-2 bg-white rounded-lg shadow-inner overflow-hidden flex items-center justify-center">
                        <Image
                          src={photo}
                          alt={`${activeSwami.name} - Photo ${idx + 1}`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="p-3 bg-white/90 rounded-full shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-6 h-6 text-amber-900" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Divine Contributions */}
              <section className="mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">{t("gallery.contributions")}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {activeSwami.contributions.map((contribution, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="flex gap-4 items-start p-5 bg-white rounded-xl shadow-sm border border-amber-100/50 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 text-amber-800 flex items-center justify-center text-sm font-bold border border-amber-200 group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
                        {idx + 1}
                      </span>
                      <span className="text-neutral-700 text-lg leading-relaxed font-medium pt-1.5">{contribution}</span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Swami Selector Cards */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-amber-400" />
                  <h2 className="font-serif text-2xl md:text-3xl text-amber-900 font-bold">{t("parampara.title")}</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {peethadhipathis.map((swami, idx) => (
                    <button
                      key={swami.id}
                      onClick={() => {
                        setActiveSwamiIndex(idx)
                        setCurrentImageIndex(0)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${idx === activeSwamiIndex
                        ? "ring-4 ring-amber-400 ring-offset-2"
                        : "hover:ring-2 hover:ring-amber-200"
                        }`}
                    >
                      <div className="aspect-[3/4] relative">
                        <Image
                          src={swami.image}
                          alt={swami.name}
                          fill
                          className={`object-cover ${swami.imagePosition} transition-transform duration-500 group-hover:scale-110`}
                        />
                        <div className={`absolute inset-0 transition-colors duration-300 ${idx === activeSwamiIndex
                          ? "bg-amber-600/20"
                          : "bg-black/30 group-hover:bg-black/10"
                          }`} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <p className="text-white text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                          {swami.name}
                        </p>
                      </div>
                      {idx === activeSwamiIndex && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </section>
            </FadeUp>

            {/* Back to Parampara */}
            <div className="mt-16 text-center">
              <Link
                href="/parampara"
                className="inline-flex items-center gap-3 text-amber-800 hover:text-amber-600 font-medium text-lg transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-amber-200 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-50 transition-all">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                {t("gallery.back")}
              </Link>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              {activeSwami.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-amber-500 text-white rounded-full transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-amber-500 text-white rounded-full transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.div
                key={lightboxImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activeSwami.gallery[lightboxImageIndex]}
                  alt={`${activeSwami.name} - Full size`}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightboxImageIndex + 1} / {activeSwami.gallery.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <SiteFooter />
    </>
  )
}
