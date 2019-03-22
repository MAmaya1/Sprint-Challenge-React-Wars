import React from 'react';
import Character from './Character';

// Render individual character elements into characters list

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
                    />
                )
            })}
        </div>
    );
};

export default StarWars;