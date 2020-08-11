
import Home from '../paiges/Home';
import AboutUs from '../paiges/AboutUs';
import Portfolio from '../paiges/Portfolio';
import Creation from '../paiges/Creation';
import Coating from '../paiges/Coating';
import Contacts from '../paiges/Contacts';

import translate from '../../translation/do-translate';


export const routes = [
    { key: 1, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('home-nuv'), path: "/", component: Home },
    { key: 2, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('about-nuv'), path: "/about", component: AboutUs },
    { key: 3, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('creation-nuv'), path: "/creation", component: Creation },
    { key: 4, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('painting-nuv'), path: "/coating", component: Coating },
    { key: 5, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('portfolio-nuv'), path: "/portfolio", component: Portfolio },
    { key: 6, isVisible: true, arroweIcon: "fas fa-angle-double-right", title: translate('contacts-nuv'), path: "/contacts", component: Contacts },
]
