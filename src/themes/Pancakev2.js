import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import PancakeLP from '../components/PancakeLP/PancakeLP';
import Footer from '../components/Footer/Footer';
import Scrollup from '../components/Scrollup/Scrollup';

class Pancakev2 extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Pancake V2 Liquidity Pool" subpage="Locker" page = "Pancake V2 Locker" />
                <PancakeLP />
                <Footer />
                <Scrollup />
            </div>
        );
    }
}

export default Pancakev2;