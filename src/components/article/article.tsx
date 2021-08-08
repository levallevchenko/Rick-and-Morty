import React from 'react';
import Data from '../data/data';
import Content from '../content/content';
import Party from '../party/party';

function Article() {
  return (
    <article className="game">
      <Data />
      <Content />
      <Party />
    </article>
  );
}

export default Article;
