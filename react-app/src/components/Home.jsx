import React from 'react';
import pictcher1 from '../pic/IMG_4108.jpg';
import pictcher2 from '../pic/IMG_52508.jpg';
import pictcher3 from '../pic/IMG_3245.jpg';


export default function Home(props) {

    return (
        <div className="HomeMain">
            <br />
            <div className="HomeFirst">
                <div style={{ width: '20%', marginLeft: '7%', marginTop: '250px' }}>
                    <p style={{ fontSize: 'x-large' }}>«Nothing is impossible» - our slogan in life and work. We realized that our dream is to create special things that provide an atmosphere of coziness and comfort.</p>
                </div>
                <div className="yellow-box-two"></div>
                <div className="img-one"></div>
                <text className="LYS" style={{ fontSize: '200px', fontFamily: 'Futara', color: 'rgba(128, 128, 128, 0.3)' }}>LYS</text>
            </div>
            <div className="HomeSecond">
                <div style={{ fontSize: 'xx-large', width: '100%', textAlign: 'center' }}>We learned a lot , experimented , improved on our own mistakes.</div>
                <br />
                <div className="img-family"></div>
                <div className="text2" style={{ fontSize: 'xx-large', width: '25%', textAlign: 'center', backgroundColor: 'rgb(255, 166, 0)', padding: '5%' }}>Today we can say for sure that there is nothing impossible! Thus was born the family furniture workshop &laquo;LYS&raquo; .</div>
                <div className="logo"></div>
                <div className="text3">
                    <p>Each of our products is unique and inimitable. We design and manufacture our own furniture that we do not find in any store.</p>
                </div>
            </div>
            <div className="HomeThird">
                <div className="row">
                    <div style={{ width: '35%', fontSize: 'x-large', marginTop: '15%', marginLeft: '10%' }}>Our goal is to make items that will take their place in the interior. Paying attention to all the details, we create furniture based on your taste and wishes.</div>
                    <div className="img-1"></div>
                </div>
                <div className="row">
                    <div className="img-2"></div>
                    <div style={{ backgroundColor: 'rgb(255, 166, 0)', fontSize: 'xxx-large', marginLeft: '55%', marginTop: '30%', zIndex: '4' }}>Handmade</div>
                </div>
                <div className="row">
                    <div style={{ width: '50%', color: 'white', zIndex: '4', fontSize: 'xx-large', marginLeft: '7%', marginTop: '10%' }}>
                        We perform and control all stages of production (from sketches and design to installation work) to save your time.</div>
                    <div style={{ width: '20%', marginLeft: '70%', fontSize: 'x-large', textAlign: 'center' }}>
                        When making furniture, we take into account their convenient and functional location in the room. This helps to plan the composition best for you.</div>
                </div>
                <br /><br />
                <div style={{ fontSize: 'xxx-large', textAlign: 'center' }}>Delivery and installation in all regions of Ukraine!</div>
                <div className="HomeFourth">
                    <br />
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ height: '670px' }}>
                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators" >
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={pictcher1} alt="pictcher1" style={{ width: '100%' }} />
                            </div>

                            <div className="item">
                                <img src={pictcher2} alt="pictcher2" style={{ width: '100%' }} />
                            </div>

                            <div className="item">
                                <img src={pictcher3} alt="pictcher3" style={{ width: '100%' }} />
                            </div>
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <br /><br />
                <div className="HomeLast" style={{ backgroundColor: 'rgb(255, 166, 0)', width: '100%' }}>
                    <div style={{ width: '40%', fontSize: 'large', marginTop: '1%', marginLeft: '2%' }}><p>Lviv<br />..........<br />........<br />+380 98 600 71 36</p></div>
                    <div className='logo2'></div>
                    <div style={{
                        width: '42%', paddingLeft: '30%',
                        paddingTop: '5% '
                    }}>
                        <a style={{ color: 'black' }} href="https://www.facebook.com/lys.furniture.ua"><i class="fab fa-facebook-f fa-2x"></i></a>
                        <a style={{ color: 'black', marginLeft: '10%' }} href="https://www.instagram.com/lys.furniture.ua/"><i class="fab fa-instagram fa-2x"></i></a>
                    </div>
                </div>
                <br />
            </div>
        </div >
    )
}