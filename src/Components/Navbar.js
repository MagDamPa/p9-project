import React from 'react'
import '../App.css'

function Navbar() {

    function buttonHandler () {

    }


  return (
    <div className='navbar-wrapper'>
        <div className='nav-element selected'>
            <a className='nav-text selected-text ' href="#cannabis-test">
                Cannabis test
            </a>
        </div>
        <div className='nav-element' >
            <a className='nav-text'>
                Kontakt
            </a>
        </div>
        <div className='nav-element' >
            <a className='nav-text'>
                FAQ
            </a>
        </div>
        <div className='nav-element' >
            <a className='nav-text'>
                Hjælp
            </a>
        </div>
    </div>
  )
}

export default Navbar