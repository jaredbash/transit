import polyline from './polyline'

const server = 'http://localhost:8080/otp/routers/default/plan?'

export function requestData (tripStart, tripEnd, modes, tripTime, tripDate, tripLocale, intermediaryStops) {
  const requestURL = `${server}fromPlace=${tripStart}&toPlace=${tripEnd}&time=${tripTime}&date=${tripDate}&mode=${modes}&locale=${tripLocale}&showIntermediaryStops=${intermediaryStops}`
  return fetch(requestURL)
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      return error
    })
}

export function parseData (data) {
  console.log("Data: ", data)
  return data.map((element, index) => {
    // Element is an itinerary.
    const myLine = []
    const modes = []
    const legs = []
    for (let i = 0; i < element.legs.length; i++) {
      //Get the mode from the leg, add it to the modes constant.
      modes.push(element.legs[i].mode)
      legs.push({
        startTime: element.legs[i].startTime,
        endTime: element.legs[i].endTime,
        mode: element.legs[i].mode,
        route: element.legs[i].route,
        intermediateStops: element.legs[i].intermediateStops,
      })
      const legPoints = element.legs[i].legGeometry.points
      myLine.push(polyline.decode(legPoints, 5))
      console.log('MyLine: ', myLine)
    }
    const itinerary = {
      name: 'itin' + index.toString(),
      legs: legs,
      line: myLine
    }
    return itinerary
    console.log("Itinerary: ", itinerary)
  })
}

// {
//
//   name: 'itin' + index.toString(),
//   modes: false
// }
// })}
// console.log(itinerary)
// let itin = data[index]
// let myLine = []
// console.log(data[index])
// for (let i = 0; i < itin.legs.length; i++) {
//   const legPoints = itin.legs[i].legGeometry.points
//   myLine.push(polyline.decode(legPoints, 5))
// }
// return itinerary
