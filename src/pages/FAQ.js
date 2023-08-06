import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import React from 'react'

function FAQ() {
  return (
    <div className='flex flex-col items-center'>
        <div className='max-w-sm text-center mt-8'>
            <h1 className='text-2xl font-bold'>Ofte stillede spørgsmål:</h1>
            <p className='text-sm mt-4'>ou can now view my-app in the browser.
            Local:            http://localhost:3000/p9-project
            On Your Network:  http://192.168.87.104:3000/p9-project
            Note that the development build is not optimized.
            To create a production build, use npm run build.
            </p>
        </div>
        <div className='divider'/>
        <div className="card card-side bg-base-100 shadow-xl items-center p-2 mt-8" >
            <div className='card-body'>
                <h3 className='text-lg font-bold'>Spørgsmål: </h3>
                <p className='text-sm'>Hvor finder jeg test resultatet?</p>
                <div className="divider lg:divider-horizontal"/>
                <h3 className='text-lg font-bold'>Svar: </h3>
                <p className='text-sm'>Click the button to watch on Jetflix app.</p>
            </div>
            <div className="divider lg:divider-horizontal"/>
            <div>
                <p className='text-sm font-bold mb-4'>Hjalp svaret?</p>
                <div className="card-actions justify-end">
                    <button className=' btn btn-square'><ThumbsUpIcon /></button>
                    <button className=' btn btn-square'><ThumbsDownIcon/></button>
            </div>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl items-center p-2 mt-8" >
            <div className='card-body'>
                <h3 className='text-lg font-bold'>Spørgsmål: </h3>
                <p className='text-sm'>Hvor finder jeg test resultatet?</p>
                <div className="divider lg:divider-horizontal"/>
                <h3 className='text-lg font-bold'>Svar: </h3>
                <p className='text-sm'>Click the button to watch on Jetflix app.</p>
            </div>
            <div className="divider lg:divider-horizontal"/>
            <div>
                <p className='text-sm font-bold mb-4'>Hjalp svaret?</p>
                <div className="card-actions justify-end">
                    <button className=' btn btn-square'><ThumbsUpIcon /></button>
                    <button className=' btn btn-square'><ThumbsDownIcon/></button>
            </div>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl items-center p-2 mt-8" >
            <div className='card-body'>
                <h3 className='text-lg font-bold'>Spørgsmål: </h3>
                <p className='text-sm'>Hvor finder jeg test resultatet?</p>
                <div className="divider lg:divider-horizontal"/>
                <h3 className='text-lg font-bold'>Svar: </h3>
                <p className='text-sm'>Click the button to watch on Jetflix app.</p>
            </div>
            <div className="divider lg:divider-horizontal"/>
            <div>
                <p className='text-sm font-bold mb-4'>Hjalp svaret?</p>
                <div className="card-actions justify-end">
                    <button className=' btn btn-square'><ThumbsUpIcon /></button>
                    <button className=' btn btn-square'><ThumbsDownIcon/></button>
            </div>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl items-center p-2 mt-8" >
            <div className='card-body'>
                <h3 className='text-lg font-bold'>Spørgsmål: </h3>
                <p className='text-sm'>Hvor finder jeg test resultatet?</p>
                <div className="divider lg:divider-horizontal"/>
                <h3 className='text-lg font-bold'>Svar: </h3>
                <p className='text-sm'>Click the button to watch on Jetflix app.</p>
            </div>
            <div className="divider lg:divider-horizontal"/>
            <div>
                <p className='text-sm font-bold mb-4'>Hjalp svaret?</p>
                <div className="card-actions justify-end">
                    <button className=' btn btn-square'><ThumbsUpIcon /></button>
                    <button className=' btn btn-square'><ThumbsDownIcon/></button>
            </div>
            </div>
        </div>
    </div>
        

  )
}

export default FAQ
