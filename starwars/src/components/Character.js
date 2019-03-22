import React from 'react';

const Character = (props) => {
    return (
        <div className="character">
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Home World: {props.homeworld}</p>
            <p>Films: {props.films}</p>
            <p>Species: {props.species}</p>
            <p>Vehicles: {props.vehicles}</p>
            <p>Starships: {props.starships}</p>
            <p>Created: {props.created}</p>
            <p>Edited: {props.edited}</p>
            <p>Url: {props.url}</p>      
        </div>
    )
}

export default Character;