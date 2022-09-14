// Core
import { FC, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreator } from '../../store/action';

// Utils
import { capitalizeFirstLetter } from '../../utils';

// Types
import { AppState } from '../../store/app/app';
import { appearingData } from '../../types/basic';

// Hooks
import { useCharacters } from '../../character/hooks/useCharacter';

export const Data: FC = () => {
  const {
    getCharacters, loading, error, characters,
  } = useCharacters();
  const { queryName } = useSelector((state: AppState) => state);

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const getData = () => {
    const nameForSearch: appearingData<string> = queryName && queryName.toLowerCase();

    return getCharacters({
      variables: {
        filter: {
          name: nameForSearch,
        },
      },
    });
  };

  const formChangeHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const currentSearchValue = inputRef.current && inputRef.current.value;

    const correctSearchValue = capitalizeFirstLetter(currentSearchValue);
    dispatch(ActionCreator.setSearchValue(correctSearchValue));

    if (currentSearchValue && currentSearchValue.length >= 2) {
      getData();
      dispatch(ActionCreator.setCharacters(characters));
    }

    error
      && dispatch(ActionCreator.setBadSearch(true))
      && dispatch(ActionCreator.setErrorData(error.message));
    !error && dispatch(ActionCreator.setBadSearch(false));

    loading && dispatch(ActionCreator.setLoading(true));
    !loading && dispatch(ActionCreator.setLoading(false));

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
