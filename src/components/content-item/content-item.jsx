import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from '../../store/action';


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

    // console.log(previousCharacterName, currentCharacterName, partyCharactersArray);

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
        // console.log(1, partyCharactersArray);
        dispatch(ActionCreator.setPartyCharacters(partyCharactersArray));
        // console.log(2, partyCharacters);
        return;
      }

      dispatch(ActionCreator.setPartyCharacters(partyCharactersArray));
    }
  };

  // const partyCharactersNameArray = partyCharactersArray[0] &&
  //   // (!isCharacterIncludeName)
  //   partyCharactersArray.map((character => character.name.split(' '))).flat();


  // const nameIndex = partyCharactersNameArray[0].includes(currentCharacterNameArray[0]) ||
  //                   partyCharactersNameArray[1].includes(currentCharacterNameArray[1]);

  // console.log(partyCharactersNameArray);

  // const characterCardClickHandler = (evt) => {
  //   const currentCharacterNameArray = character.name.split(' ');
  //   console.log(currentCharacterNameArray);
  // };

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

export default ContentItem;
