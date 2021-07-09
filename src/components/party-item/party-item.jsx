import React from 'react';

function PartyItem ({partyCharacter, partyCharacterBlockName}) {

  return (
    <li className="party__item game__item">
      {partyCharacter &&
      // partyCharacter.name.includes(partyCharacterBlockName) &&
      <img className="party__img game__img" src={partyCharacter.image} alt={partyCharacter.name} />}
      <p className="party__name">{partyCharacterBlockName}</p>
    </li>
  );
}

export default PartyItem;
