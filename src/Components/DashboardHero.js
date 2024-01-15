import React from 'react'
import { Download, LogIn } from 'lucide-react'
import { set } from 'date-fns'
import { useTranslation } from 'react-i18next'

function DashboardHero({
  model, 
  setModel, 
  logggedIn,
  setLoggedIn
}) {

  const { t } = useTranslation()

  const displayTag = (e) => {
    setModel(e.target.value)
  }

  return (
    <div className='my-8 w-full px-6'>
        <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>{t('overview_tests')}</h1>
            { logggedIn ? 
              <div className='flex items-center gap-8'>
                <div className='flex gap-2 items-center'>
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                      <span className="text-lg">K</span>
                    </div>
                  </div> 
                  <p className='text-base'><strong>{t('user_id')}</strong> 102</p>
                </div>
                <button className="btn capitalize btn-sm"><LogIn />{t('change_user')}</button>
              </div>
              :
              <button className="btn capitalize btn-sm"><LogIn />Login</button>
            }
        </div>
        <div className='flex justify-between items-center mt-16'>
           <div className="tabs tabs-boxed">
            <button onClick={displayTag} value="chronical" className={model === "chronical" ? "tab bg-neutral text-base-100" : "tab"}>{t('chronical_use')}</button> 
            <button onClick={displayTag} value="occational" className={model === "occational" ?  "tab bg-neutral text-base-100" : "tab"}>{t('occational_use')}</button> 
          </div>
          <button className='btn btn-neutral capitalize btn-sm'> <Download />{t('download_report')}</button>
        </div>
    </div>
  )
}

export default DashboardHero