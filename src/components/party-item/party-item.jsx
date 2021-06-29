import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


function PartyItem ({partyCharacter, partyCharacterBlockName, ch}) {
  console.log(partyCharacter);

  return (
    <li className="party__item game__item">
      {partyCharacter &&
      partyCharacter.name.includes(partyCharacterBlockName) &&
      <img className="party__img game__img" src={partyCharacter.image} alt={partyCharacter.name} />}
    </li>
  );
}

export default PartyItem;
