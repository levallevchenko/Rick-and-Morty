// Core
import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

// Components
import { ContentItem } from '../content-item/content-item';
import { Error } from '../error/error';

// Types
import { AppState } from '../../store/app/app';
import { Characters, ICharacter } from '../../types/character';

export const Content: FC = () => {
  const {
    characters, removedCharacters, isBadSearch, errorData, isLoading,
  } = useSelector(
    (state: AppState) => state,
  );

  const removedCardsName = removedCharacters.map((item: ICharacter) => item.name);

  const currentCharacters: Characters = characters && characters.filter((item: ICharacter) => !removedCardsName.includes(item.name));

  return (
    <section className="game__content content">
      <ul className="content__list">
        {isLoading && <h3>Loading..</h3>}
        {isBadSearch && <h3>No results for this search</h3>}
        {isBadSearch && <Error errorData={errorData} />}
        {currentCharacters
          && currentCharacters.map(
            (character: ICharacter): ReactElement => (
              <ContentItem key={character.id} characters={characters} character={character} />
            ),
          )}
      </ul>
    </section>
  );
};
