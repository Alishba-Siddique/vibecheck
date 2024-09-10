import React from 'react'
import localFont from 'next/font/local';

const brasika = localFont({
  src: '../app/fonts/brasika-display-trial.otf',
  variable: '--font-brasika-display-trial',
  weight: '700',
});

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: '12:14:28',
    date: (new Date()).toDateString()
  }

  return (
    <div className="flex flex-col flex-1">
      <div className='grid grid-cols-1 sm:grid-cols-3 bg-gradient-to-b from-primary to-secondary text-slate-900'>
      {Object.keys(statuses).map((status, statusIndex) => {
        return (
          <div key={statusIndex} className='p-4'>
            <p className='font-medium uppercase text-xs sm:text-sm' >{status.replaceAll('_', ' ')}</p>
            <p className={`text-base sm:text-lg ${brasika.className}`}>{statuses[status]}</p>
          </div>
        )
      })}
      </div>

      
    </div>
  )
}
