import React from 'react'

const countries = ["BRAZIL", "FRANCE", "TUNISIA","SPAIN","GERMANY","USA"]

function Slides(props){
    return (
        <div className='section2' >
           {props.slide.map(el => <div className={el.patient ? 'blue' : 'green'}>
<h2 className='h2-styling' >{el.title}</h2>
           <h1 className='h1-styling' >{el.text}</h1>
           {el.patient && <select className="select-button" >
               <option>CHOOSE A COUNTRY</option>
               {countries.map(el => <option value="#">{el}</option>)}
               </select>}
           <img className="image-positioning" src={el.source}/>
</div>   )} 
        </div>
    )
}
export default Slides;