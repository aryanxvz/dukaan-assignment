import { useState } from 'react'
import './App.css'
import { AmountPending } from './components/AmountPending'
import { AmountProcessed } from './components/AmountProcesses'
import { NextPayout } from './components/NextPayout'

function App() {

  return (
    <div className='grid grid-cols-4 gap-5'>
      <NextPayout title={"Next Payout"} amount={"₹2312.23"} orderCount={23} secondTitle={"Next Payment Date:"} date={"Today, 4:00PM"} />
      <AmountPending title={"Amount Pending"} amount={"₹92,312.20"} orderCount={13} />
      <AmountProcessed title={"Amount Processed"} amount={"₹23,92,312.19"} />
    </div>
  )
}

export default App
