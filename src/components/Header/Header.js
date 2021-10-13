import React, { memo } from 'react';
import './Header.css'

const Header = memo(() => {
    return (
        <div className="header">
            <h3>List Of Faculties</h3>
            <h4>Total Budget $3000</h4>
        </div>
    );
});

export default Header;