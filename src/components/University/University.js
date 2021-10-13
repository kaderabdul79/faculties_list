import React from 'react';
import { useState , useEffect } from 'react';
import Faculties from '../Faculties/Faculties';
import './University.css'

const University = () => {
    const [faculties,setFaculties] = useState([]);

    useEffect(() => {
        fetch('./faculties-mock-data.json')
        .then(res => res.json())
        .then(data => setFaculties(data))
    },[])

    return (
        <div className="university-container">
            <div className="faculties-container">
                {
                    faculties.map(faculty => <Faculties key={faculty.id} faculty={faculty}></Faculties>)
                }
            </div>
            <div className="cart-container">
                <p>List of Hire Faculties</p>
            </div>
        </div>
    );
};

export default University;