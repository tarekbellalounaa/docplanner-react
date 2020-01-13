import React from "react";
function Nav(props) {
  return (
    <div className="navbar">
      <div className="navbarborder">
        <div>
          <a href="#">
            <img
              className="navimage"
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            />
          </a>
        </div>
        <div className="navbarmenu">
          {props.data.map(el => (
            <a className={el.a ? "hypertextstyling1" : "hypertextstyling"} href={el.link}>
              {el.text}
              {el.sousMenu && (
                <div className="dropdown">
                  <ul className="dropdownul">
                 
                    {el.sousMenu.map(el => (
                      <li className="dropdownli">
                        <a>{el}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
