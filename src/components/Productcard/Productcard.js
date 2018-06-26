import React, { Component } from 'react';
import './Productcard.css';

class Productcard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            mouseOut: false,
            available: this.props.available
        };

        this.toggleSelect = this.toggleSelect.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    toggleSelect() {
        if (!this.state.available) {
            return false;
        }
        this.setState({
            selected: !this.state.selected
        });
    }

    mouseEnter() {
        this.setState({
            mouseOut: false
        });
    }

    mouseOut() {
        if (this.state.selected) {
            this.setState({
                mouseOut: true
            });
        }
    }

    render() {
        let disabledText;
        let selectedText = 'Котэ не одобряет?';

        if (!this.state.available) {
            disabledText = <div>Печалька { this.props.flavour } закончился</div>;
        } else {
            disabledText = <div>Чего сидишь? Порадуй котэ, <button className="product-card__link" onClick={ this.toggleSelect }> купи</button></div>;
        }

        if (this.state.selected) {
            disabledText = <div>{ this.props.selectedtext }</div>
        } else {
            selectedText = this.props.series;
        }

        return (
            <div className="product-card" onMouseEnter={ this.mouseOut } onMouseLeave={ this.mouseEnter }>
                <div className={`product-card__content ` + (this.state.selected ? `is-selected` : ``) + (this.state.available ? `` : `is-disabled`)} onClick={ this.toggleSelect }>
                    <p className="product-card__subhead">
                        { (this.state.mouseOut ? selectedText : this.props.series) }
                    </p>
                    <h2 className="product-card__title">{ this.props.title }</h2>
                    <p className="product-card__flavor">{ this.props.flavour }</p>
                    <div className="product-card__list">
                        <ul className="product-list">
                            { this.props.listitems.map((item, i) => (
                                <li className="product-list__item" key={ i }>{ item }</li>
                            )) }
                        </ul>
                    </div>
                    <div className="product-card__weight">
                        <span className="product-card__weight-num">{ this.props.weight }</span>
                        <span className="product-card__weight-type">{ this.props.weighttype }</span>
                    </div>
                </div>
                <div className="product-card__extra-text">
                    { disabledText }
                </div>
            </div>
        )
    }
}

export default Productcard;