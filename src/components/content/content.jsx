import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCharacters} from '../../store/api-actions';
import ContentItem from '../content-item/content-item';

function Content () {
  const {characters, queryName} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const requestedCharacters = characters.filter((item) => item.name.includes(queryName));

  return (
    <section className="game__content content">
      <ul className="content__list">
        {requestedCharacters.map((character) => <ContentItem key={character.id} characters={characters} character={character} />)}
      </ul>
    </section>

  );
}

export default Content;
