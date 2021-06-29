import React, {useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';

function Data () {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const formChangeHandler = (evt) => {
    evt.preventDefault();

    if (evt.target.value.length > 2) {
      // console.log(evt.target.value);
      dispatch(ActionCreator.setQueryName(inputRef.current.value));
    }
  };

  return (
    <section className="game__data data">
      <form onChange={formChangeHandler} className="data__form" action="#" method="post">
        <input ref={inputRef} className="data__input" type="text" placeholder="Rick" />
      </form>
    </section>
  );
}

export default Data;
