import pic1 from '../../pic/portfolio/portfolio-img (1).jpg';
import pic2 from '../../pic/portfolio/portfolio-img (2).jpg';
import pic3 from '../../pic/portfolio/portfolio-img (3).JPG';
import pic4 from '../../pic/portfolio/portfolio-img (4).JPG';
import pic5 from '../../pic/portfolio/portfolio-img (5).JPG';
import pic6 from '../../pic/portfolio/portfolio-img (6).jpg';
import pic7 from '../../pic/portfolio/portfolio-img (7).JPG';
import pic8 from '../../pic/portfolio/portfolio-img (8).JPG';
import pic9 from '../../pic/portfolio/portfolio-img (9).JPG';
import pic10 from '../../pic/portfolio/portfolio-img (10).JPG';
import pic11 from '../../pic/portfolio/portfolio-img (11).jpg';
import pic12 from '../../pic/portfolio/portfolio-img (12).JPG';
import pic13 from '../../pic/portfolio/portfolio-img (13).JPG';
import pic14 from '../../pic/portfolio/portfolio-img (14).JPG';
import pic15 from '../../pic/portfolio/portfolio-img (15).jpg';
import pic16 from '../../pic/portfolio/portfolio-img (16).jpg';
import pic17 from '../../pic/portfolio/portfolio-img (17).jpg';
import pic18 from '../../pic/portfolio/portfolio-img (18).jpg';
import pic19 from '../../pic/portfolio/portfolio-img (19).jpg';
import pic20 from '../../pic/portfolio/portfolio-img (20).jpg';
import pic21 from '../../pic/portfolio/portfolio-img (21).jpg';
import pic22 from '../../pic/portfolio/portfolio-img (22).jpg';
import pic23 from '../../pic/portfolio/portfolio-img (23).jpg';
import pic24 from '../../pic/portfolio/portfolio-img (24).JPG';
import pic25 from '../../pic/portfolio/portfolio-img (25).jpg';
import pic26 from '../../pic/portfolio/portfolio-img (26).JPG';
import pic27 from '../../pic/portfolio/portfolio-img (27).JPG';
import pic28 from '../../pic/portfolio/portfolio-img (28).JPG';
import pic29 from '../../pic/portfolio/portfolio-img (29).JPG';
import pic30 from '../../pic/portfolio/portfolio-img (30).jpg';
import pic31 from '../../pic/portfolio/portfolio-img (31).JPG';
import pic32 from '../../pic/portfolio/portfolio-img (32).JPG';
import pic33 from '../../pic/portfolio/portfolio-img (33).JPG';
import pic34 from '../../pic/portfolio/portfolio-img (34).JPG';
import pic35 from '../../pic/portfolio/portfolio-img (35).jpg';
import pic36 from '../../pic/portfolio/portfolio-img (36).jpg';
import pic37 from '../../pic/portfolio/portfolio-img (37).jpg';
import pic38 from '../../pic/portfolio/portfolio-img (38).jpg';
import pic39 from '../../pic/portfolio/portfolio-img (39).jpg';
import pic40 from '../../pic/portfolio/portfolio-img (40).JPG';
import pic41 from '../../pic/portfolio/portfolio-img (41).jpg';
import pic42 from '../../pic/portfolio/portfolio-img (42).JPG';
import pic43 from '../../pic/portfolio/portfolio-img (43).JPG';
import pic44 from '../../pic/portfolio/portfolio-img (44).JPG';
import pic45 from '../../pic/portfolio/portfolio-img (45).jpg';
import pic46 from '../../pic/portfolio/portfolio-img (46).jpg';
import pic47 from '../../pic/portfolio/portfolio-img (47).JPG';
import pic48 from '../../pic/portfolio/portfolio-img (48).jpg';
import pic49 from '../../pic/portfolio/portfolio-img (49).jpg';
import pic50 from '../../pic/portfolio/portfolio-img (50).JPG';
import pic51 from '../../pic/portfolio/portfolio-img (51).JPG';
import pic52 from '../../pic/portfolio/portfolio-img (52).jpg';
import pic53 from '../../pic/portfolio/portfolio-img (53).jpg';
import pic54 from '../../pic/portfolio/portfolio-img (54).JPG';
import pic55 from '../../pic/portfolio/portfolio-img (55).jpg';
import pic56 from '../../pic/portfolio/portfolio-img (56).JPG';
import pic57 from '../../pic/portfolio/portfolio-img (57).JPG';
import pic58 from '../../pic/portfolio/portfolio-img (58).jpg';
import pic59 from '../../pic/portfolio/portfolio-img (59).jpg';
import pic60 from '../../pic/portfolio/portfolio-img (60).jpg';
import pic61 from '../../pic/portfolio/portfolio-img (61).JPG';
import pic63 from '../../pic/portfolio/portfolio-img (63).jpg';
import pic64 from '../../pic/portfolio/portfolio-img (64).jpg';
import pic65 from '../../pic/portfolio/portfolio-img (65).jpg';
import pic66 from '../../pic/portfolio/portfolio-img (66).jpg';



import React, { useState } from 'react';
import translate from '../../translation/do-translate';



export const Images = (props) => {

    const [bigPicture, setBigPicture] = useState(null);

    return (
        <div className="row">

            {!bigPicture ? null :
                <div className="big-img-div row" style={{ width: '100%' }} >

                    <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={bigPicture} alt="" className="big-img" />
                        <button className="close-b" type="button" onClick={() => setBigPicture(null)}><i className="fas fa-times  fa-3x"></i></button>
                    </div>
                    <div className="column" style={{ width: '30%', height: ' 1100px', marginLeft: '10%', overflowX: 'auto' }}>
                        <img className="thumbnail" src={pic1} onClick={() => { setBigPicture(pic1); }} alt="..." />
                        <img className="thumbnail" src={pic2} onClick={() => { setBigPicture(pic2); }} alt="..." />
                        <img className="thumbnail" src={pic3} onClick={() => { setBigPicture(pic3); }} alt="..." />
                        <img className="thumbnail" src={pic4} onClick={() => { setBigPicture(pic4); }} alt="..." />
                        <img className="thumbnail" src={pic5} onClick={() => { setBigPicture(pic5); }} alt="..." />
                        <img className="thumbnail" src={pic6} onClick={() => { setBigPicture(pic6); }} alt="..." />
                        <img className="thumbnail" src={pic7} onClick={() => { setBigPicture(pic7); }} alt="..." />
                        <img className="thumbnail" src={pic8} onClick={() => { setBigPicture(pic8); }} alt="..." />
                        <img className="thumbnail" src={pic9} onClick={() => { setBigPicture(pic9); }} alt="..." />
                        <img className="thumbnail" src={pic10} onClick={() => { setBigPicture(pic10); }} alt="..." />
                        <img className="thumbnail" src={pic11} onClick={() => { setBigPicture(pic11); }} alt="..." />
                        <img className="thumbnail" src={pic12} onClick={() => { setBigPicture(pic12); }} alt="..." />
                        <img className="thumbnail" src={pic13} onClick={() => { setBigPicture(pic13); }} alt="..." />
                        <img className="thumbnail" src={pic14} onClick={() => { setBigPicture(pic14); }} alt="..." />
                        <img className="thumbnail" src={pic15} onClick={() => { setBigPicture(pic15); }} alt="..." />
                        <img className="thumbnail" src={pic16} onClick={() => { setBigPicture(pic16); }} alt="..." />
                        <img className="thumbnail" src={pic17} onClick={() => { setBigPicture(pic17); }} alt="..." />
                        <img className="thumbnail" src={pic18} onClick={() => { setBigPicture(pic18); }} alt="..." />
                        <img className="thumbnail" src={pic19} onClick={() => { setBigPicture(pic19); }} alt="..." />
                        <img className="thumbnail" src={pic20} onClick={() => { setBigPicture(pic20); }} alt="..." />
                        <img className="thumbnail" src={pic21} onClick={() => { setBigPicture(pic21); }} alt="..." />
                        <img className="thumbnail" src={pic22} onClick={() => { setBigPicture(pic22); }} alt="..." />
                        <img className="thumbnail" src={pic23} onClick={() => { setBigPicture(pic23); }} alt="..." />
                        <img className="thumbnail" src={pic24} onClick={() => { setBigPicture(pic24); }} alt="..." />
                        <img className="thumbnail" src={pic25} onClick={() => { setBigPicture(pic25); }} alt="..." />
                        <img className="thumbnail" src={pic26} onClick={() => { setBigPicture(pic26); }} alt="..." />
                        <img className="thumbnail" src={pic27} onClick={() => { setBigPicture(pic27); }} alt="..." />
                        <img className="thumbnail" src={pic28} onClick={() => { setBigPicture(pic28); }} alt="..." />
                        <img className="thumbnail" src={pic29} onClick={() => { setBigPicture(pic29); }} alt="..." />
                        <img className="thumbnail" src={pic30} onClick={() => { setBigPicture(pic30); }} alt="..." />
                        <img className="thumbnail" src={pic31} onClick={() => { setBigPicture(pic31); }} alt="..." />
                        <img className="thumbnail" src={pic32} onClick={() => { setBigPicture(pic32); }} alt="..." />
                        <img className="thumbnail" src={pic33} onClick={() => { setBigPicture(pic33); }} alt="..." />
                        <img className="thumbnail" src={pic34} onClick={() => { setBigPicture(pic34); }} alt="..." />
                        <img className="thumbnail" src={pic35} onClick={() => { setBigPicture(pic35); }} alt="..." />
                        <img className="thumbnail" src={pic36} onClick={() => { setBigPicture(pic36); }} alt="..." />
                        <img className="thumbnail" src={pic37} onClick={() => { setBigPicture(pic37); }} alt="..." />
                        <img className="thumbnail" src={pic38} onClick={() => { setBigPicture(pic38); }} alt="..." />
                        <img className="thumbnail" src={pic39} onClick={() => { setBigPicture(pic39); }} alt="..." />
                        <img className="thumbnail" src={pic40} onClick={() => { setBigPicture(pic40); }} alt="..." />
                        <img className="thumbnail" src={pic41} onClick={() => { setBigPicture(pic41); }} alt="..." />
                        <img className="thumbnail" src={pic42} onClick={() => { setBigPicture(pic42); }} alt="..." />
                        <img className="thumbnail" src={pic43} onClick={() => { setBigPicture(pic43); }} alt="..." />
                        <img className="thumbnail" src={pic44} onClick={() => { setBigPicture(pic44); }} alt="..." />
                        <img className="thumbnail" src={pic45} onClick={() => { setBigPicture(pic45); }} alt="..." />
                        <img className="thumbnail" src={pic46} onClick={() => { setBigPicture(pic46); }} alt="..." />
                        <img className="thumbnail" src={pic47} onClick={() => { setBigPicture(pic47); }} alt="..." />
                        <img className="thumbnail" src={pic48} onClick={() => { setBigPicture(pic48); }} alt="..." />
                        <img className="thumbnail" src={pic49} onClick={() => { setBigPicture(pic49); }} alt="..." />
                        <img className="thumbnail" src={pic50} onClick={() => { setBigPicture(pic50); }} alt="..." />
                        <img className="thumbnail" src={pic51} onClick={() => { setBigPicture(pic51); }} alt="..." />
                        <img className="thumbnail" src={pic52} onClick={() => { setBigPicture(pic52); }} alt="..." />
                        <img className="thumbnail" src={pic53} onClick={() => { setBigPicture(pic53); }} alt="..." />
                        <img className="thumbnail" src={pic54} onClick={() => { setBigPicture(pic54); }} alt="..." />
                        <img className="thumbnail" src={pic55} onClick={() => { setBigPicture(pic55); }} alt="..." />
                        <img className="thumbnail" src={pic56} onClick={() => { setBigPicture(pic56); }} alt="..." />
                        <img className="thumbnail" src={pic57} onClick={() => { setBigPicture(pic57); }} alt="..." />
                        <img className="thumbnail" src={pic58} onClick={() => { setBigPicture(pic58); }} alt="..." />
                        <img className="thumbnail" src={pic59} onClick={() => { setBigPicture(pic59); }} alt="..." />
                        <img className="thumbnail" src={pic60} onClick={() => { setBigPicture(pic60); }} alt="..." />
                        <img className="thumbnail" src={pic61} onClick={() => { setBigPicture(pic61); }} alt="..." />
                        <img className="thumbnail" src={pic63} onClick={() => { setBigPicture(pic63); }} alt="..." />
                        <img className="thumbnail" src={pic64} onClick={() => { setBigPicture(pic64); }} alt="..." />
                        <img className="thumbnail" src={pic65} onClick={() => { setBigPicture(pic65); }} alt="..." />
                        <img className="thumbnail" src={pic66} onClick={() => { setBigPicture(pic66); }} alt="..." />
                    </div>

                </div>
            }

            <div className="porfolio-col column">
                <div className="row">
                    <img className="img-row chosen-image" src={pic54} alt="...." onClick={() => { setBigPicture(pic54); }} />
                    <img className="img-row chosen-image" src={pic55} alt="...." onClick={() => { setBigPicture(pic55); }} />
                </div>

                <div className="row">
                    <img src={pic10} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic10); }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '69.5%' }}>
                        <img src={pic64} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic64); }} />
                    </div>
                    <div className="column" style={{ width: '27%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic12} alt="...." onClick={() => { setBigPicture(pic12); }} style={{ maxHeight: '312px' }} />
                        <img className="chosen-image" src={pic50} alt="...." onClick={() => { setBigPicture(pic50); }} style={{ marginTop: '20px', maxHeight: '300px' }} />
                    </div>
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic4} alt="...." onClick={() => { setBigPicture(pic4); }} />
                    <img className="img-row chosen-image" src={pic59} alt="...." onClick={() => { setBigPicture(pic59); }} />
                </div>

                <div className="row">
                    <img src={pic42} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic42); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic24} alt="...." onClick={() => { setBigPicture(pic24); }} />
                    <img className="img-row chosen-image" src={pic20} alt="...." onClick={() => { setBigPicture(pic20); }} />
                </div>

                <div className="row">
                    <img src={pic33} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic33); }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '61.5%' }}>
                        <img src={pic11} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic11); }} />
                    </div>
                    <div className="column" style={{ width: '35%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic41} alt="...." onClick={() => { setBigPicture(pic41); }} style={{ maxHeight: '312px' }} />
                        <img className="chosen-image" src={pic66} alt="...." onClick={() => { setBigPicture(pic66); }} style={{ marginTop: '20px', maxHeight: '300px' }} />
                    </div>
                </div>

                <div className="row">
                    <img src={pic61} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic61); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic45} alt="...." onClick={() => { setBigPicture(pic45); }} />
                    <img className="img-row chosen-image" src={pic52} alt="...." onClick={() => { setBigPicture(pic52); }} />
                </div>

                <div className="row">
                    <img src={pic5} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic5); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic21} alt="...." onClick={() => { setBigPicture(pic21); }} style={{ maxWidth: '69%', maxHeight: '290px' }} />
                    <img className="img-row chosen-image" src={pic17} alt="...." onClick={() => { setBigPicture(pic17); }} style={{ maxWidth: '31%', maxHeight: '290px' }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '53%' }}>
                        <img src={pic19} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic19); }} />
                    </div>
                    <div className="column" style={{ width: '44%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic13} alt="...." onClick={() => { setBigPicture(pic13); }} style={{ maxHeight: '270px' }} />
                        <img className="chosen-image" src={pic14} alt="...." onClick={() => { setBigPicture(pic14); }} style={{ marginTop: '20px', maxHeight: '270px' }} />
                    </div>
                </div>

                <div className="row">
                    <img src={pic31} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic31); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic47} alt="...." onClick={() => { setBigPicture(pic47); }} style={{ maxWidth: '69%', maxHeight: '245px' }} />
                    <img className="img-row chosen-image" src={pic32} alt="...." onClick={() => { setBigPicture(pic32); }} style={{ maxWidth: '31%', maxHeight: '245px' }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '65%' }}>
                        <img src={pic23} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic23); }} />
                    </div>
                    <div className="column" style={{ width: '31.5%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic48} alt="...." onClick={() => { setBigPicture(pic48); }} style={{ maxHeight: '340px' }} />
                        <img className="chosen-image" src={pic49} alt="...." onClick={() => { setBigPicture(pic49); }} style={{ marginTop: '20px', maxHeight: '340px' }} />
                    </div>
                </div>

                <div className="row">
                    <img src={pic30} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic30); }} />
                </div>

            </div>

            <div className="porfolio-col column">

                <div className="row">
                    <div className="column" style={{ width: '69.5%' }}>
                        <img src={pic53} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic53); }} />
                    </div>
                    <div className="column" style={{ width: '27%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic51} alt="...." onClick={() => { setBigPicture(pic51); }} style={{ maxHeight: '312px' }} />
                        <img className="chosen-image" src={pic7} alt="...." onClick={() => { setBigPicture(pic7); }} style={{ marginTop: '20px', maxHeight: '300px' }} />
                    </div>
                </div>

                <div className="row">
                    <img src={pic44} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic44); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic37} alt="...." onClick={() => { setBigPicture(pic37); }} style={{ maxWidth: '46.5%', maxHeight: '250px' }} />
                    <img className="img-row chosen-image" src={pic38} alt="...." onClick={() => { setBigPicture(pic38); }} style={{ maxWidth: '46.5%', maxHeight: '250px' }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '69.5%' }}>
                        <img src={pic36} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic36); }} />
                    </div>
                    <div className="column" style={{ width: '27%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic39} alt="...." onClick={() => { setBigPicture(pic39); }} style={{ maxHeight: '270px' }} />
                        <img className="chosen-image" src={pic40} alt="...." onClick={() => { setBigPicture(pic40); }} style={{ marginTop: '20px', maxHeight: '270px' }} />
                    </div>
                </div>

                <div className="row">
                    <div className="column" style={{ width: '62%' }}>
                        <img src={pic43} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic43); }} />
                    </div>
                    <div className="column" style={{ width: '34%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic25} alt="...." onClick={() => { setBigPicture(pic25); }} style={{ maxHeight: '270px' }} />
                        <img className="chosen-image" src={pic27} alt="...." onClick={() => { setBigPicture(pic27); }} style={{ marginTop: '20px', maxHeight: '270px' }} />
                    </div>
                </div>

                <div className="row">
                    <img src={pic29} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic29); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic28} alt="...." onClick={() => { setBigPicture(pic28); }} style={{ maxWidth: '67%', maxHeight: '300px' }} />
                    <img className="img-row chosen-image" src={pic34} alt="...." onClick={() => { setBigPicture(pic34); }} style={{ maxWidth: '32%', maxHeight: '300px' }} />
                </div>

                <div className="row">
                    <img src={pic1} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic1); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic2} alt="...." onClick={() => { setBigPicture(pic2); }} style={{ maxWidth: '67%', maxHeight: '250px' }} />
                    <img className="img-row chosen-image" src={pic8} alt="...." onClick={() => { setBigPicture(pic8); }} style={{ maxWidth: '32%', maxHeight: '250px' }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '62%' }}>
                        <img src={pic9} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic9); }} />
                    </div>
                    <div className="column" style={{ width: '34%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic15} alt="...." onClick={() => { setBigPicture(pic15); }} style={{ maxHeight: '270px' }} />
                        <img className="chosen-image" src={pic16} alt="...." onClick={() => { setBigPicture(pic16); }} style={{ marginTop: '20px', maxHeight: '270px' }} />
                    </div>
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic3} alt="...." onClick={() => { setBigPicture(pic3); }} style={{ maxWidth: '69%', maxHeight: '290px' }} />
                    <img className="img-row chosen-image" src={pic58} alt="...." onClick={() => { setBigPicture(pic58); }} style={{ maxWidth: '31%', maxHeight: '290px' }} />
                </div>

                <div className="row">
                    <img src={pic6} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic6); }} />
                </div>

                <div className="row">
                    <img src={pic65} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic65); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic22} alt="...." onClick={() => { setBigPicture(pic22); }} style={{ maxWidth: '45%', maxHeight: '165px' }} />
                    <img className="img-row chosen-image" src={pic26} alt="...." onClick={() => { setBigPicture(pic26); }} style={{ maxWidth: '55%', maxHeight: '165px' }} />
                </div>

                <div className="row">
                    <img src={pic18} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic18); }} />
                </div>

                <div className="row">
                    <img src={pic35} className="chosen-image" id="expandedImg" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic35); }} />
                </div>

                <div className="row">
                    <img className="img-row chosen-image" src={pic56} alt="...." onClick={() => { setBigPicture(pic56); }} style={{ maxWidth: '30%', maxHeight: '240px' }} />
                    <img className="img-row chosen-image" src={pic57} alt="...." onClick={() => { setBigPicture(pic57); }} style={{ maxWidth: '70%', maxHeight: '240px' }} />
                </div>

                <div className="row">
                    <div className="column" style={{ width: '67.5%' }}>
                        <img src={pic60} className="chosen-image" id="expandedImg2" alt="..." style={{ width: "100%" }} onClick={() => { setBigPicture(pic60); }} />
                    </div>
                    <div className="column" style={{ width: '29%', marginLeft: '10px' }}>
                        <img className="chosen-image" src={pic46} alt="...." onClick={() => { setBigPicture(pic46); }} style={{ maxHeight: '260px' }} />
                        <img className="chosen-image" src={pic63} alt="...." onClick={() => { setBigPicture(pic63); }} style={{ marginTop: '20px', maxHeight: '260px' }} />
                    </div>
                </div>

            </div>

        </div>
    )
}




export default function PortfolioUkr(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="vid-row titles-div">
                <h2 className="_title">{translate('portfolio-1-text')}</h2>
            </div>
            <Images></Images>
        </div>
    )
}