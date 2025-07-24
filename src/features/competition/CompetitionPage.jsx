'use client'

import { useEffect } from "react";

const CompetitionPage = () => {
  useEffect(() => {
    let display = {
      days: document.querySelector("#days"),
      hours: document.querySelector("#hours"),
      minutes: document.querySelector("#minutes"),
      seconds: document.querySelector("#seconds"),
    };

    function startCountdown(duration, display) {
      let timer = duration;

      setInterval(() => {
        const days = Math.floor(timer / (60 * 60 * 24));
        const hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((timer % (60 * 60)) / 60);
        const seconds = Math.floor(timer % 60);

        display.days.textContent = days;
        display.hours.textContent = hours;
        display.minutes.textContent = minutes;
        display.seconds.textContent = seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    }

    const targetDate = new Date("2026-05-14T00:00:00");

    

    const now = new Date();
    const countdownTime = Math.floor((targetDate - now) / 1000);

    startCountdown(countdownTime, display);
  }, []);

  useEffect(() => {
  
    particlesJS.load('particles-js', '/assets/particlesjs-config-progress.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="flex justify-center pt-8 p-10  px-4  text-center z-10 relative">
        <span className="text-2xl md:text-4xl text-black mb-4 pt-20">
          Aerial Evolution Association Canada 2026 <br /> Competition
        </span>
      </div>
      <div className="text-center z-10 relative">
        <div id="item" className="px-2 flex gap-2 justify-center uppercase">
          <div>
            <div id="days" className="bg-black px-6 py-3 text-white text-7xl shadow-md rounded-l-lg"></div>
            <small className="px-4">Days</small>
          </div>
          <div>
            <div id="hours" className="bg-black px-6 py-3 text-white text-7xl shadow-md rounded"></div>
            <small className="px-4">Hours</small>
          </div>
          <div>
            <div id="minutes" className="bg-black px-6 py-3 text-white text-7xl shadow-md rounded"></div>
            <small className="px-4">Minutes</small>
          </div>
          <div>
            <div id="seconds" className="bg-black px-6 py-3 text-white text-7xl shadow-md rounded-r-lg"></div>
            <small className="px-4 animate-pulse">Seconds</small>
          </div>
        </div>
      </div>

      <div className="">
        
      </div>
    </div>
  );
};

export default CompetitionPage;
