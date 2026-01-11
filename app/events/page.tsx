"use client"

import Image from "next/image"
import { FadeUp } from "@/components/animate-on-scroll"
import EventsCalendar, { type CalendarEvent } from "@/components/events-calendar"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

import { useLanguage } from "@/lib/language-context"

import { useSearchParams } from "next/navigation"

export default function EventsPage() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const deityFilter = searchParams.get("deity") || ""
  // Placeholder events (augment/replace with real data later)
  const events: CalendarEvent[] = [
    {
      id: "e1",
      title: "Pratyangira Devi Homam",
      date: "2025-09-07",
      time: "06:00 AM",
      deity: "Pratyangira",
      location: "Yagasala",
      description: "Monthly Pratyangira Devi Homam performed with Vedic chants.",
    },
    {
      id: "e2",
      title: "Sri Chakra Navavarana Puja",
      date: "2025-09-14",
      time: "07:00 AM",
      deity: "Sri Chakra",
      location: "Main Hall",
      description: "Special puja to the Sri Chakra Maha Meru.",
    },
    {
      id: "e3",
      title: "Ganapathi Homam",
      date: "2025-09-21",
      time: "06:30 AM",
      deity: "Ganapathi",
      location: "Yagasala",
      description: "Seek blessings for new beginnings and obstacle removal.",
    },
    {
      id: "e4",
      title: "Guru Vandanam & Satsang",
      date: "2025-09-28",
      time: "05:30 PM",
      deity: "Guru",
      location: "Sabha",
      description: "Bhajans and pravachan on Guru Tattva.",
    },
    {
      id: "e5",
      title: "Devi Navaratri Celebrations",
      date: "2025-10-03",
      time: "06:00 AM",
      deity: "Devi",
      location: "Main Temple",
      description: "Nine-day festival celebrating the Divine Mother.",
    },
    {
      id: "e6",
      title: "Lakshmi Puja",
      date: "2025-10-15",
      time: "07:30 AM",
      deity: "Lakshmi",
      location: "Main Hall",
      description: "Special puja for prosperity and abundance.",
    },
  ]

  return (
    <>
      {/* Add header */}
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-8 pt-24">
        <FadeUp>
          <header className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">{t('events.title')}</h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('events.description')}
            </p>
            {deityFilter && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm">
                <span>{t('events.filter')}</span>
                <span className="font-semibold">{deityFilter}</span>
              </div>
            )}
          </header>
        </FadeUp>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <FadeUp delay={100}>
            <EventsCalendar events={events} deityFilter={deityFilter} />
          </FadeUp>

          <FadeUp delay={200}>
            <aside className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src="/pratyangira-homam-at-peetham.png"
                    alt="Pratyangira Homam at Sri Siddheswari Peetham"
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Sacred Homams
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                    Experience the power of ancient fire rituals performed with authentic Vedic procedures and sacred
                    mantras.
                  </p>
                  <a
                    href="/homam"
                    className="inline-flex items-center gap-2 text-sm text-amber-700 font-medium hover:text-amber-800 hover:gap-3 transition-all duration-200"
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src="/maha-meru-worship-with-lamps.png"
                    alt="Sri Chakra Maha Meru at the Peetham"
                    width={400}
                    height={200}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    Sri Chakra Worship
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                    Participate in the divine Navavarana puja to the sacred Sri Chakra Maha Meru, the ultimate symbol of
                    cosmic energy.
                  </p>
                  <a
                    href="/deities"
                    className="inline-flex items-center gap-2 text-sm text-amber-700 font-medium hover:text-amber-800 hover:gap-3 transition-all duration-200"
                  >
                    Explore deities <span>→</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">Book Your Seva</h3>
                <p className="text-sm text-neutral-700 mb-4">
                  Reserve your participation in upcoming sacred ceremonies and receive divine blessings.
                </p>
                <a
                  href="/sevas/book"
                  className="inline-block w-full text-center bg-amber-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-amber-700 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Book Now
                </a>
              </div>
            </aside>
          </FadeUp>
        </div>
      </main>

      {/* Add footer */}
      <SiteFooter />
    </>
  )
}
