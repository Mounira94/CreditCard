import React, { Component } from 'react';
import Capture from './images/Capture.PNG';



class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <body>
                <main className="main">
                    <div className="card">
                        <div className="card-name">
                            <h1 className="name">CREDIT CARD</h1>
                        </div>
                        <div className="card-detail">
                            <div className="card-detail-desc">
                                <img className="code-img" src={Capture} />
                                <p className="code-card">1256 2358 2654 23654</p>
                                <div className="validity-card">
                                    <p className="code-validity">5422</p>
                                    <div className="validity">
                                        <div className="validity-thru">
                                            <div className="text-validity-thru">
                                                <span className="text-validity">VALID</span>
                                                <span className="text-validity">THRU</span>
                                            </div>
                                            <i className="fas fa-caret-right"></i>
                                        </div>
                                        <div className="validity-desc">
                                            <div>
                                                <span className="text-validity">MONTH/</span>
                                                <span className="text-validity">YEAR</span>
                                            </div>
                                            <p className="card-detail-type">11/05</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="holder-text">CARDHOLDER</p>
                            </div>
                            <div className="visa-img">
                                <img className="card-img" src="http://buy.posportal.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/101200_1_9E9C5F0F-2AEB-1F79-7428-1CFE949B92BC_1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        )
    }
}

export default Main;