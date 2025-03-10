import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

function Cursor() {
  return (
    <div>
        <AnimatedCursor
      
 
        color="255,255,255"
  
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
    />
    
    </div>
  )
}

export default Cursor
