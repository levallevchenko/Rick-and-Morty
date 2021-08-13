import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { AppState } from '../../store/app/app';
import { ContentItem } from '../content-item/content-item';

// Types
import { Characters, ICharacter} from '../../types/character';
import {appearingData} from '../../types/basic';

// Hooks
import { useCharacters } from '../../character/hooks/useCharacter';

export const Content: FC = () => {
  // const { getCharacters, loading, error, characters } = useCharacters();
  const { characters, removedCharacters, isBadSearch } = useSelector(
    (state: AppState) => state
  );

  // const removedCardsName = removedCharacters.map((item: ICharacter) => item.name);

  // const currentCharacters: Characters = requestedCharacters.filter(
  //   (item: ICharacter) => !removedCardsName.includes(item.name)
  // );

  return (
    <section className="game__content content">
      <ul className="content__list">
        {isBadSearch && <p>No results for this search</p>}
        {characters && characters.map((character: ICharacter): ReactElement => (
          <ContentItem
            key={character.id}
            characters={characters}
            character={character}
          />
        ))}
      </ul>
    </section>
  );
};
