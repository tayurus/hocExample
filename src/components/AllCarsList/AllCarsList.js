import React from 'react';

export const AllCarsList = props => {

  console.log(props);

  return (
    <div>
      <h1>ALL CARS LIST</h1>
      <ul>
        {
          props.cars.map( car => {
            return (
              <li style={{color: props.topCars.findIndex(index => car.id === index) !== -1 ? "tomato" : "black"}}>
                {car.name}
              </li>
            )
          })
        }
      </ul>
    </div>

  )
}
