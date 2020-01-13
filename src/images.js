import React from 'react'

function Image(props){
    
return( 
<div className="main4" >
{props.tab.map(el => 
    <div className="main4-image">
    <img style={{borderTopLeftRadius :'6px' ,borderTopRightRadius:'6px'}} 
    src={el.source} />
    <div className="image-bottom">
        <p className="image-name">{el.name}</p>
        <button className="main4button">{el.btn}</button>
    </div>
</div>)
  }  </div>)
}

export default Image;