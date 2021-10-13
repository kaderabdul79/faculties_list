import React from 'react';
import { useState , useEffect } from 'react';
import { addToDb } from '../../storage/localstorage';
import Cart from '../Cart/Cart';
import Faculties from '../Faculties/Faculties';
import './University.css'

const University = () => {
    const [faculties,setFaculties] = useState([]);
    const [cart,setCart] = useState([])

    useEffect(() => {
        fetch('./faculties-mock-data.json')
        .then(res => res.json())
        .then(data => setFaculties(data))
    },[])

    const addtoCart = (faculty) => {
        const newCart = [...cart,faculty]
        setCart(newCart)
        addToDb(faculty.id)
    }

    return (
        <div className="university-container">
            <div className="faculties-container">
                {
                    faculties.map(faculty => <Faculties addtoCart={addtoCart} key={faculty.id} faculty={faculty}></Faculties>)
                }
            </div>
            <div className="cart-container">
                <p>List of Hire Faculties</p>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default University;