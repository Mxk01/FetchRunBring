import React from 'react'
import './SubHeader.css';
import Slider from '../Slider/Slider';
function Subheader() {
    return (
        <div className="subheader__container">
             <div className="subheader__1">
                 <h1 className="subheader_mainText">Who <span style={{color:'rgb(92, 92, 255)'}}> we</span> are</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, obcaecati sunt molestiae officia saepe atque totam blanditiis quia amet tenetur nostrum veritatis iure magni est deleniti adipisci sit commodi laudantium!

                 </p>
             </div>

             <div className="subheader__2">
                 <Slider className="subheader__slider"/>                  
             </div>
        </div>
    )
}

export default Subheader
