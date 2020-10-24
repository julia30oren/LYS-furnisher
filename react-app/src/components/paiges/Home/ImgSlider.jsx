import React from 'react';

function ImgSlider({ src, title, text }) {
    return (

        <div className="slider-img">
            <img src={src} alt="img" />
            <div>
                <h6>{title}</h6>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ImgSlider;