import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Faculties.css'

const Faculties = (props) => {
    const {id,name,email,gender,salary,department,image,university_name} = props.faculty;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props)
    return (
        <div className="faculties-cont">
             <img src={image} alt="" />
              <h3>{name}</h3>
              <span>{email}</span>
              <p>University: {university_name}</p>
              <p>Department: {department}</p>
              <h3>Salary : ${salary}</h3>
              <button onClick={() => props.addtoCart(props.faculty)} className="btn-regular"><i>{element}</i>Add To Cart</button>
        </div>
    );
};

export default Faculties;