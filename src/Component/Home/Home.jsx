import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from './../Header/Header';
import Card from '../Card/Card';
import './Home.css'


const Home = () => {
    const[leagues,setLeagues] = useState([]);
    useEffect(()=>{
     const api = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
     axios(api)
    .then(data => setLeagues(data.data.leagues.slice(0,60)))

    },[])
    return (
        <div className="container_main">
      <Header />
      <div className="container d-flex justify-content-center align-items-center h-100 mt-5">
      <div className="row">
      {
          leagues.map(({strLeague,strSport,idLeague}) => (
          <div  className="col-md-4 col-sm-10  mb-2" >
           <Card name={strLeague} type={strSport} id={idLeague}/>
          
          </div>
         
           ))
    }

      </div>
      </div>
     
        </div>
    );
};

export default Home;