import React,{useState} from 'react'
import Header from './Header/Header'; 
import SubHeader from './SubHeader/SubHeader'; 
import Footer from './Footer/Footer'; 
import Navbar from './Navbar/Navbar'; 
import './ContactUs.css';
import {input,paragraph} from './styles.js';
import FadeIn from 'react-fade-in';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { send } from 'emailjs-com';


 function ContactUs() {
    const [message, setMessage] = useState('');
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_8x9vybq',
          'template_m58016q',
          toSend,
          'user_WxRLWZer5clbwYS49n5sN'
        )
          .then((response) => {
            setMessage('Email was sent sucesfully!');
            setTimeout(()=>setMessage(''),1000);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
          // this will append new messages to this object 
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    const defaultPosition = [44.439663
        , 26.096306
    ]; // Bucharest position
       // lat long 
     return (
        <div>
            <FadeIn>
       
          <Navbar/>
          <div className="contact__container"> 
          <img  className="contact__image"
          src="https://pbs.twimg.com/media/DsXVxmiXoAA5nZ0.jpg"  alt="No image found" />
       
       {!message ? '' : (<FadeIn>  <p style={{
           backgroundColor:'#9c88ff',
           padding:'10px',
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           color:'white',
           height:'5vh',
           width:'300px'
           }}>Message was sent sucessfully</p>
           </FadeIn>)} 
       <form style={{
           marginBottom:'30px',
           display:'flex',
           flexDirection:'column',
           justifyContent:'center',
           marginLeft:'20px',
           alignItems:'center'}} 
           method="POST"
          onSubmit={(e)=>onSubmit(e)}>
          
           <input
           style={input}
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />

  <input style={input}
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input style={input}
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
            <button  style={{border:'0',padding:'1rem',width:'320px',marginTop:'1rem'
        ,backgroundColor:'#9c88ff',color:'white',borderRadius:'25px'}} type="submit">
            Submit
           </button>
           
       </form>
       </div>
       <MapContainer 
       style={{width:'100vw',height:'40vh'}}
       center={[44.439663
        , 26.096306
    ]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={
      [44.439663
        , 26.096306
    ]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
       <SubHeader/>
      <Footer/>
      </FadeIn>

        </div>
    )
}

export default ContactUs
