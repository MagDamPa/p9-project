import React from 'react'
import Datapoint from './Datapoint'

function Datapoints({datapoints, setDatapoints}) {
  return (
    datapoints.map(datapoint => {
        return <Datapoint key={datapoint.Id} datapoint = {datapoint} setDatapoints={setDatapoints} datapoints={datapoints} />
    })
  )
}

export default Datapoints