import React from 'react';

function Paraghraph1(props){  
    let el=props.parag;  
    return(
          <div style={{margin:'100px'}}>  <h1 className="main4-h2">{el.txt} 
        <br/>
        <span className='main4-h2'>{el.txt1}</span></h1>     
        <p className="main4-p">{el.txt2} <br/>
        <span className='main4-p' >{el.txt3}</span>
        <br/>
    <span className='main4-p'>{el.txt4}</span></p>
    </div>
    )
    
    }    
    
export default Paraghraph1;

