import React from 'react';
import PropTypes from 'prop-types';
import {characterPropTypes} from '../../prop-types/character';

function PartyItem ({partyCharacter, partyCharacterBlockName}) {

  return (
    <li className="party__item game__item">
      {partyCharacter &&
      <img className="party__img game__img" src={partyCharacter.image} alt={partyCharacter.name} />}
      <p className="party__name">{partyCharacterBlockName}</p>
    </li>
  );
}

PartyItem.propTypes = {
  partyCharacterBlockName: PropTypes.string.isRequired,
  partyCharacter: characterPropTypes,
};

export default PartyItem;
