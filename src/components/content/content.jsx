import React from 'react';
import {useSelector} from 'react-redux';
import ContentItem from '../content-item/content-item';

function Content () {
  const {requestedCharacters, removedCharacters} = useSelector((state) => state);

  // const mixedCards = [...requestedCharacters, ...removedCharacters];

  // const currentCharacters = [...new Set(mixedCards)];

  return (
    <section className="game__content content">
      <ul className="content__list">
        {/* {isBadSearch && <p>No results for this search</p>} */}
        {requestedCharacters.map((character) => <ContentItem key={character.id} characters={requestedCharacters} character={character} />)}
      </ul>
    </section>

  );
}

export default Content;
