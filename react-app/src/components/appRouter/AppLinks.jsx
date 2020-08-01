import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config'

export default function AppLinks() {
    return routes.filter(route => route.isVisible === 'ukr').map(route =>
        <li className="nav-item"><p className="nav-links"><Link className="nav-text" to={route.path} key={route.key}> {route.title}</Link></p></li>
    )
}