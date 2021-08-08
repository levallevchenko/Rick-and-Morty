import React, { FC, MouseEvent, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { AppState } from '../../store/app/app';
import { ICharacter } from '../../types/character';

// type Props = {
//   characters: Array<ICharacter>;
//   character
// };

// type HTMLElementEvent<T extends HTMLElement> = Event & {
//   target: T;
// }

export const ContentItem: FC = ({ characters, character }) => {
  const { partyCharacters, removedCharacters } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const removedCharacterArray = removedCharacters.slice();

  const removeButtonClickHandler = () => {
    const newCharacters = characters.filter((item: ICharacter) => item !== character);
    removedCharacterArray.push(character);
    dispatch(ActionCreator.setRequestedCharacters(newCharacters));
    dispatch(ActionCreator.setRemovedCharacters(removedCharacterArray));
  };

  const characterCardClickHandler = (evt: MouseEvent<HTMLImageElement | HTMLLIElement>) => {
    const partyCharactersArray = partyCharacters.slice();
    const currentCharacterName = character.name
      .split(' ')
      .filter((name: ICharacter['name']) => name === 'Rick' || name === 'Morty')
      .toString();

    const previousCharacterName = partyCharactersArray[0]
      ? partyCharactersArray[partyCharactersArray.length - 1].name.split(' ')
      : null;

    const isNameDuplicate =
      previousCharacterName &&
      previousCharacterName.includes(currentCharacterName);

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

  const characterCardKeypressHandler= (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      characterCardClickHandler(evt);
    }
  };

  return (
    <li
      onClick={characterCardClickHandler}
      onKeyPress={characterCardKeypressHandler}
      className="content__item game__item"
      tabIndex="0"
    >
      <button
        onClick={removeButtonClickHandler}
        className="content__close-button"
      />
      <img
        className="content__img game__img"
        src={character.image}
        alt={character.name}
      />
    </li>
  );
};
