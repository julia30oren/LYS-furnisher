import React from 'react';
import Home from '../Home';
import AboutUs from '../AboutUs';

export const routes = [
    // { key: 0, isVisible: false, path: "/", component: Home },
    { key: 1, isVisible: true, title: ' Home ', path: "/", component: Home },
    { key: 2, isVisible: true, title: ' About us ', path: "/about", component: AboutUs }
]