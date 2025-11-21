import React from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';


const Master = (props) => {
    return (
        <div>
          <AppNavbar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Master;