import React from 'react'
import { text } from 'stream/consumers'

const Highlighted= ({text, size}:{text: string, size: string}) => {
  return (
    <span className={ ` ${size} font-bold bg-gradient-to-r from-pink-600 to-indigo-600 rounded-sm px-2`}>
        {text}
    </span>
  )
}

export default Highlighted