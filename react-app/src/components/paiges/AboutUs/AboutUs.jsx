import React, { useEffect } from 'react';
import translate from '../../../translation/do-translate';
import './AboutUs.css';


// export const AboutUs = (props) => {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="About-component">
//             <br />
//             <img className="photo-1" src="https://i.pinimg.com/originals/0e/6c/9a/0e6c9aa13a2c452ec4ccbdd2ed326e81.jpg" alt="photo 1" />
//             <img className="photo-2" src="https://i.pinimg.com/originals/af/aa/a3/afaaa36661f15fb1c4efde0c549a78a0.jpg" alt="photo 1" />
//             <div className='leter'>
//                 <div className="aboutTextDiv">
//                     <p>{translate('about-1-text')}</p>
//                     <p>{translate('about-2-text')}</p>
//                     <p>{translate('about-3-text')}</p>
//                     <p>{translate('about-4-text')}</p>
//                     <p>{translate('about-5-text')}</p>
//                     <p>{translate('about-6-text')}</p>
//                     <p style={{ marginLeft: '30%', marginTop: '50px', }}>{translate('about-7-text')}</p>
//                 </div>
//             </div>
//         </div >
//     )
// }

export default function AboutUsComp(props) {
    return (
        <div className="About-component">
            <div className="parallax par-2"></div>

            <div className="aboutTextDiv">
                <p>{translate('about-1-text')} {translate('about-2-text')}</p>
                <p>{translate('about-3-text')}</p>
            </div>

            <div className="parallax par-1"></div>

            <div className="aboutTextDiv">
                <p>{translate('about-4-text')} {translate('about-5-text')}</p>
                <p>{translate('about-6-text')}</p>
            </div>

        </div >
    )
}