import React, { Component } from 'react';

const initData = {
    pre_heading: "Liquidities",
    heading: "Recent LP tokens",
    btnText: "View All"
}

const data = [
    {
        id: "1",
        pair: "ETH - WETH",
        liquidity: "250",
        lock_time: "2021-10-12",
        unit: "K",
        img: "./img/Ethereum_Classic-Logo.wine.png",
        date: "2021-12-09",
    },
    {
        id: "2",
        pair: "ETH - USDT",
        liquidity: "250",
        lock_time: "2021-10-12",
        unit: "K",
        img: "./img/Ethereum_Classic-Logo.wine.png",
        date: "2021-10-05",
    },
    {
        id: "3",
        pair: "ETH - USDC",
        liquidity: "250",
        lock_time: "2021-10-12",
        unit: "M",
        img: "./img/Ethereum_Classic-Logo.wine.png",
        date: "2021-09-15",
    },
    {
        id: "4",
        pair: "BNB - $Thanos",
        liquidity: "250",
        lock_time: "2021-10-12",
        unit: "M",
        img: "/img/Binance-Icon-Logo.wine.png",
        date: "2021-12-29",
    }
]

class AuctionsOne extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="live-auctions-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/uniswapv2">{this.state.initData.btnText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`auc_${idx}`} className="swiper-slide item">
                                            <div className="card">
                                                <div className="image-over">
                                                    <a href="/item-details">
                                                        <img className="card-img-top" src={item.img} alt="" />
                                                    </a>
                                                </div>
                                                {/* Card Caption */}
                                                <div className="card-caption col-12 p-0">
                                                    {/* Card Body */}
                                                    <div className="card-body">
                                                        <a href="/item-details">
                                                            <h5 className="mb-0">{item.pair}</h5>
                                                        </a>
                                                        <br />
                                                        <div className="card-bottom d-flex justify-content-between">
                                                            <span>Liquidity: ${item.liquidity}{item.unit}</span>
                                                        </div>
                                                        <div className="card-bottom d-flex justify-content-between">
                                                            <span>{item.lock_time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AuctionsOne;