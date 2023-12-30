import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import LiveScoreCard from './LiveScoreCard'
import NotFound from '../PageNotFound/NotFound'
export const LiveScore = () => {

    const [match,setMatch] = useState([])

    useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/cricScore?apikey=4170c4e0-50af-4b81-9f6c-19c12a939eb1").then((res)=>{
        console.log(res.data.data);
        setMatch(res.data.data)
        })
     },[])
  return (
    <div>
   
           <div className='container'>
    {
        match?match.map((value,index,array)=>{
          
            return(
              <LiveScoreCard match={value}/>
            )
        }):<NotFound/>
    }

           </div>

   </div>
  )
}