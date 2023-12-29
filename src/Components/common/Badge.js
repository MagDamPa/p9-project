import React from 'react'

const Badge = ({children, item}) => {
  return (  
  <div className={`px-2 py-1 rounded-md`} style={{ color: item.textColor}}>
    <svg
      className=" w-4 h-4 inline-block mr-1"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
    {children}
  </div>
    
  )
}

export default Badge