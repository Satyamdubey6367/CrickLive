import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import NotFound from '../PageNotFound/NotFound'
export const  CurrentMatches= (props) => {

    const [state,setState] = useState([])

    useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/currentMatches?apikey=4170c4e0-50af-4b81-9f6c-19c12a939eb1&offset=0").then((res)=>{
      //   console.log(res.data.data);
        setState(res.data.data)
        })
     },[])
  return (
    <>
    <div className='container'>   
    {
 state?state.map((value,index,array)=>{
        return(
              <Card match={value}/>
              )
            }):<NotFound/>
         }
          
    </div>
  </>
       )
     }



