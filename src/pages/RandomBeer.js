import arrow from './../assets/img/arrow.png'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(json => setRandomBeer(json))
    }, [])


    return (
        <article className="detailBeer">
            <div>
                <img src={randomBeer.image_url} alt="" />
            </div>
            <h1>{randomBeer.name}</h1>
            <h4>{randomBeer.tagline}</h4>
            <div className="greyDetails">
                <div>First brewed:</div>
                <div>{randomBeer.first_brewed}</div>
            </div>
            <div className="greyDetails">
                <div>Attenuation level:</div>
                <div>{randomBeer.attenuation_level}</div>
            </div>
            <p>{randomBeer.description}</p>
            <Link className="button" to="/home"><img src={arrow} /></Link>

        </article>
    );
}

export default RandomBeer;