import React, { Component } from 'react';
import './Productgrid.css';
import Productcard from '../Productcard/Productcard';

class Productgrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        fetch('./data/data.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.products
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <div>Ошибка: { error.message }</div>
            );
        } else if (!isLoaded) {
            return (
                <div>Загрузка...</div>
            );
        } else {
            return (
                <div className="product-card-grid">
                    { items.map((item) => (
                            <Productcard
                                key={ item.id }
                                series={ item.series }
                                title={ item.title }
                                flavour={ item.flavour }
                                weight={ item.weight }
                                weighttype={ item.weight_type }
                                listitems={ item.list }
                                selectedtext={ item.is_selected_extra_text }
                                available={ item.is_available }
                            />
                    )) }
                </div>
            )
        }
    }
}

export default Productgrid;