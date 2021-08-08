import React, { FC, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { AppState } from '../../store/app/app';
import { getCharacters } from '../../store/api-actions';
import { capitalizeFirstLetter } from '../../utils';
import { ICharacter } from '../../types/character';

export const Data: FC = () => {
  const { characters, requestedCharacters, queryName } = useSelector(
    (state: AppState) => state
  );
  const dispatch = useDispatch();
  const inputRef = useRef();

  const getData = () => {
    const nameForSearch = queryName.toLowerCase();
    const GET_URL = `https://rickandmortyapi.com/api/character/?name=${nameForSearch}`;
    dispatch(getCharacters(GET_URL));

    const filteredCharacters: Array<ICharacter> = characters.filter((item: ICharacter) =>
      item.name.includes(queryName)
    );
    dispatch(ActionCreator.setRequestedCharacters(filteredCharacters));
  };

  const formChangeHandler = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const currentSearchValue = inputRef.current.value;
    const correctSearchValue = capitalizeFirstLetter(currentSearchValue);
    dispatch(ActionCreator.setSearchValue(correctSearchValue));

    if (currentSearchValue.length >= 2) {
      getData();
    }

    if (requestedCharacters.length === 0) {
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
    </section>
  );
};