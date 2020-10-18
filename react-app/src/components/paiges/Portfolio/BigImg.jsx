import React from 'react';
import './Portfolio.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const BigImg = ({ name, className, src, onClick }) => {

    return (
        <a href="#" title={name}>
            <LazyLoadImage effect="opacity" className={className} src={src} onClick={onClick} alt={name} />
        </a>
    )
}

export default BigImg;