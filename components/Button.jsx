import React from 'react';
import localFont from 'next/font/local';

const brasika = localFont({
  src: '../app/fonts/brasika-display-trial.otf',
  variable: '--font-brasika-display-trial',
  weight: '700',
});
export default function Button(props) {
  const { text, dark, full } = props;
  return (
    <button
      className={`rounded-full overflow-hidden  hover:bg-gradient-to-b hover:from-primary hover:to-secondary transition-all duration-300
 border-2 border-solid  border-slate-900 
 ${dark ? 'text-white bg-slate-900' : 'text-slate-900'}
 ${full ? 'grid place-content-center w-full' : ''}`}
    >
      <p
        className={`px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ${brasika.className}`}
      >
        {text}
      </p>
    </button>
  );
}
