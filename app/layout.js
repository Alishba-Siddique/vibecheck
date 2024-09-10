import localFont from 'next/font/local';
import './globals.css';

const openSans = localFont({
  src: './fonts/OpenSans-VariableFont_wdth,wght.ttf',
  variable: '--font-open-sans',
  weight: '100 900',
});
const brasika = localFont({
  src: './fonts/brasika-display-trial.otf',
  variable: '--font-brasika-display-trial',
  weight: '700',
});

export const metadata = {
  title: 'VibeCheck',
  description: 'Track your Vibe with VibeCheck every day of the year!',
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4 sm:gap-8">
      <h1 className={`text-base sm:text-lg textGradient  ${brasika.className}`}>
        VibeCheck
      </h1>
      <div className='flex items-center justify-between'>
        PLACEHOLDER CTA || STATS
      </div>
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={`text-xs sm:text-sm  ${brasika.className}`}>
        <span className={`textGradient`}>Created with </span>💗 <span className={`textGradient`}>by Alishba Siddique.</span>
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-900 ${openSans.className}`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
