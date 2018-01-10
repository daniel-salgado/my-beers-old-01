import React, { Component } from 'react';
import Beers from '../../components/Beers/Beers';
import classes from './BeerRating.css'

class BeerRating extends Component {

    state = {
        listOfBeers: [
            { name: 'Amstel', brewedBy: 'Amstel Brewery', style: 'American-Style Lager', description: 'No description available', image: 'http://www.dbexportbeer.co.nz/DBExport/media/DB-Export/Our%20Beer/Export%20Gold/export-gold-bottle.png' },
            { name: 'Han Shot First', brewedBy: 'Evil Genius Beer Company', style: 'Imperial or Double India Pale Ale', description: 'No description available', image: null },
            { name: 'Hellion', brewedBy: 'Gigantic Brewing Company', style: 'Other Belgian-Style Ales', description: 'No description available', image: null },
            { name: 'Iron Maiden Trooper', brewedBy: 'Robinsons Brewery', style: 'Classic English-Style Pale Ale', description: 'No description available', image: null },
            { name: '666 Aged Ale', brewedBy: 'Diamond Knot Brewery & Alehouse', style: 'Wood- and Barrel-Aged Beer', description: 'No description available', image: null },
        ],
    }

    render() {

        return (
            <div className={classes.BeerRating}>
                <Beers
                    listOfBeers={this.state.listOfBeers} />
            </div>
        );

    };

};

export default BeerRating;