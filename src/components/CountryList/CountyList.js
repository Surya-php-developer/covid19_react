import React from 'react';
import Country from '../Country/Country';
import './countrylist.css';

const CountryList = (props) =>{
    return (
        <div className='countrylist'>
        {
            props.stats.map(country =><Country key = {country.CountryCode } stats ={country} /> ) 
        }
        </div>
     )  

}
export default CountryList