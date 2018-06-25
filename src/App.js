import React, { Component } from 'react';
import Productgrid from './components/Productgrid/Productgrid';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="section">
                    <div className="section__inner">
                        <h1 className="section__head">Ты сегодня покормил кота?</h1>
                        <Productgrid/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;