import React from 'react';

// Construct character element

const Character = (props) => {
    return (
        <div className="character-card">
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>   
        </div>
    )
}

export default Character;