import React from 'react'

function Navbar({setLanguage, language}) {
console.log(language)
 

    function languageSelectHandler (e) {
        setLanguage(e.target.value)
    }
  return (
    <div className="navbar bg-base-100 border-b-2 border-slate-300	 ">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl block text-left">MIMIR
                <p className='text-xs italic'>Powered by Regionshospital Højrring</p>
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 items-center">
            <li><a>Videnscenter</a></li>
            <li><a>FAQ</a></li>
            <li><a>Kontakt</a></li>
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