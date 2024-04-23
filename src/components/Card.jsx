import React from "react";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";


function Card(props) {

  return (
    <>
      <div className='card'>
        <img className='img' src={props.img} />
        <div className='info-div'>
          <h1 className='name-surname' >{props.name} {props.surname}</h1>
          <p className='info'><MdEmail /> Email: {props.email}</p>
          <p className='info'><MdLocalPhone /> Phone: {props.phonenum} </p>
          <p className='info'><FaGlobeAmericas /> Country: {props.country} </p>
        </div>
      </div>
    </>
  )
}

export default Card