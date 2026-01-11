"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useLanguage } from "@/lib/language-context"

export default function PeethadhipathiGalleryPage() {
  const { t } = useLanguage()
  const [activeSwamiIndex, setActiveSwamiIndex] = useState(0)

  const peethadhipathis = [
    {
      id: 1,
      name: t("swami1.name"),
      title: t("swami1.title"),
      period: t("swami1.period"),
      image: "/mouna-swami-portrait-1.jpg",
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
      image: "/hh-siddheswarananda-bharati-swami.png",
      gallery: [
        "/hh-siddheswarananda-bharati-swami.png",
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
      image: "/siva-chidananda-final.png",
      gallery: [
        "/siva-chidananda-final.png",
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeSwami.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activeSwami.gallery.length) % activeSwami.gallery.length)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-stone-50 pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16 relative">
              {/* Decorative background element behind title */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200/20 blur-3xl rounded-full pointer-events-none" />

              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-amber-900 mb-6 drop-shadow-sm relative z-10">
                {t("gallery.title")}
              </h1>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400" />
                <div className="w-3 h-3 rotate-45 border-2 border-amber-600 bg-amber-50" />
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400" />
              </div>
              <p className="max-w-3xl mx-auto text-xl text-neutral-700 italic leading-relaxed font-serif">
                {t("gallery.description")}
              </p>
              <p className="mt-6 font-serif text-2xl text-amber-800 font-medium tracking-wide">
                {t("gallery.verse")}
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Navigation List */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(120,53,15,0.1)] overflow-hidden border border-amber-100/50 relative">
                <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5" />
                <div className="p-6 bg-gradient-to-r from-amber-900 to-amber-800 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                  <h3 className="font-serif text-2xl font-bold text-center relative z-10 tracking-wide">
                    {t("parampara.title")}
                  </h3>
                </div>
                <div className="divide-y divide-amber-100/50">
                  {peethadhipathis.map((swami, idx) => (
                    <button
                      key={swami.id}
                      onClick={() => {
                        setActiveSwamiIndex(idx)
                        setCurrentImageIndex(0)
                        window.scrollTo({ top: 200, behavior: 'smooth' })
                      }}
                      className={`w-full text-left p-5 transition-all duration-300 flex items-center gap-5 hover:bg-amber-50 group relative overflow-hidden ${idx === activeSwamiIndex
                        ? "bg-amber-50"
                        : ""
                        }`}
                    >
                      {/* Active Indicator Line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${idx === activeSwamiIndex ? "bg-amber-600" : "bg-transparent group-hover:bg-amber-200"}`} />

                      <div className={`relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 shadow-sm transition-all duration-300 ${idx === activeSwamiIndex ? "border-amber-600 ring-4 ring-amber-100" : "border-amber-200 group-hover:border-amber-400"}`}>
                        <Image
                          src={swami.image}
                          alt={swami.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="relative z-10">
                        <h4 className={`font-serif text-lg font-bold leading-tight mb-1 transition-colors ${idx === activeSwamiIndex ? "text-amber-900" : "text-neutral-700 group-hover:text-amber-800"}`}>
                          {swami.name}
                        </h4>
                        <p className={`text-xs uppercase tracking-wider font-medium ${idx === activeSwamiIndex ? "text-amber-700" : "text-neutral-500"}`}>
                          {swami.period === "Successor" ? "Successor Designate" : swami.period}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
                <p className="text-amber-900 italic font-serif text-lg leading-relaxed relative z-10">
                  "{t("gallery.quote")}"
                </p>
                <div className="mt-4 text-amber-400 text-4xl opacity-30 font-serif">❝</div>
              </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(120,53,15,0.15)] overflow-hidden border border-amber-100 relative min-h-[800px]">
                {/* Header Section */}
                <div className="relative h-64 md:h-80 bg-neutral-900 overflow-hidden group">
                  {/* Background Image - Blured version of Swami's image */}
                  <Image
                    src={activeSwami.image}
                    alt=""
                    fill
                    className="object-cover opacity-30 blur-xl scale-110 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col md:flex-row items-end md:items-center gap-6 z-20">
                    {/* Main Portrait */}
                    <div className="relative w-32 h-40 md:w-40 md:h-52 rounded-xl overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 -mb-16 md:mb-0 md:-mt-24 transform transition-transform hover:scale-105 duration-500">
                      <Image
                        src={activeSwami.image}
                        alt={activeSwami.name}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>

                    <div className="flex-grow text-white mb-2 md:mb-4">
                      <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg mb-2">
                        {activeSwami.name}
                      </h2>
                      <div className="flex flex-wrap gap-3 items-center text-sm md:text-base text-amber-200 font-medium tracking-wide">
                        <span className="bg-amber-950/50 px-3 py-1 rounded-full border border-amber-500/30 backdrop-blur-sm">{activeSwami.title}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{activeSwami.period === "Successor" ? "Successor Designate" : activeSwami.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows (Top Right) */}
                  <div className="absolute right-6 top-6 flex gap-3 z-30">
                    <button
                      onClick={prevSwami}
                      className="p-3 bg-white/10 hover:bg-amber-500 text-white rounded-full transition-all backdrop-blur-md border border-white/20 hover:border-amber-400 shadow-lg group/nav"
                      aria-label="Previous Swami"
                    >
                      <ChevronLeft className="w-6 h-6 group-hover/nav:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={nextSwami}
                      className="p-3 bg-white/10 hover:bg-amber-500 text-white rounded-full transition-all backdrop-blur-md border border-white/20 hover:border-amber-400 shadow-lg group/nav"
                      aria-label="Next Swami"
                    >
                      <ChevronRight className="w-6 h-6 group-hover/nav:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="pt-24 px-8 pb-10 md:px-12 md:pb-12">
                  <FadeUp key={activeSwami.id}>
                    <div className="grid gap-12">
                      <div className="prose prose-lg prose-amber max-w-none">
                        <p className="text-xl leading-relaxed text-neutral-700 whitespace-pre-line font-serif drop-shadow-sm first-letter:text-5xl first-letter:font-bold first-letter:text-amber-900 first-letter:mr-3 first-letter:float-left">
                          {activeSwami.description}
                        </p>
                      </div>

                      {/* Photo Gallery with Slider */}
                      {activeSwami.gallery.length > 0 && (
                        <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-inner relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-amber-900"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" /></svg>
                          </div>
                          <h3 className="font-serif text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3 relative z-10">
                            <span className="w-8 h-px bg-amber-400"></span>
                            {t("gallery.photo_gallery")}
                          </h3>
                          <div className="relative aspect-[16/10] w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black group border-4 border-white/50 ring-1 ring-neutral-200">
                            <Image
                              src={activeSwami.gallery[currentImageIndex]}
                              alt={`${activeSwami.name} - Image ${currentImageIndex + 1}`}
                              fill
                              className="object-contain"
                            />
                            {activeSwami.gallery.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-amber-600 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
                                >
                                  <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-amber-600 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
                                >
                                  <ChevronRight className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/30 rounded-full backdrop-blur-md border border-white/10">
                                  {activeSwami.gallery.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setCurrentImageIndex(idx)}
                                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-amber-400 w-6" : "bg-white/50 hover:bg-white"}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Divine Contributions */}
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 rounded-2xl p-8 border border-amber-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full -mr-10 -mt-10" />
                        <h3 className="font-serif text-2xl font-bold text-amber-900 mb-6 flex items-center gap-3 relative z-10">
                          <span className="w-8 h-px bg-amber-400"></span>
                          {t("gallery.contributions")}
                        </h3>
                        <ul className="grid gap-4 relative z-10">
                          {activeSwami.contributions.map((contribution, idx) => (
                            <li key={idx} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-amber-100/50 hover:border-amber-200 transition-colors group/item">
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-bold mt-0.5 border border-amber-200 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                                {idx + 1}
                              </span>
                              <span className="text-neutral-700 text-lg leading-snug font-medium group-hover/item:text-amber-900 transition-colors">{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/parampara" className="inline-flex items-center gap-3 text-amber-800 hover:text-amber-600 font-serif font-bold text-lg transition-colors group">
              <div className="w-10 h-10 rounded-full border-2 border-amber-200 flex items-center justify-center group-hover:border-amber-600 transition-colors">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              {t("gallery.back")}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
