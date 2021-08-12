import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/app/app';
import { ICharacter, Characters} from '../../types/character';
import { ContentItem } from '../content-item/content-item';

export const Content: FC = () => {
  // OR  const { requestedCharacters, removedCharacters } = useSelector<AppState>((state) => state);
  const { requestedCharacters, removedCharacters } = useSelector(
    (state: AppState) => state
  );

  const removedCardsName = removedCharacters.map((item: ICharacter) => item.name);

  const currentCharacters: Characters = requestedCharacters.filter(
    (item: ICharacter) => !removedCardsName.includes(item.name)
  );

  console.log(currentCharacters)

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
