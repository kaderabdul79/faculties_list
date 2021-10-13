import React from 'react';
import { useState , useEffect } from 'react';
import './University.css'

const University = () => {
    const [faculties,setFaculties] = useState([]);
    
    useEffect(() => {
        fetch('./faculties-mock-data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div className="university-container">
            <div className="faculties-container">
                <p>from University</p>
            </div>
            <div className="cart-container">
                <p>List of Hire Faculties</p>
            </div>
        </div>
    );
};

export default University;