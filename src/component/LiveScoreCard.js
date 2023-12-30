import React from 'react'

 const LiveScoreCard = (props) => {
    console.log(props)
    const {match} = props
    return (
        <div className='card1'>
            <div className='header1 flex1'>
            <div><img style={{width:"20px"}} src={match.t1img?match.t1img:"NA"}/></div>
                <div>{match.t1}</div>
                <div><img style={{width:"20px"}} src={match.t2img?match.t2img:"NA"}/></div>
                <div>{match.t2}</div>
            </div>

            <div>

            <div className='team flex'>
      
         
            <div>{match.t1s ? match.t1s : '(0)'}</div>
            <div>{match.t1s ? match.t1s : '(0)'}</div>
            </div>
            
            </div> 

            <div style={{fontSize:"11px",marginTop:"20px"}}>
            <div>{match.status}</div>
            
            </div>

            <div style={{fontSize:"11px",marginTop:"20px", display:"flex", gap:"70px"}}>
            <div>{match.dateTimeGMT}</div>
            <div>{match.matchType}</div>
            </div>
            </div>
            )
        }
        export default LiveScoreCard
       
        