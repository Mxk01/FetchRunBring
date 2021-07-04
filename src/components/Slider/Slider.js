import {useState} from 'react'
import './Slider.css';
 
import {data} from '../../data.js';
function Slider() {
//     let [slide,setSlide] = useState(0);
//     let nextSlide = () => { 
//       // checking if we reached end 
//       if(slide>data.length-1) { setSlide(0) } 
//       else  { 
//           setSlide(slide+1)
//       }
//     } 
//     let previousSlide = () => { 
//         // checking if we reached end 
//         if(slide<0)  
//         {
//             setSlide(0);
//         } 
//         else { 
//         // Show first item
//         setSlide(slide-1)
//     }
// } 
    return (
        <div className="main__slider">
            {/* {data[slide].url ? ( */}
            
            <div className="sub__slider"> 
             {/* <img src={data[0].url} alt="" /> */}
             <p>{data[0].content} </p>
             {/* <img src={data[slide].url} alt="image1" /> */}
            {/* <p> {data[slide].content}</p> */}
            </div> 
            <div className="button__slider">  
            {/* <button onClick={()=>console.log('Previous was clicked')}>Previous</button>
             <button  onClick={()=>console.log('Next was clicked')}>Next</button> */}
            </div>

        </div>
    )
}

export default Slider
