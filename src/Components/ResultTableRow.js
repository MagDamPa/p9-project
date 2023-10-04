import React from 'react'

export default function ResultTableRow({datapoint, index, answers}) {

  const {
    id,
    date,
    value,
    comment,
  } = datapoint

  return (
        <tr key={id} className=' '>
            <td  >{index + 1}</td>
            <td>{new Date(date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}</td>
            <td>{value} mg/mol</td>
            <td><span className="badge p-4" style={{border: answers.borderColor}}>{answers.borderColor}</span></td>
            <td>{comment}</td>
            <td>
                <button className='btn btn-outline btn-error'>Slet</button>
            </td>
        </tr>
  )
}
