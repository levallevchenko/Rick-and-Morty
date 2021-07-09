import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {characterPropTypes} from '../../prop-types/character';


function ContentItem ({characters, character}) {
  const {partyCharacters} = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeButtonClickHandler = () => {
    const newCharacters = characters.filter((item) => item !== character);
    dispatch(ActionCreator.setCharacters(newCharacters));
  };

  const characterCardClickHandler = (evt) => {
    const partyCharactersArray = partyCharacters.slice();
    const currentCharacterName = character.name.split(' ').filter((name) =>
      name === 'Rick' ||
      name === 'Morty').toString();

    const previousCharacterName = partyCharactersArray[0] ?
      partyCharactersArray[partyCharactersArray.length - 1].name.split(' ') :
      null;

    const isNameDuplicate = previousCharacterName &&
      (previousCharacterName.includes(currentCharacterName));

    if (evt.target.tagName === 'IMG') {
      partyCharactersArray.push(character);

      if (isNameDuplicate) {
        partyCharactersArray.splice(partyCharactersArray.length - 2, 1);
        dispatch(ActionCreator.setPartyCharacters(partyCharactersArray));
        return;
      }

      if (partyCharactersArray.length > 2) {
        partyCharactersArray.splice(0, 1);
        dispatch(ActionCreator.setPartyCharacters(partyCharactersArray));
        return;
      }

      dispatch(ActionCreator.setPartyCharacters(partyCharactersArray));
    }
  };

  return (
    <li onClick={characterCardClickHandler} className="content__item game__item">
      <button
        onClick={removeButtonClickHandler}
        className="content__close-button"
      />
      <img className="content__img game__img" src={character.image} alt={character.name} />
    </li>
  );
}

ContentItem.propTypes = {
  characters: PropTypes.arrayOf(characterPropTypes).isRequired,
  character: characterPropTypes,
};

export default ContentItem;
