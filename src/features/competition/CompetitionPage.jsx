"use client"
import { useEffect, useState, React} from "react"

import { Calendar, Trophy, Users, MapPin, Clock, CheckCircle, ChevronDown } from "lucide-react"

// TimeLeft: { days: number, hours: number, minutes: number, seconds: number }
const CompetitionPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-05-14T00:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Initialize particles.js if available
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS.load("particles-js", "/assets/particlesjs-config-progress.json", () => {
        console.log("callback - particles.js config loaded")
      })
    }
  }, [])

  // TimelineEvent: { id, title, description, date, status, icon }
  const timelineEvents = [
    {
      id: 1,
      title: "August 2025",
      subTitle: "Registration Opens",
      description:
        "Early bird registration for the national drone-building competition begins. Teams and individuals can sign up to design and build their own drones for the challenge.",
      date: "August 1, 2025",
      status: "upcoming",
      icon: <Users className="w-5 h-5" />, 
      color: "blue",
      gradient: "from-blue-400 to-blue-600",
      bg: "bg-blue-100 text-blue-600",
      border: "border-blue-400",
    },
    {
      id: 2,
      title: "September 2025",
      subTitle: "Training Phase",
      description:
        "Mandatory safety and technical training sessions focused on drone assembly, flight basics, and regulations. Online workshops and regional drone-building camps available.",
      date: "September 15, 2025",
      status: "upcoming",
      icon: <Calendar className="w-5 h-5" />, 
      color: "yellow",
      gradient: "from-yellow-300 to-yellow-500",
      bg: "bg-yellow-100 text-yellow-700",
      border: "border-yellow-400",
    },
    {
      id: 3,
      title: "October 2025",
      subTitle: "Equipment Certification",
      description:
        "Technical inspection and certification of all drones and related equipment. Drone vendors showcase the latest technology and innovations.",
      date: "October 20, 2025",
      status: "upcoming",
      icon: <CheckCircle className="w-5 h-5" />, 
      color: "purple",
      gradient: "from-purple-400 to-fuchsia-500",
      bg: "bg-purple-100 text-purple-700",
      border: "border-purple-400",
    },
    {
      id: 4,
      title: "November 2025",
      subTitle: "Skills Assessment",
      description:
        "Individual drone piloting and building skills assessments. Teams are formed and evaluated on their drone design and flight capabilities.",
      date: "November 10, 2025",
      status: "upcoming",
      icon: <Trophy className="w-5 h-5" />, 
      color: "orange",
      gradient: "from-orange-400 to-orange-600",
      bg: "bg-orange-100 text-orange-700",
      border: "border-orange-400",
    },
    {
      id: 5,
      title: "December 2025",
      subTitle: "Winter Training",
      description:
        "Intensive winter training camps across Canada focused on advanced drone-building techniques, flight maneuvers, and competition strategy.",
      date: "December 5, 2025",
      status: "upcoming",
      icon: <Calendar className="w-5 h-5" />, 
      color: "teal",
      gradient: "from-teal-400 to-cyan-500",
      bg: "bg-teal-100 text-teal-700",
      border: "border-teal-400",
    },
    {
      id: 6,
      title: "January 2026",
      subTitle: "Regional Qualifiers",
      description: "Regional drone competition rounds held in major Canadian cities. Top teams and pilots advance to the national finals.",
      date: "January 25, 2026",
      status: "upcoming",
      icon: <MapPin className="w-5 h-5" />, 
      color: "red",
      gradient: "from-red-400 to-pink-500",
      bg: "bg-red-100 text-red-700",
      border: "border-red-400",
    },
    {
      id: 7,
      title: "February 2026",
      subTitle: "Semi-Finals",
      description: "National semi-final drone competitions determine the final roster for the championship event.",
      date: "February 15, 2026",
      status: "upcoming",
      icon: <Trophy className="w-5 h-5" />, 
      color: "indigo",
      gradient: "from-indigo-400 to-indigo-600",
      bg: "bg-indigo-100 text-indigo-700",
      border: "border-indigo-400",
    },
    {
      id: 8,
      title: "March 2026",
      subTitle: "Final Preparations",
      description:
        "Final drone testing, media events, and last-minute preparations for the national drone championship.",
      date: "March 20, 2026",
      status: "upcoming",
      icon: <CheckCircle className="w-5 h-5" />, 
      color: "emerald",
      gradient: "from-emerald-400 to-green-500",
      bg: "bg-emerald-100 text-emerald-700",
      border: "border-emerald-400",
    },
    {
      id: 9,
      title: "April 2026",
      subTitle: "Championship Week",
      description: "Pre-competition drone events, team check-ins, and final technical briefings before the main event.",
      date: "April 10, 2026",
      status: "upcoming",
      icon: <Calendar className="w-5 h-5" />, 
      color: "pink",
      gradient: "from-pink-400 to-fuchsia-500",
      bg: "bg-pink-100 text-pink-700",
      border: "border-pink-400",
    },
    {
      id: 10,
      title: "May 2026",
      subTitle: "Final Competition",
      description:
        "The main drone championship event featuring the best drone builders and pilots from across Canada competing for the national title.",
      date: "May 14, 2026",
      status: "upcoming",
      icon: <Trophy className="w-5 h-5" />, 
      color: "amber",
      gradient: "from-amber-400 to-yellow-500",
      bg: "bg-amber-100 text-amber-700",
      border: "border-amber-400",
    },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Particles Background */}
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Hero Section */}
      <div className="relative pb-20 z-10 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Aerial Evolution Association
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-2">
              Canadian Competition
            </h2>
            {/* <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Design, build, and compete with your own drone in Canada’s premier student drone engineering challenge.
            </p> */}
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="text-center min-w-[100px]">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    {timeLeft.days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">Days</div>
                </div>
                {/* Divider */}
                <div className="hidden md:flex items-center">
                  <div className="h-24 w-px bg-gray-300 mx-2" />
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">Hours</div>
                </div>
                {/* Divider */}
                <div className="hidden md:flex items-center">
                  <div className="h-24 w-px bg-gray-300 mx-2" />
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
                    Minutes
                  </div>
                </div>
                {/* Divider */}
                <div className="hidden md:flex items-center">
                  <div className="h-24 w-px bg-gray-300 mx-2" />
                </div>
                <div className="text-center min-w-[100px]">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-600 mb-2" style={{ color: '#247F4A' }}>
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
                    Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down Arrow */}
        <a href="#timeline" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-800 hover:text-[#247F4A] transition" aria-label="Scroll to timeline">
          <ChevronDown className="w-20 h-20 animate-bounce" />
        </a>
      </div>

      {/* Timeline Section */}
      <div id="timeline" className="relative z-10 py-12 bg-gray-900 pb-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 border-t border-gray-700 mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">Progress Timeline</h3>
              <div className="flex-1 border-t border-gray-700 ml-4" />
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center">
            Here at UA-RAD, we are tackling the full-stack challenge of drone development, creating all of the mechanical, electrical, and autonomous software components for the 2026 Aerial Evolution Student Competition. Track our progress through each major milestone.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-700 via-indigo-800 to-green-700"></div>

              {timelineEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative flex items-center -mb-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  {event.status === 'current' || event.status === 'completed' ? (
                    <div
                      className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-800 shadow-lg z-10`}
                      style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                        '--tw-gradient-from': `var(--tw-color-${event.gradient.split(' ')[0]})`,
                        '--tw-gradient-to': `var(--tw-color-${event.gradient.split(' ')[2]})`,
                        backgroundImage: `linear-gradient(to bottom right, ${event.gradient.replace('from-', '').replace('to-', '').replace(' ', ', ')})`,
                        backgroundColor: undefined
                      }}
                    ></div>
                  ) : (
                    <div
                      className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-800 shadow-lg z-10 bg-white"
                    ></div>
                  )}

                  {/* Content Card */}
                  <div
                    className={`ml-2 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-2" : "md:ml-auto md:pl-2"}`}
                  >
                    <div
                      className={`bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 ${event.border.replace('border-', 'border-')}`}
                      style={{ boxShadow: `0 4px 24px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.14)` }}
                    >
                      <div className="flex items-center mb-3">
                        <div
                          className={`p-2 rounded-lg mr-3 ${event.bg.replace('bg-', 'bg-opacity-30 bg-').replace('text-', 'text-')}`}
                        >
                          {event.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{event.title}</h4>
                          <div className="flex items-center text-sm text-gray-300">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.subTitle}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-200 leading-relaxed">{event.description}</p>
                      {event.status === "current" && (
                        <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-900 text-green-200">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          Current Event
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionPage