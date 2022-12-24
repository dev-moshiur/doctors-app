
import Assistcell from '../assistCell/Assistcell'
import React from 'react'

import doller from '../../doctors-icon/doller.png'
import ambulance from '../../doctors-icon/ambulance.png'
import appointment from '../../doctors-icon/appointment.png'
import watch from '../../doctors-icon/watch.png'


import './assist.scss'


export default function Assist() {
  return (
    <div className='assist'>
        <div className="intro">
            <div className="header">

              Sheba Your Medical Assist

            </div>
            <div className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique tempore <br/>nostrum veritatis quam explicabo? In reiciendis eius
              

            </div>
            <div className="break">

            </div>
           
        </div>
        <div className="cellContainer">

          <Assistcell logo={doller} name={'Since 2002'} desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
          `} btn={'More Info'}/>
         
          
          <Assistcell logo={ambulance} name={'Emergency Calls'} desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
          `} btn={'Call Us'}/>
         
          
          <Assistcell logo={appointment} name={'Appintmeents'} desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
          `} btn={'Make An Appintment'}/>
         
          
          <Assistcell logo={watch} name={'Since 2002'} desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolorum distinctio natus totam reprehenderit. Eum voluptas nesciunt illo modi porro et numquam odit delectus quidem. Adipisci accusantium culpa aperiam quis.
         `} btn={'More Info'}/>
         
          
        </div>
    </div>
  )
}
