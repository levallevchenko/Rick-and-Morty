import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ContentItem } from '../content-item/content-item';

export const Content: FC = () => {
  const { requestedCharacters, removedCharacters } = useSelector(
    (state) => state
  );

  const removedCardsName = removedCharacters.map((item) => item.name);

  const currentCharacters = requestedCharacters.filter(
    (item) => !removedCardsName.includes(item.name)
  );

  return (
    <section className="game__content content">
      <ul className="content__list">
        {/* {isBadSearch && <p>No results for this search</p>} */}
        {currentCharacters.map((character) => (
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
