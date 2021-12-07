import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Auctions from '../components/Auctions/AuctionsOne';
// import Collections from '../components/Collections/Collections';
// import Explore from '../components/Explore/ExploreOne';
import Work from '../components/Work/Work';
import TokenLock from '../components/TokenLock/TokenLock';
import Footer from '../components/Footer/Footer';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class ThemeOne extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Auctions />
                {/* <Collections />
                <Explore /> */}
                <TokenLock />
                <Work />
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ThemeOne;