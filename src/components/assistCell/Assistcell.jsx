
import React from 'react'

import './assistCell.scss'

export default function Assistcell({logo,name,desc,btn}) {
  return (
    <div className="cell">
            <div className="logo">

                <img src={logo} alt="" />

            </div>
            <div className="name">

                {name}

            </div>
            <div className="details">

                {desc}

            </div>
            <div className="btn">
              <a href="">  {btn}</a>
              
            </div>
    </div>
  )
}
