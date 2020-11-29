import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config';


export default class AppLinks extends React.Component {

    render() {

        return routes.filter(route => route).map(route =>
            <Link className={route.className} key={route.key} to={route.path}>
                {route.title}
            </Link>
        )
    }
}