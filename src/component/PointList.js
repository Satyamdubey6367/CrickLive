import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import NotFound from '../PageNotFound/NotFound'

const PointList= (props) => {

    const [match,setMatch] = useState([])

    useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/series_points?apikey=4170c4e0-50af-4b81-9f6c-19c12a939eb1&id=e7643096-ea15-4cbe-a0d4-17236af09f31").then((res)=>{
      //   console.log(res.data.data);
        setMatch(res.data.data)
        })
     },[])
     return (
        <>
                <div className="point-list">
                <h1>Point Table</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                    <th style={headerStyle}>Image</th>
                      <th style={headerStyle}>Matches</th>
                    
                      <th style={headerStyle}>Wins</th>
                      <th style={headerStyle}>loss</th>
                      <th style={headerStyle}>ties</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                   match? match.map((Point, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            className="flag"
                            src={Point.img}
                            alt={`${Point.name} Flag`}
                            style={flagStyle}
                          />
                        </td>
                        <td style={tableCellStyle}>{Point.matches}</td>
                        <td style={tableCellStyle}>{Point.wins}</td>
                        <td style={tableCellStyle}>{Point.loss}</td>
                        <td style={tableCellStyle}>{Point.ties}</td>
                      </tr>
                    )):<NotFound/>}
                  </tbody>
                </table>
              </div>
          
          
        </>
      )
    }
    
    // Define inline styles
    const headerStyle = {
        backgroundColor: '#f2f2f2',
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
      };
      
      const flagStyle = {
        width: '80px',
        height: 'auto',
      };
      
      const tableCellStyle = {
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
      };
    
    export default PointList
     

