import React from 'react';

function Stats(props){
    return(
        <div className="main3-section2" >
            {props.stat.map(el => 
            <div class="stat" ><img  src={el.source} />
                    <h2 class="stat-h2">{el.title} <br/>
                    <span class="stat-h2">{el.title1} </span> 
                    </h2>
                    <p class="stat-p">{el.text} </p>
                    </div>)}
        </div>
    )
}
export default Stats;

