import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const BigImg = ({ name, className, src, onClick }) => {

    return (
        <LazyLoadImage title={name} effect="opacity" className={className} src={src} onClick={onClick} alt={name} />
    )
}

export default BigImg;