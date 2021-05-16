import React, {useEffect,useState} from 'react';
import './Covid.css';


const Covid=()=>{
    
    const[data,setdata]=useState([]);
    const getCovidData=async()=>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData=await res.json();
            setdata(actualData.statewise[0]);
        }
        catch(err){
            console.log(err);
        }   
    }  

    useEffect(()=>{
        getCovidData();
    },[]);
    return (
        <div id="main">
            <section>
           <h1>Live</h1>
           <h2>Covid-19 coronavirus tracker</h2>

           
               <div className="first">
               <div className="card_main">
                   <div className="card_inner">
                       <p className="card_name"><span>Our </span> Country </p>
                       <p className="card_total card_small">INDIA</p>
                   </div>
               </div>
               </div>
           
           
           
               <div className="second">
               <div className="card_main">
                   <div className="card_inner">
                       <p className="card_name"><span>Total</span> Recovered </p>
                       <p className="card_total card_small">{data.recovered}</p>
                   </div>
               </div>
               </div>
           
           
               <div className="third">
               <div className="card_main">
                   <div className="card_inner">
                       <p className="card_name"><span>Total </span> Confirmed </p>
                       <p className="card_total card_small">{data.confirmed}</p>
                   </div>
               </div>
               </div>
           
           
               <div className="fourth">
               <div className="card_main">
                   <div className="card_inner">
                       <p className="card_name"><span>Total </span>Deaths</p>
                       <p className="card_total card_small">{data.deaths}</p>
                   </div>
               </div>
               </div>
           

           
               <div className="fifth">
               <div className="card_main">
                   <div className="card_inner">
                       <p className="card_name"><span>Total </span>Active</p>
                       <p className="card_total card_small">{data.active}</p>
                   </div>
               </div>
               </div>
           
           
               <div className="sixth">
               <div className="card_main">
                   <div className="card_inner">
                       <p className="card_name"><span>Last </span>Updated</p>
                       <p className="card_total card_small">{data.lastupdatedtime}</p>
                   </div>
               </div>
               </div>
           

           </section>
        </div>
    );
};

export default Covid;