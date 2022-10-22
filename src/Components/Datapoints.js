import React from 'react'
import Datapoint from './Datapoint'

function Datapoints({datapoints}) {
  return (
    datapoints.map(datapoint => {
        return <Datapoint key={datapoint.id} datapoint = {datapoint} />
    })
  )
}

export default Datapoints