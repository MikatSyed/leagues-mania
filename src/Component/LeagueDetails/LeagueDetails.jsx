import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Header from '../Header/Header';
import malePhoto from '../../image/Rectangle 28.png'
import femalePhoto from '../../image/female.png'
import './LeagueDetails.css';
import Facebook from '../../image/Facebook.png'
import Youtube from './../../image/YouTube.png'
import Twitter from './../../image/Twitter.png'
import FoundationIcon from '@mui/icons-material/Foundation';
import FlagIcon from '@mui/icons-material/Flag';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';



const LeagueDetails = () => {
    const [league, setLeague] = useState({})
    const { leagueId } = useParams();
    useEffect(() => {
        const api = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        axios(api)
            .then(data => setLeague(data.data.leagues[0]))
    }, [])
    let { dateFirstEvent, strCountry, strSport, strGender, strLeague, strDescriptionEN, strYoutube, strTwitter, strFacebook } = league;
    return (
        <>
            <div className="league_main">
                <Header banner={league.strFanart2} logo={league.strBadge} />
                <div className="container d-flex justify-content-center align-items-center  mt-5 ">
                    <div className="row bg-light mb-5 main_card">
                        <div className="col-md-6 col-sm-12  row align-items-center league_card ">
                            <h1 className="">{strLeague}</h1>
                            <h3 className="" > <FoundationIcon /> Founded : {dateFirstEvent}</h3>
                            <h3 className=""> <FlagIcon/> Country : {strCountry}</h3>
                            <h3 className=""> <SportsSoccerIcon/> Sport Type : {strSport}</h3>
                            
                           <div>
                           {
                            strGender === 'Male' ?  
                            <h3 className="mb-5"><MaleIcon/> Gender : {strGender}</h3>
                            :
                            <h3 className="mb-5"><FemaleIcon/> Gender : {strGender}</h3>
                           }
                           </div>
                        </div>
                        <div className="col-md-6 photo col-sm-12 row align-items-center mb-4">
                            {
                                strGender === 'Male' ? <img src={malePhoto} alt="" /> : <img src={femalePhoto} alt="" />
                            }

                        </div>
                    </div>
                </div>

                <div className="container  justify-content-center align-items-center  text-light ">
                    <p style={{ textAlign: 'justify' }}>{strDescriptionEN}</p>
                    <p style={{ textAlign: 'justify' }}>{strDescriptionEN}</p>
                    <p style={{ textAlign: 'justify' }}>{strDescriptionEN}</p>
                </div>

                <footer className="text-center">
                    <a target="blank" href={`https://${strFacebook}`}><img src={Facebook} alt="Facebook" /></a>
                    <a target="blank" href={`https://${strYoutube}`}> <img src={Youtube} alt="Youtube" /></a>
                    <a target="blank" href={`https://${strTwitter}`}><img src={Twitter} alt="Twitter" className="" /></a>
                </footer>

            </div>

        </>
    );
};

export default LeagueDetails;