import React from 'react'
const Card = (props) => {
    console.log(props)
    const {match} = props
    return (
        <div className='card'>
            <div className='header flex'>
                <div>{match.name}</div>
                <div>{match.date}</div>
            </div>

            <div>
            {
                match.teamInfo.map((team,index)=>{
                    return(
                        <div className='team flex'>
                        <div><img style={{width:"20px"}} src={team.img}/>{team.shortname?team.shortname:"NA"}</div>
                        <div>{match.score[index] ? match.score[index].r +'/' + match.score[index].w + '(' + match.score[index].o + ')' :'--(0)'}
                        </div>
    
    
                    </div>
                    )
                })
            }

            </div>
            
            <div style={{fontSize:"11px",marginTop:"20px"}}>
            <div>{match.status}</div>
            </div>
        </div>
    )
}
export default Card