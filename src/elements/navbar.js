import React from "react"
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    // document.getElementById("root").style = "backround-color:green;"
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} text-${props.color}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about">Link</a>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href=" /">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href=" /">Something else here</a></li>
                            </ul>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href=" /">Disabled</a>
                        </li> */}
                    </ul>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" style={{ backgroundColor: "light" }} onClick={props.togglecolor} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" style={{ backgroundColor: "black" }} onClick={props.togglecolor} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" style={{ backgroundColor: "green" }} onClick={props.togglecolor} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" style={{ backgroundColor: "red" }} onClick={props.togglecolor} />
                    </div>


                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
        // <nav className="navbar navbar-expand-lg bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href=" /">{props.title}</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <a className="nav-link active" aria-current="page" href=" /">Home</a>
        //                 <a className="nav-link" href=" /">Features</a>
        //                 <a className="nav-link" href=" /">Pricing</a>
        //                 <a className="nav-link disabled" href=" /">Disabled</a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
};
// Navbar.propTypes = {title : PropTypes.string.isRequired}

// Navbar.defaultProps = {
//     title:"ranvir"
// }