import React from 'react';
import './Faculties.css'

const Faculties = (props) => {
    const {id,name,email,gender,salary,department,image,university_name} = props.faculty;
  
    return (
        <div className="faculties-cont">
             <img src={image} alt="" />
              <h3>{name}</h3>
              <span>{email}</span>
              <p>University: {university_name}</p>
              <p>Department: {department}</p>
              <h3>Salary : ${salary}</h3>
              <button className="btn-regular">Add To Cart</button>
        </div>
    );
};

export default Faculties;