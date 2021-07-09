import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {capitalizeFirstLetter} from '../../utils';

function Data () {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const formChangeHandler = (evt) => {
    evt.preventDefault();

    const searchValue = inputRef.current.value;
    const correctSearchValue = capitalizeFirstLetter(searchValue);

    if (searchValue.length > 2) {
      dispatch(ActionCreator.setQueryName(correctSearchValue));
    }
  };

  const formSubmitHandler = (evt) => evt.preventDefault();

  return (
    <section className="game__data data">
      <form onChange={formChangeHandler} onSubmit={formSubmitHandler} className="data__form" action="#" method="post">
        <input ref={inputRef} className="data__input" type="text" placeholder="Enter name of character" />
      </form>
    </section>
  );
}

export default Data;
