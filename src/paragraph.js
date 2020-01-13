import React from 'react'
function Paraghraph(props){
    return(
        <div className="section1">

{props.para.map(el =>         <div className='section1-part1'> <p className="section1-part1-paragh" >{el}
</p></div>
)}
        
        </div>
    )

}
export default Paraghraph;