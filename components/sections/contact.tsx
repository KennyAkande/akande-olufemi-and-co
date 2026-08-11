'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // PASTE YOUR ACCESS KEY BELOW
          access_key: '507d67fe-d914-407d-a421-eef3235beae2',
          subject: 'New Consultation Request - Akande Olufemi & Co',
          from_name: 'Akande Olufemi Website',
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your internet connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">GET IN TOUCH</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              Ready to optimize your financial strategy? Reach out to our team for a personalized consultation. We'll discuss your goals and show you how we can help.
            </p>

            <div className="space-y-8">
              <div>
                <div className="font-heading font-bold text-foreground mb-2">Email</div>
                <a href="mailto:info@akandeolufemi.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@akandeolufemi.com
                </a>
              </div>

              <div>
                <div className="font-heading font-bold text-foreground mb-2">Phone</div>
                <a href="tel:+2348083342414" className="text-accent hover:text-accent/80 transition-colors">
                  +234-808-334-2414
                </a>
              </div>

              <div>
                <div className="font-heading font-bold text-foreground mb-2">Office Hours</div>
                <p className="text-foreground/70">Monday – Friday: 9 AM – 6 PM</p>
                <p className="text-foreground/70">Saturday: Closed</p>
                <p className="text-foreground/70">Sunday: Closed</p>
              </div>

              <div>
                <div className="font-heading font-bold text-foreground mb-2">Address</div>
                <p className="text-foreground/70">
                  Akande Olufemi & Co
                  <br />
                  1B Olumuyiwa St,
                  <br />
                  Omole Phase 1,
                  <br />
                  Lagos 101233, Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-accent/20 p-8 md:p-10 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-accent mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-accent/20 focus:border-accent rounded px-4 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-accent mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-accent/20 focus:border-accent rounded px-4 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-accent mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-background border border-accent/20 focus:border-accent rounded px-4 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                  placeholder="(234) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-accent mb-2">Service of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-background border border-accent/20 focus:border-accent rounded px-4 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="100 Audit & Assurance">100 Audit & Assurance</option>
                  <option value="200 Tax Services & Consulting">200 Tax Services & Consulting</option>
                  <option value="300 Advisory">300 Advisory</option>
                  <option value="400 Bookkeeping & Payroll">400 Bookkeeping & Payroll</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-mono text-accent mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-background border border-accent/20 focus:border-accent rounded px-4 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent text-background font-heading font-bold rounded hover:bg-accent/90 transition-all hover:shadow-lg text-lg disabled:opacity-50"
              >
                {isSubmitting
                  ? 'Sending...'
                  : submitted
                  ? 'Message Sent!'
                  : 'Send Message'}
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded">
                  <p className="text-emerald-400 font-medium text-sm">
                    Thank you! Your consultation request has been sent successfully.
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded">
                  <p className="text-rose-400 font-medium text-sm">{errorMessage}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}