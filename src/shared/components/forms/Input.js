import React, { useReducer } from 'react';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: true,
      };
    default:
      return state;
  }
};

const initialState = {
  value: '',
  isValid: false,
};

export const Input = (props) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const changeHandler = (event) => {
    // @ts-ignore
    dispatch({ type: 'CHANGE', value: event.target.value });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={state.value}
        onChange={changeHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={state.value}
        onChange={changeHandler}
      />
    );

  return (
    <div
      className={`form-control ${!state.isValid && 'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!state.isValid && <p>{props.errorText}</p>}
    </div>
  );
};
