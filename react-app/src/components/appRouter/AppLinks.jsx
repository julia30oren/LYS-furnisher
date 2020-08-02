import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config';

export default function AppLinks() {
    return routes.filter(route => route.isVisible === true).map(route =>
        <p className="nav-links">
            <Link className="nav-text" to={route.path} key={route.key}> {route.title}</Link>
            <i className="fas fa-angle-double-right"></i>
        </p>
    )
}