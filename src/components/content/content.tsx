import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/app/app';
import { ICharacter, Characters} from '../../types/character';
import { ContentItem } from '../content-item/content-item';

// Hooks
import { useCharacters } from '../../character/hooks/useCharacter';

export const Content: FC = () => {
  const { getCharacters, loading, error, characters } = useCharacters();
  // OR  const { requestedCharacters, removedCharacters } = useSelector<AppState>((state) => state);
  // const { requestedCharacters, removedCharacters } = useSelector(
  //   (state: AppState) => state
  // );

  // const removedCardsName = removedCharacters.map((item: ICharacter) => item.name);

  // const currentCharacters: Characters = requestedCharacters.filter(
  //   (item: ICharacter) => !removedCardsName.includes(item.name)
  // );

  return (
    <section className="game__content content">
      <ul className="content__list">
        {/* {isBadSearch && <p>No results for this search</p>} */}
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
