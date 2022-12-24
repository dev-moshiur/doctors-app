import React from 'react'

import './navBar.scss'

import search from '../../doctors-icon/search.png'
import account from '../../doctors-icon/account.png'

export default function NavBar({setsearch}) {
  return (
    <div className='navBar'>
        <div className="links">
            <a href='#home'>Home </a>
            <a href=''>Features</a>
            <a href='#services'>Services</a>
            <a href='#team'>Team</a>
            <a href='#blog'>Blog</a>
            <a href=''>Pages</a>

        </div>
        <div className="icons">
            <span onClick={()=>setsearch((presearch)=>!presearch)}><img src={search} alt="" /></span>
            <span><img src={account} alt="" /></span>
            

        </div>
    </div>
  )
}
