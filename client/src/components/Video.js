import React from 'react'
import Iframe from 'react-iframe'

const Video = (props) => {
  
    return (
      <div>
        <Iframe url="https://www.youtube.com/watch?v=lnXeybyTycg"
        width="450px"
        height="450px"
        // className="styling"
        display="initial"
        position="relative"
        id='1'
        />
      </div>
    )
  
}

export default Video 


