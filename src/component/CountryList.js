import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import NotFound from '../PageNotFound/NotFound'



const  CountryList= (props) => {

    const [match,setMatch] = useState([])

    useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/countries?apikey=4170c4e0-50af-4b81-9f6c-19c12a939eb1&offset=0").then((res)=>{
      //   console.log(res.data.data);
        setMatch(res.data.data)
        })
     },[])
     return (
        <>
                <div className="country-list">
                <h1>Country List</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={tableHeaderStyle}>Flag</th>
                      <th style={tableHeaderStyle}>Country Name</th>
                      <th style={tableHeaderStyle}>Short Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {match?match.map((country, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            className="flag"
                            src={country.genericFlag}
                            alt={`${country.name} Flag`}
                            style={flagStyle}
                          />
                        </td>
                        <td style={tableCellStyle}>{country.name}</td>
                        <td style={tableCellStyle}>{country.id}</td>
                      </tr>
                    )):<NotFound/>}
                  </tbody>
                </table>
              </div>
          
          
        </>
      )
    }
    
    // Define inline styles
    const tableHeaderStyle = {
        backgroundColor: '#f2f2f2',
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
      };
      
      const flagStyle = {
        width: '30px',
        height: 'auto',
      };
      
      const tableCellStyle = {
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
      };
    
    export default CountryList
     