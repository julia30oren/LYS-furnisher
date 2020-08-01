import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config'

export default function AppLinks() {
    return routes.filter(route => route.isVisible).map(route =>
        <Link to={route.path} key={route.key}> {route.title}</Link>
    )
}