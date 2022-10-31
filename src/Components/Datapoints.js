import React from 'react'
import Datapoint from './Datapoint'

function Datapoints({datapoints, setDatapoints}) {
  return (
    datapoints.map((datapoint, index) => {
        return <Datapoint key={datapoint.Id} datapoint = {datapoint} setDatapoints={setDatapoints} datapoints={datapoints} index={index}/>
    })
  )
}

export default Datapoints