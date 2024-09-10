import React from 'react';
import localFont from 'next/font/local';
import Button from './Button';

const brasika = localFont({
  src: '../app/fonts/brasika-display-trial.otf',
  variable: '--font-brasika-display-trial',
  weight: '700',
});

export default function Signup() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3
        className={`text-4xl sm:text-5xl md:text-6xl ${brasika.className}`}
      >
        Register
      </h3>
      <p>You&apos;re one step away!</p>
      <input
        type="text"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Full Name"
      />
      <input
        type="email"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Email"
      />
      <input
        type="tel"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Phone Number"
      />
      <input
        type="password"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Password"
      />
      <input
        type="password"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Confirm Password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full />
      </div>
      <p className='text-center'>
        Already have an account?&nbsp;
        <span
          className={`textGradient ${brasika.className}`}
        >
          Log In
        </span>
      </p>
    </div>
  );
}

