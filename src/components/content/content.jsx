import React from 'react';
import {useSelector} from 'react-redux';
import ContentItem from '../content-item/content-item';

function Content () {
  const {requestedCharacters} = useSelector((state) => state);

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
