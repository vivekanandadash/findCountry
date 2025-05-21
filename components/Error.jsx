import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>
        Something Went Wrong. {error.status} {error.statusText}
    </div>
  )
}

export default Error