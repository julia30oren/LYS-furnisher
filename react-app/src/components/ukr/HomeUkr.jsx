import React from 'react';
import pictcher1 from '../../pic/IMG_4108.jpg';
import pictcher2 from '../../pic/IMG_52508.jpg';
import pictcher3 from '../../pic/IMG_3245.jpg';
import openingVid from '../../videos/fox_welcome_vid2.mp4';


export default function Home(props) {

    return (
        <div className="HomeMain">
            <video autoPlay loop muted className="openingVid" >
                <source src={openingVid} type="video/mp4" />
            </video>
            <br />
            <div className="HomeFirst">
                <div style={{ width: '20%', marginLeft: '7%', marginTop: '250px' }}>
                    <p style={{ fontSize: 'large' }}>«Неможливого не існує» – наш девіз у житті і в роботі. Ми, дизайнери інтер’єру за освітою, в 2012 році зрозуміли, що наше покликання - створювати атмосферу затишку та гармонії,  наповнюючи простір своїми предметами меблів.</p>
                </div>
                <div className="yellow-box-two"></div>
                <div className="img-one"></div>
                <text className="LYS" style={{ fontSize: '200px', fontFamily: 'Futara', color: 'rgba(128, 128, 128, 0.3)' }}>LYS</text>
            </div>
            <div className="HomeSecond">
                <div style={{ fontSize: 'xx-large', width: '100%', textAlign: 'center' }}>Ми багато вчились, експериментували, вдосконалювались на власних помилках.</div>
                <br />
                <div className="img-family"></div>
                <div className="text2" style={{ fontSize: 'xx-large', width: '25%', textAlign: 'center', backgroundColor: 'rgb(255, 166, 0)', padding: '5%' }}>Сьогодні ми можемо точно сказати, що немає нічого неможливого! Так народилася сімейна меблева майстерня &laquo;LYS&raquo; .</div>
                <div className="logo"></div>
                <div className="text3">
                    <p>Кожна наша продукція унікальна та неповторна. Ми розробляємо та виготовляємо власні меблі, яких ми не знаходимо в жодному магазині.</p>
                </div>
            </div>
            <div className="HomeThird">
                <div className="row">
                    <div style={{ width: '35%', fontSize: 'x-large', marginTop: '15%', marginLeft: '10%' }}>Наша мета - зробити предмети, які займуть своє місце в інтер’єрі. Звертаючи увагу на всі деталі, ми створюємо меблі на основі вашого смаку та побажань.</div>
                    <div className="img-1"></div>
                </div>
                <div className="row">
                    <div className="img-2"></div>
                    <div style={{ backgroundColor: 'rgb(255, 166, 0)', fontSize: 'xx-large', marginLeft: '55%', marginTop: '30%', zIndex: '4' }}>Ручноа робота</div>
                </div>
                <div className="row">
                    <div style={{ width: '50%', color: 'white', zIndex: '4', fontSize: 'xx-large', marginLeft: '7%', marginTop: '10%' }}>
                        Ми виконуємо та контролюємо всі етапи виробництва (від ескізів та дизайну до монтажних робіт), щоб заощадити ваш час.
                        </div>
                    <div style={{ width: '20%', marginLeft: '70%', fontSize: 'x-large', textAlign: 'center' }}>
                        Виготовляючи меблі, ми враховуємо їх зручне та функціональне розташування в кімнаті. Це допомагає найкраще спланувати композицію.                        </div>
                </div>
                <br /><br />
                <div style={{ fontSize: 'xxx-large', textAlign: 'center' }}>Доставка та монтаж у <mark style={{ color: 'rgb(255, 166, 0)', backgroundColor: 'white' }}>всі</mark> регіони України!</div>
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
                <br />
            </div>
        </div >
    )
}