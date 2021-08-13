import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/app/app';
import { ContentItem } from '../content-item/content-item';

// Types
import { Characters, ICharacter} from '../../types/character';

export const Content: FC = () => {
  const { characters, removedCharacters, isBadSearch } = useSelector(
    (state: AppState) => state
  );

  const removedCardsName = removedCharacters.map((item: ICharacter) => item.name);

  const currentCharacters: Characters = characters && characters.filter(
    (item: ICharacter) => !removedCardsName.includes(item.name)
  );

  return (
    <section className="game__content content">
      <ul className="content__list">
        {isBadSearch && <p>No results for this search</p>}
        {currentCharacters && currentCharacters.map((character: ICharacter): ReactElement => (
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
