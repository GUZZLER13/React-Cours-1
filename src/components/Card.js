import React from 'react';

const Card = (props) => {
    console.log(props.country);
    return (
        <li className='card'>
            <img src={props.country.flags.svg} alt={"drapeau " + props.country.translations.fra.common} />
            <div className="infos">
                <h2>{props.country.translations.fra.common}</h2>
                <h4>{props.country.capital}</h4>
                <p>Pop. {props.country.population.toLocaleString()}</p>

                <p>{props.country.area.toLocaleString()} km2</p>
            </div>
        </li>
    );
};

export default Card;