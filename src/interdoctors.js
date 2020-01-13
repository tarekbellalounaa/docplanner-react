import React from 'react'
function Brandslogo(props){
return (
<div className="main2">
   <div class="main2-section1">
       <h2 class="main2-h1styling">We are a global
       <br/>company 
        <br/>with local culture
        </h2>
    </div>
    <div className="brands_logos">
 {props.logos.map(el => 
    <li>
        <a className="sitenamestyle" href={el.link} target={el.targ} >
        <svg className="logos" xmlns={el.a} width={el.width} height={el.height} viewBox={el.viewB} >
        <path d={el.dpath} ></path>
        </svg>
       </a>
       </li> )}
   <div/>
</div></div>
)
}
export default Brandslogo;