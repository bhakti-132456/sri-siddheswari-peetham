"use client"

import Image from "next/image"
import { FadeUp } from "@/components/animate-on-scroll"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Instagram, Facebook, Youtube, Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Add header */}
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-24">
        <FadeUp>
          <h1 className="font-serif text-3xl md:text-4xl">Contact</h1>
        </FadeUp>

        <section className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Form */}
          <FadeUp>
            <form
              className="grid gap-3 rounded-xl border p-4 md:p-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thanks! We will respond shortly.")
              }}
            >
              <label className="block">
                <span className="block text-sm text-neutral-700">Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="block text-sm text-neutral-700">Message</span>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
              >
                Send
              </button>
            </form>
          </FadeUp>

          {/* Info + Map */}
          <FadeUp delay={80}>
            <aside className="space-y-4">
              <div className="overflow-hidden rounded-xl border">
                <Image
                  src="/sri-siddheswari-peetham-courtallam-entrance.jpg"
                  alt="Sri Siddheswari Peetham entrance"
                  width={800}
                  height={220}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">Temple Office</h2>
                  <p className="mt-1 text-sm text-neutral-700">
                    Sri Siddheswari Peetham, Courtallam, Tenkasi District, Tamil Nadu 627802, India
                  </p>

                  <div className="mt-3 space-y-2">
                    <p className="text-sm text-neutral-700 flex items-center gap-2">
                      <Mail size={16} />
                      <span>feedback@srisiddheshwaripeetham.com</span>
                    </p>
                    <p className="text-sm text-neutral-700 flex items-center gap-2">
                      <Phone size={16} />
                      <span>+91 9443184738</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold mb-2">Connect With Us</h3>
                    <div className="flex gap-3">
                      <a
                        href="https://www.instagram.com/sri_siddheshwari_peetam?igsh=MXVyMjZrM2M5YTIzaQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="https://www.facebook.com/share/1ADsPJTnUL/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook size={24} />
                      </a>
                      <a
                        href="https://www.youtube.com/@SriSiddeswaripeetham"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube size={24} />
                      </a>
                      <a
                        href="https://chat.whatsapp.com/CjrsFyJSZMHGIUG2ICwfLt?mode=ac_t"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 transition-colors"
                        aria-label="WhatsApp Group"
                      >
                        <MessageCircle size={24} />
                      </a>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted/60"
                      href="https://maps.google.com/?q=Sri+Siddheswari+Peetham+Courtallam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Maps
                    </a>
                    <a className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted/60" href="/visit">
                      Plan your visit
                    </a>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border">
                <Image
                  src="/map-of-courtallam-tamil-nadu.jpg"
                  alt="Map for Courtallam, Tamil Nadu"
                  width={800}
                  height={220}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base font-semibold">Visiting Hours</h3>
                  <p className="mt-1 text-sm text-neutral-700">
                    Morning and evening darshan on most days. Please check the Events calendar for special puja/homam
                    timings and festival closures.
                  </p>
                </div>
              </div>
            </aside>
          </FadeUp>
        </section>
      </main>

      {/* Add footer */}
      <SiteFooter />
    </>
  )
}
