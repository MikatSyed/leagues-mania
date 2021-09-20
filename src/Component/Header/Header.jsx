import React from 'react';
import bgImage from '../../image/pascal-muller-0oMsWA8yLN0-unsplash.jpg'
import './Header.css'

const Header = ({banner,logo}) => {
   
     banner = banner || bgImage;
    
    let name =  <h1 className="text-warning">Leagues Mania</h1>
    let style = {
        backgroundImage: `url("${banner}")`
    }
    return (
        <header style={style}>

  
    {
         logo ? <img src={logo} alt=""/> : name
     }
 
          
        </header>
    );
};

export default Header;