import Home from '../eng/Home';
import AboutUs from '../eng/AboutUs';
import Portfolio from '../eng/Portfolio';
import Creation from '../eng/Creation';
import Painting from '../eng/Painting';
import Contacts from '../eng/Contacts';

import HomeUkr from '../ukr/HomeUkr';
import AboutUsUkr from '../ukr/AboutUsUkr';
import PortfolioUkr from '../ukr/PortfolioUkr';
import CreationUkr from '../ukr/CreationUkr';
import PaintingUkr from '../ukr/PaintingUkr';
import ContactsUkr from '../ukr/ContactsUkr';

export const routes = [
    { key: 0, path: "/", component: HomeUkr },

    { key: 1, isVisible: 'eng', title: ' Home ', path: "/eng", component: Home },
    { key: 2, isVisible: 'eng', title: ' About us ', path: "/eng/about", component: AboutUs },
    { key: 3, isVisible: 'eng', title: ' Portfolio ', path: "/eng/portfolio", component: Portfolio },
    { key: 4, isVisible: 'eng', title: ' Creation ', path: "/eng/creation", component: Creation },
    { key: 5, isVisible: 'eng', title: ' Painting ', path: "/eng/paintng", component: Painting },
    { key: 6, isVisible: 'eng', title: ' Contacts ', path: "/eng/contacts", component: Contacts },

    { key: 7, isVisible: 'ukr', title: ' Home ', path: "/ukr", component: HomeUkr },
    { key: 8, isVisible: 'ukr', title: ' About us ', path: "/ukr/about", component: AboutUsUkr },
    { key: 9, isVisible: 'ukr', title: ' Portfolio ', path: "/ukr/portfolio", component: PortfolioUkr },
    { key: 10, isVisible: 'ukr', title: ' Creation ', path: "/ukr/creation", component: CreationUkr },
    { key: 11, isVisible: 'ukr', title: ' Painting ', path: "/ukr/paintng", component: PaintingUkr },
    { key: 12, isVisible: 'ukr', title: ' Contacts ', path: "/ukr/contacts", component: ContactsUkr },
]
