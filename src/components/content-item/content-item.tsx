// Core
import React, {
  FC,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../../store/action';

// Types
import { AppState } from '../../store/app/app';
import { ICharacter, Characters } from '../../types/character';

type Props = {
  characters: Characters;
  character: ICharacter;
};

export const ContentItem: FC<Props> = ({characters, character}) => {
  const { partyCharacters, removedCharacters } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const removedCharacterArray: Characters = removedCharacters.slice();

  const removeButtonClickHandler = () => {
    const newCharacters: Characters = characters.filter((item: ICharacter) => item !== character);
    removedCharacterArray.push(character);
    dispatch(ActionCreator.setCharacters(newCharacters));
    dispatch(ActionCreator.setRemovedCharacters(removedCharacterArray));
  };

  const characterCardClickHandler = (evt: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => {
    const partyCharactersArray: Characters = partyCharacters.slice();
    const currentCharacterName = character.name
      .split(' ')
      .filter((name: ICharacter['name']) => name === 'Rick' || name === 'Morty')
      .toString();

    const previousCharacterName = partyCharactersArray[0]
      ? partyCharactersArray[partyCharactersArray.length - 1].name.split(' ')
      : null;

    const isNameDuplicate = previousCharacterName
    && previousCharacterName.includes(currentCharacterName);

    const element = evt.target as HTMLElement;
    if (element.tagName === 'IMG' || element.tagName === 'LI') {
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

  const characterCardKeypressHandler = (evt: KeyboardEvent<HTMLLIElement>) => {
    if (evt.key === 'Enter') {
      characterCardClickHandler(evt);
    }
  };

  const tabIndex = 0;

  return (
    <li
      onClick={characterCardClickHandler}
      onKeyPress={characterCardKeypressHandler}
      className="content__item game__item"
      tabIndex={tabIndex}
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
