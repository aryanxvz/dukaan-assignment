import { useState } from 'react'
import './App.css'
import { AmountPending } from './components/AmountPending'
import { AmountProcessed } from './components/AmountProcesses'
// import { BackgroundPage } from './components/BackgroundPage'
import { NextPayout } from './components/NextPayout'
import { TopBar } from './components/TopBar'

function App() {

  return ( 
    <div className="bg-zinc-50">
      <TopBar payoutTitle={"Payouts"} />

      <div className="flex justify-between px-8 py-8">
        <div className="text-xl font-medium">
            Overview
        </div>
        <div className="flex">
            <button className="flex items-center bg-white border rounded px-[14px] py-[6px]">This Month  <div className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg></div>
            </button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-5 px-8'>
      <NextPayout nextPayoutTitle={"Next Payout"} nextPayoutAmount={"₹2312.23"} nextPayoutOrderCount={23} nextPayoutSecondTitle={"Next Payment Date:"} nextPayoutDate={"Today, 4:00PM"} />
      <AmountPending AmountPendingTitle={"Amount Pending"} AmountPendingAmount={"₹92,312.20"} AmountPendingOrderCount={13} />
      <AmountProcessed AmountProcessedTitle={"Amount Processed"} AmountProcessedAmount={"₹23,92,312.19"} />
      </div>

      <div className="flex justify-between px-8 py-8 text-xl font-medium">
          Transactions | This Month
      </div>

      <div className='flex gap-3 text-base font-medium px-8'>
        <button className='rounded-full px-4 py-[6px] bg-[#E6E6E6] text-[#808080]'>Payouts (22)</button>
        <button className='rounded-full px-4 py-[6px] bg-[#146EB4] text-white'>Refund (6)</button>
      </div>

    </div>
  )
}

export default App
