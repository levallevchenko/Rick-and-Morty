import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {characterPropTypes} from '../../prop-types/character';


function ContentItem ({characters, character}) {
  const {partyCharacters, removedCharacters} = useSelector((state) => state);
  const dispatch = useDispatch();

  const removedCharacterArray = removedCharacters.slice();

  const removeButtonClickHandler = () => {
    const newCharacters = characters.filter((item) => item !== character);
    removedCharacterArray.push(character);
    dispatch(ActionCreator.setRequestedCharacters(newCharacters));
    dispatch(ActionCreator.setRemovedCharacters(removedCharacterArray));
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

    if (evt.target.tagName === 'IMG' || evt.target.tagName === 'LI') {
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

  const characterCardKeypressHandler = (evt) => {
    if (evt.key === 'Enter') {
      characterCardClickHandler(evt);
    }
  };

  return (
    <li onClick={characterCardClickHandler} onKeyPress={characterCardKeypressHandler} className="content__item game__item" tabIndex="0">
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
