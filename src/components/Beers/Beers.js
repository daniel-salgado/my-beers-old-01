import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Beer from './Beer/Beer';
import './Beers.css';


const beers = (props) => {

    const listItems = props.listOfBeers.map((beer) =>
        <div className="Beers">
            <Beer
                name={beer.name}
                brewedBy={beer.brewedBy}
                style={beer.style}
                description={beer.description}
                image={beer.image}
            />
        </div>
    );

    return (
        <Auxiliary>
            {listItems}
        </Auxiliary>
    );

};

export default beers;
