import React from 'react';
import localFont from 'next/font/local';
import Button from './Button';

const brasika = localFont({
  src: '../app/fonts/brasika-display-trial.otf',
  variable: '--font-brasika-display-trial',
  weight: '700',
});

export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3
        className={`text-4xl sm:text-5xl md:text-6xl ${brasika.className}`}
      >
        Log In
      </h3>
      <p>You&apos;re one step away!</p>
      <input
        type="email"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Email"
      />
      <input
        type="password"
        className="max-w-[400px] w-full mx-auto px-3 sm:py-3 border border-solid  border-slate-500 rounded-full outline-none hover:border-slate-900 focus:border-slate-900 "
        placeholder="Password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full />
      </div>
      <p className='text-center'>
        Don&apos;t have account?&nbsp;
        <span
          className={`textGradient ${brasika.className}`}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
