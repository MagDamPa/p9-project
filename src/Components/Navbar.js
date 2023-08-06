import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({setLanguage, language}) {

    const borderStyling = "solid 1px #E7E2DE"

    function languageSelectHandler (e) {
        setLanguage(e.target.value)
    }
  return (
    <div style={{borderBottom: borderStyling}} className="navbar bg-base-100 border-b-2 border-slate-300	 ">
        <div className="flex-1">
            <Link className="btn btn-ghost normal-case text-xl block text-left" to='/'>MIMIR
                <p className='text-xs italic'>Powered by Regionshospital Højrring</p>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 items-center">
            <li><Link to='/Videnscenter'>Videnscenter</Link></li>
            <li><Link to='/FAQ'>FAQ</Link></li>
            <li><Link to='/kontakt'>Kontakt</Link></li>
            <div className="tabs tabs-boxed ml-4">
            <select className="select w-full max-w-xs" value={language} onChange={languageSelectHandler}>
                <option disabled selected>Vælg sprog</option>
                <option value={true} >🇩🇰 Dansk</option>
                <option value={false}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</option>
            </select>   
            </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar