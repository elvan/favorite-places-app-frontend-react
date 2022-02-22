import React, { useReducer } from 'react';
import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const initialState = {
  value: '',
  isValid: false,
  isTouched: false,
};

export const Input = (props) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const changeHandler = (event) => {
    // @ts-ignore
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    // @ts-ignore
    dispatch({
      type: 'TOUCH',
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={state.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={state.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    );

  return (
    <div
      className={`form-control ${
        state.isTouched && !state.isValid && 'form-control--invalid'
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {state.isTouched && !state.isValid && <p>{props.errorText}</p>}
    </div>
  );
};
