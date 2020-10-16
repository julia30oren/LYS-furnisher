import React from 'react';
import './Portfolio.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const BigImg = ({ name, className, src, onClick }) => {
    ////////Hooks////////////

    ////////Functions////////////

    /////////Jsx///////////
    return (
        <a href="#" title={name}>
            <LazyLoadImage effect="blur" className={className} src={src} onClick={onClick} alt={name} /></a>
    )
}
export default BigImg;