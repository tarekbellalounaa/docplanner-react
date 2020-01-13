import React from 'react'
function Header(props){
    return (
        <div className="header"> 
            <img src={props.header.link}/>
            <h1 className="textstyling">{props.header.text}</h1>
        </div>

    )
}
export default Header;