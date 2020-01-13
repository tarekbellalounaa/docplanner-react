import React from "react";

function Footer(props) {
  let el = props.data;
  return (
    <div className="footer">
      <p className="footer-p">
        {el.t}
        <a className="footer-lien" href="#">
          {" "}
          {el.t1}
        </a>
        ,
        <a className="footer-lien" href="#">
          {" "}
          {el.t2}
        </a>
        ,
        <a className="footer-lien" href="#">
          {" "}
          {el.t3}
        </a>
        ,
        <a className="footer-lien" href="#">
          {" "}
          {el.t4}
        </a>
        ,
        <a className="footer-lien" href="#">
          {el.t5}
        </a>
        ,
        <a className="footer-lien" href="#">
          {" "}
          {el.t6}
        </a>
        ,
        <a className="footer-lien" href="#">
          {" "}
          {el.t7}
        </a>
        ,
        <a className="footer-lien" href="#">
          {" "}
          {el.t8}
        </a>
        ,
        <a className="footer-lien" href="#">
          {el.t9}
        </a>
        and{" "}
        <a className="footer-lien" href="#">
          {" "}
          {el.t10}
        </a>
        .
      </p>
      <p className="footer-p"> {el.t11} </p>
      <p className="footer-p"> {el.t12} </p>
    </div>
  );
}
export default Footer;
