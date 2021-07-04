import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header__container">
            <div className="header_subdivision">  
           <img className="header__logo" src="https://cdn.worldvectorlogo.com/logos/jsrender-1.svg" alt="No logo"/> 
           <h1 className="header__mainText">Fetch.Run.Bring.</h1>
           <p className="header__paragraph" style={{display:'block'}}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis nam asperiores magnam ratione et similique veritatis
                 odit non provident adipisci id vel nobis, quas modi officiis
                  deleniti exercitationem dicta? Dolorem!

           </p>
           <span>FREE TESTING</span> 
           <p className="header__paragraph" >
               A dog is happily waiting for you.Will you let him join you in an 
           exciting journey?</p>

</div>
<div className="header_subdivision2">  
        
</div>
        </div>
    )
}

export default Header
