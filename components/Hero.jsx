import React from 'react';
import localFont from 'next/font/local';
import Button from './Button';
import Calendar from './Calendar';

const brasika = localFont({
  src: '../app/fonts/brasika-display-trial.otf',
  variable: '--font-brasika-display-trial',
  weight: '700',
});

export default function Hero() {
  return (
    <div className={`py-4 md:py-10 flex flex-col gap-4 sm:gap-8`}>
      <h1
        className={`text-5xl sm:text-6xl md:text-7xl text-center ${brasika.className}`}
      >
        <span className="textGradient">VibeCheck</span>– Daily vibes, always{' '}
        <span className="textGradient">in check!</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create your vibe log and check how you feel
        <span className="font-medium"> every day of every year.</span>
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Button text="Sign up" />
        <Button text="Login" dark />
      </div>
      <Calendar />
    </div>
  );
}
