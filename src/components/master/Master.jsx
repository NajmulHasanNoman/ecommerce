import React from 'react';
import AppNavbar from './co';

const Master = (props) => {
    return (
        <div>
           <AppNavbar/>
            {props.children}
        </div>
    );
};

export default Master;