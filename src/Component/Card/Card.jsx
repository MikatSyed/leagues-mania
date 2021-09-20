import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const Card = ({name,type,id}) => {
    const [image,setImage] = useState([])
    useEffect(()=> {
     const api = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
     axios(api)
     .then(data => setImage( data.data.leagues[0]))
    },[])
    return (
        <div className="card text-center bg-light ">
        <div className="overflow">
          <img src={image.strBadge} alt="a wallpaper"  />
        </div>
        <div className="card-body text-light">
          <h4 className="text-dark">{name}</h4>
          <h4 className="card-text text-dark">{type} </h4>
         <Link to={`/league/${id}`}> <button className="btn btn-primary">Explore <ArrowForwardIcon/></button> </Link>
       
          
        </div>
      </div>
              
    );
};

export default Card;