import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config';


export default function AppLinks() {


    return routes.filter(route => route.isVisible === true).map(route =>
        <p className="Nav-links" key={0 + route.key}>
            <Link className="nav-text" to={route.path} key={route.key}>{route.title}
                <i className={route.arroweIcon}></i>
            </Link>
        </p>
    )
}