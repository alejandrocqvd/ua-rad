"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const ContactHeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center h-auto mt-32 mb-12 w-[98vw] overflow-x-hidden">
      <p className="text-xl md:text-5xl font-light text-[#007C41] mb-4">GET IN TOUCH</p>
      <Image
        src="/branding/UARAD_LOGO_DARK.svg"
        alt="UARAD Logo"
        width={988}
        height={294}
        priority
        className="h-16 md:h-32 w-auto mx-2 my-8 md:my-10"
      />
      <p className="text-lg md:text-2xl font-light text-[#007C41] text-center max-w-2xl mx-4">
        Ready to soar with UA-RAD? Connect with our team for partnerships, collaborations, or questions about our FPV
        drone innovations.
      </p>
    </section>
  )
}

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-start w-auto md:w-full max-w-6xl mx-2 md:mx-auto my-12 overflow-visible">
      <div className="md:relative z-10 bg-white rounded-xl border-2 border-[#247F4A] py-8 md:py-12 px-8 md:px-10 md:mr-8 flex-1">
        <p className="text-left font-light text-[#007C41] text-4xl mb-8">SEND US A MESSAGE</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007C41] focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007C41] focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007C41] focus:border-transparent outline-none transition-all"
            >
              <option value="">Select a subject</option>
              <option value="partnership">Partnership Inquiry</option>
              <option value="collaboration">Research Collaboration</option>
              <option value="sponsorship">Sponsorship Opportunity</option>
              <option value="media">Media & Press</option>
              <option value="general">General Question</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007C41] focus:border-transparent outline-none transition-all resize-vertical"
              placeholder="Tell us about your inquiry..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#007C41] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#005a2f] transition-colors duration-200 focus:ring-2 focus:ring-[#007C41] focus:ring-offset-2 outline-none"
          >
            Send Message
          </button>
        </form>
      </div>

      <Image
        src="/home/guneetThumbsUp.png"
        alt="Mr. President giving a thumbs up"
        width={1089}
        height={812}
        className="md:relative z-20 h-80 md:h-[600px] md:w-80 rounded-xl border-2 mb-2 md:mb-0 border-[#247F4A] object-cover flex-shrink-0"
      />
    </section>
  )
}

const ContactInfoSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-[97vw] max-w-5xl mx-2 md:mx-auto my-12 overflow-visible">
      {/* Text panel */}
      <div className="z-10 bg-white rounded-xl border-2 border-[#247F4A] md:-mr-5 py-8 md:py-12 px-8 md:px-10 flex-1">
        <p className="text-left font-light text-[#007C41] text-4xl mb-8">
          CONTACT INFORMATION
        </p>

        <div className="space-y-6">
          {/* University Address */}
          <div>
            <h3 className="font-bold text-lg text-[#007C41] mb-2">University Address</h3>
            <p className="text-gray-700">
              University of Alberta
              <br />
              Faculty of Engineering
              <br />
              9211 116 St NW
              <br />
              Edmonton, AB T6G 1H9
              <br />
              Canada
            </p>
          </div>

          {/* Email */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-lg text-[#007C41] mb-2">Email</h3>
            <p className="text-gray-700">
              <a
                href="mailto:uarad.uofa@gmail.com"
                className="hover:text-[#007C41] transition-colors"
              >
                uarad.uofa@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-lg text-[#007C41] mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/uofa_rad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-700 hover:text-[#007C41] transition-colors">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/ua-rad/posts/?feedView=all" className="text-gray-700 hover:text-[#007C41] transition-colors">
                LinkedIn
              </a>
              {/* no youtube according to Mr. President */}
            </div>
          </div>

          {/* Response Time */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-bold text-lg text-[#007C41] mb-2">Response Time</h3>
            <p className="text-gray-700">
              We typically respond to inquiries within 24–48 hours during business days.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex relative z-20 flex-shrink-0 md:flex-1">
        <Image
          src="/home/guneetThumbsUp.png"
          alt="Mr. President giving a thumbs up"
          fill
          className="object-cover rounded-xl border-2 border-[#247F4A]"
        />
      </div>
    </section>
  )
}

const JoinUsSection = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-5xl mx-2 md:mx-auto my-16">
      <div className="bg-white rounded-xl border-2 border-[#247F4A] py-12 px-10 text-center">
        <p className="text-left md:text-center font-light text-[#007C41] text-4xl mb-8">JOIN OUR TEAM</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Interested in joining UA-RAD? We're always looking for passionate students from engineering, computer science,
          and design backgrounds who share our vision for the future of FPV drone technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007C41] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-[#007C41] mb-2">Apply</h3>
            <p className="text-sm text-gray-600">Submit your application through our recruitment process</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007C41] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-[#007C41] mb-2">Interview</h3>
            <p className="text-sm text-gray-600">Meet with our team to discuss your interests and skills</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#007C41] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-[#007C41] mb-2">Build</h3>
            <p className="text-sm text-gray-600">Start contributing to cutting-edge drone projects</p>
          </div>
        </div>
        <button className="bg-[#007C41] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#005a2f] transition-colors duration-200">
          Learn More About Joining
        </button>
      </div>
    </section>
  )
}

const ContactPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load("particles-js", "/assets/particlesjs-config-home.json", () => {
        console.log("callback - particles.js config loaded")
      })
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center">
    <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
      <ContactHeroSection />
      {/* <ContactFormSection /> */}
      <ContactInfoSection />
      {/* <JoinUsSection /> */}
    </div>
  )
}

export default ContactPage
