import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='font-bold text-3xl my-5 text-center'>
            AI-Powered Trip Planning - Pick your Plan
        </h2>
      <PricingTable />
    </div>
  )
}

export default Pricing
