import React from 'react'

const CustomEvent = ({event}) => {
  return (
    <div>
    <p>Student Name: <span>{event.student}</span></p>
    <div >
      <p>Instructor: <span>{event.instructor}</span></p>
    </div>
  </div>
  )
}

export default CustomEvent
