import React from 'react'

export default function ResultTableRow({datapoint, index, answers}) {

  console.log(answers)
  return (
        <tr key={datapoint.id} className=' '>
            <td  >{index + 1}</td>
            <td>{new Date(datapoint.Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}</td>
            <td>{datapoint.Value} mg/mol</td>
            <td><span className="badge p-4" style={{border: answers.borderColor}}>{answers.borderColor}</span></td>
            <td>Kommentar TODO</td>
            <td>
                <button className='btn btn-outline btn-error'>Slet</button>
            </td>
        </tr>
  )
}
