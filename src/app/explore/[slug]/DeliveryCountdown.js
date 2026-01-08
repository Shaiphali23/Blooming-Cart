"use client";

import { useEffect, useState } from "react";

export default function DeliveryCountdown() {
  const getCutoffTime = () => {
    const now = new Date();
    const cutoff = new Date();
    cutoff.setHours(18, 0, 0, 0);

    if (now > cutoff) {
      cutoff.setDate(cutoff.getDate() + 1);
    }
    return cutoff;
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const cutoffTime = getCutoffTime();

    const timer = setInterval(() => {
      const diff = cutoffTime - new Date();

      if (diff <= 0) return clearInterval(timer);

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        bg-blue-50 border border-blue-200 rounded-xl
        p-4 sm:p-5
        max-w-7xl mx-auto my-5
        flex flex-col sm:flex-row
        items-center justify-center
        gap-3 sm:gap-6 lg:gap-10
        text-center
      "
    >
      <p className="text-sm sm:text-base md:text-lg font-bold text-black">
        Get it there today if you order in the next
      </p>

      <div className="flex items-center gap-2 text-blue-700 font-semibold">
        <TimeBox value={timeLeft.hours} label="HRS" />
        :
        <TimeBox value={timeLeft.minutes} label="MINS" />
        :
        <TimeBox value={timeLeft.seconds} label="SECS" />
      </div>

      <p className="text-sm sm:text-base text-gray-500">
        Delivery cutoff times
      </p>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-[40px]">
      <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#185357]">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs text-black">{label}</span>
    </div>
  );
}
