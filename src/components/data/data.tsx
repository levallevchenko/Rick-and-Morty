import React, { FC, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { AppState } from '../../store/app/app';
import { getCharacters } from '../../store/api-actions';
import { capitalizeFirstLetter } from '../../utils';
import { Characters, ICharacter} from '../../types/character';

// Hooks
import { useCharacters } from '../../character/hooks/useCharacter';

export const Data: FC = () => {
  const { getCharacters, loading, error, characters } = useCharacters();
  // const { characters, requestedCharacters, queryName } = useSelector(
  //   (state: AppState) => state
  // );
  const { queryName } = useSelector((state: AppState) => state);

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  // const getData = () => {
  //   // const nameForSearch = queryName === null ? queryName : queryName.toLowerCase();

  //   // const GET_URL = `https://rickandmortyapi.com/api/character/?name=${nameForSearch}`;
  //   // dispatch(getCharacters(GET_URL));

  //   getCharacters();
  //   console.log(characters)

  //   // const filteredCharacters: Characters = characters.filter((item) =>
  //   //   queryName && item.name.includes(queryName));

  //   // dispatch(ActionCreator.setRequestedCharacters(filteredCharacters));
  // };

  const formChangeHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const currentSearchValue = inputRef.current && inputRef.current.value;

    const correctSearchValue = capitalizeFirstLetter(currentSearchValue);
    dispatch(ActionCreator.setSearchValue(correctSearchValue));

    if (currentSearchValue && currentSearchValue.length >= 2) {
      // getData();
      getCharacters();
      console.log(characters);
    }

    if (!characters) {
      dispatch(ActionCreator.setBadSearch(true));
    }

    dispatch(ActionCreator.setQueryName(correctSearchValue));
  };

  const formSubmitHandler = (evt: FormEvent) => evt.preventDefault();

  return (
    <section className="game__data data">
      <form
        onChange={formChangeHandler}
        onSubmit={formSubmitHandler}
        className="data__form"
        action="#"
        method="post"
      >
        <input
          ref={inputRef}
          className="data__input"
          type="text"
          placeholder="Enter name of character"
        />
      </form>
      {characters && characters.results.map((character: ICharacter) => {
        return <img src={character.image} />
      })}
    </section>
  );
};
