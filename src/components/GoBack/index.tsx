import React from "react"
import { useNavigate } from "react-router-dom"

export const GoBack = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      type='button'
      className='text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
        />
      </svg>

      <span className='sr-only'>Go Back</span>
    </button>
  )
}
