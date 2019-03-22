import React from 'react';
import Character from './Character';

const StarWars = (props) => {
    return (
        <div className="characters">
            {props.starwarsChars.map(char => {
                return (
                    <Character 
                    name={char.name}
                    height={char.height}
                    mass={char.mass}
                    hair_color={char.hair_color}
                    skin_color={char.skin_color}
                    eye_color={char.eye_color}
                    birth_year={char.birth_year}
                    gender={char.gender}
                    homeworld={char.homeworld}
                    films={char.films}
                    species={char.species}
                    vehicles={char.vehicles}
                    starships={char.starships}
                    created={char.created}
                    edited={char.edited}
                    url={char.url}
                    />
                )
            })}
        </div>
    );
};

export default StarWars;