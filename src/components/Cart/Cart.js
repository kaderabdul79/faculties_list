import React from 'react';
import './Cart.css'

const Cart = (props) => {
     const {cart} = props
    
    let totallists = 0;
    let total = 0;
    for(const faculty of cart){
        if(!faculty.lists){
            faculty.lists = 1;
        }
        total = total + faculty.salary * faculty.lists;
        totallists = totallists + faculty.lists;
        }
    return (
        <div>
            <h3>No of Faculties : {totallists}</h3>
            <h3>Total Salary : ${total}</h3>
        </div>
    );
};

export default Cart;