import React, { useState, useEffect } from 'react';
import BeerItem from './BeerItem';

const BeerList = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(json => setBeers(json))
    }, [])

    console.log(beers);

    return (
        <section className="grid">
            {beers.map(elt =>
                <BeerItem
                    key={elt._id}
                    _id={elt._id}
                    name={elt.name}
                    tagline={elt.tagline}
                    image_url={elt.image_url}
                    beers={beers}
                />

            )}
        </section>
    );
}

export default BeerList;