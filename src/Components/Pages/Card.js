import React from "react";
import { Link, Route } from "react-router-dom";
// import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <div className="Card-Container">
                <div className="Card-title">
                    <h2>{props.title1}</h2>
                </div>


                <Route>
                    <Link to= {props.hlink} >
                        <div className="image-Container">
                            <img src={props.imgSource} alt='about1' />
                        </div>
                    </Link>
                </Route>
            </div>
        </>
    )
}

export default Card