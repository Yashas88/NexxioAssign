import React from 'react'
import { useLocation } from 'react-router-dom'

const Welcome = () => {
    const location = useLocation();
    console.log(location.state, "location")
  return (
    <>

     <h2>Welcome page</h2>

     <div>
        <h4>Welcome {location.state.name} and user email is {location.state.email}</h4>
     </div>
    </>
  )
}

export default Welcome