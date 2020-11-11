import React, { Fragment } from 'react';
import './static/Header.css';

function Header(props) {
    return (
        <Fragment>
            <header className='header title'>
                <h3 className='title-ml'>Via Egnatia</h3>
            </header>
        </Fragment>
    )
}

export default Header;