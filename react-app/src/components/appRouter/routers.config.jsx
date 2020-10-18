import Home from '../paiges/Home/Home';
import AboutUs from '../paiges/AboutUs/AboutUs';
import Creation from '../paiges/Creation/Creation';
import Coating from '../paiges/Coating/Coating';
import Portfolio from '../paiges/Portfolio/Portfolio';
import Contacts from '../paiges/Contacts/Contacts';

import translate from '../../translation/do-translate';

export const routes = [
    { key: 1, className: 'wood-1 nav-title', title: translate('home-nuv'), path: "/", component: Home },
    { key: 2, className: 'wood-2 nav-title', title: translate('about-nuv'), path: "/about", component: AboutUs },
    { key: 3, className: 'wood-3 nav-title', title: translate('creation-nuv'), path: "/creation", component: Creation },
    { key: 4, className: 'wood-4 nav-title', title: translate('painting-nuv'), path: "/coating", component: Coating },
    { key: 5, className: 'wood-5 nav-title', title: translate('portfolio-nuv'), path: "/portfolio", component: Portfolio },
    { key: 6, className: 'wood-6 nav-title', title: translate('contacts-nuv'), path: "/contacts", component: Contacts },
]
