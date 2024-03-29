import React from 'react'
import { Download, LogIn } from 'lucide-react'
import { set } from 'date-fns'

function DashboardHero({model, setModel, logggedIn,
  setLoggedIn}) {

  const displayTag = (e) => {
    setModel(e.target.value)
  }
  return (
    <div className='my-8 w-full px-6'>
        <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>Overblik over tests resultater</h1>
            { logggedIn ? 
              <div className='flex items-center gap-8'>
              <div className='flex gap-2 items-center'>
                
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className="text-lg">K</span>
                  </div>
                </div> 
                <p className='text-base'><strong>Bruger-id:</strong> 102</p>
              </div>
              <button className="btn capitalize btn-sm"><LogIn />Skift bruger</button>
            </div>
            :
            <button className="btn capitalize btn-sm"><LogIn />Login</button>
          }
        </div>
        <div className='flex justify-between items-center mt-16'>
          {model === "true" ? <div className="tabs tabs-boxed">
            <button onClick={displayTag} value={true} className="tab bg-neutral text-base-100">Kronisk forbrug</button> 
            <button onClick={displayTag} value={false} className="tab ">Lejlighedsvis forbrug</button> 
          </div>
          :
          <div className="tabs tabs-boxed">
            <button onClick={displayTag} value={true} className="tab">Kronisk forbrug</button> 
            <button onClick={displayTag} value={false} className="tab bg-neutral text-base-100">Lejlighedsvis forbrug</button> 
          </div>
          }
          <button className='btn btn-neutral capitalize btn-sm'> <Download />Download rapport</button>
        </div>
    </div>
  )
}

export default DashboardHero