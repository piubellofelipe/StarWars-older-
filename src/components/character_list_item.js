import React from 'react'

const characterListItem = ({character, onCharacterSelect}) => {
    console.log("oii");
    return( <l1 onClick = { () => onCharacterSelect(character)}>
                <div>
                    {character.name}
                </div>
            </l1>
    );
};

export default characterListItem;