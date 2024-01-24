import React from 'react'
import Datapoint from './Datapoint'
import ResultTableRow from './ResultTableRow'
import { Calculator, CalendarDays, Hash, MessageSquare, SquareEqual, Trash2 } from 'lucide-react'

function ResultTable({datapoints, setDatapoints, answers }) {

  
  return (
    <div className='mt-8 w-full'>
            <div className="overflow-x-auto rounded-lg w-full">
            <table className="table w-full">
                {/* head */}
                <thead className=''>
                <tr className='bg-base-200 '>
                    <th className=''><div className='flex items-center gap-1'><Hash size={12} />Test nr</div></th>
                    <th className=''><div className='flex items-center gap-1'><CalendarDays size={12}/>Testet den</div></th>
                    <th className=''><div className='flex items-center gap-1'><Calculator size={12} />Test værdi</div></th>
                    <th className=''><div className='flex items-center gap-1'><SquareEqual size={12} />Resultat</div></th>
                    <th className=''><div className='flex items-center gap-1'><MessageSquare size={12} />Kommentar</div></th>
                    <th className=''><div className='flex items-center gap-1'><Trash2 size={12} />Handlinger</div></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {datapoints.map((datapoint, index) => {
                  return <ResultTableRow key={datapoint.Id} datapoint={datapoint} setDatapoints={setDatapoints} datapoints={datapoints} index={index} answers={answers}/>
                })}
                
                </tbody>
        </table>
        </div>
        
        
    </div>
  )
}

export default ResultTable