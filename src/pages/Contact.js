import { Mail, Phone } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <div>
      <div className='max-w-sm text-center mt-8'>
            <h1 className='text-2xl font-bold'>Kontakt</h1>
            <p className='text-sm mt-4'>ou can now view my-app in the browser.
            Local:            http://localhost:3000/p9-project
            On Your Network:  http://192.168.87.104:3000/p9-project
            Note that the development build is not optimized.
            To create a production build, use npm run build.
            </p>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title text-2xl">Torben Breindahl</h2>
            <p className='text-sm italic'>Hospitalkemiker v. Regionshospital Hjørring</p>
            <div className='divider'/>
            <div className='flex gap-2 items-center'><Phone size={16} /><a className='link link-hover'>+45 12345678</a></div>
            <div className='flex gap-2 items-center'><Mail size={16} /><a className='link link-hover'>Torben@rnhh.dk</a></div>
          </div>
        </div>
    </div>
  )
}

export default Contact