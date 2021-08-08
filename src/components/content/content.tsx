import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/app/app';
import { ICharacter} from '../../types/character';
import { ContentItem } from '../content-item/content-item';

export const Content: FC = () => {
  const { requestedCharacters, removedCharacters } = useSelector(
    (state: AppState) => state
  );

  const removedCardsName = removedCharacters.map((item: ICharacter) => item.name);

  const currentCharacters: Array<ICharacter> = requestedCharacters.filter(
    (item: ICharacter) => !removedCardsName.includes(item.name)
  );

  return (
    <section className="game__content content">
      <ul className="content__list">
        {/* {isBadSearch && <p>No results for this search</p>} */}
        {currentCharacters.map((character: ICharacter): ReactElement => (
          <ContentItem
            key={character.id}
            characters={currentCharacters}
            character={character}
          />
        ))}
      </ul>
    </section>
  );
};
