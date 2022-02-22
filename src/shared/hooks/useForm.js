import { useCallback, useEffect, useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialValidity, callback) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity,
  });

  const inputHandler = useCallback(
    (id, value, isValid) => {
      // @ts-ignore
      dispatch({
        type: 'INPUT_CHANGE',
        inputId: id,
        value: value,
        isValid: isValid,
      });
    },
    [dispatch]
  );

  const setFormData = useCallback(
    (newState) => {
      // @ts-ignore
      dispatch({
        type: 'SET_FORM_DATA',
        newState: newState,
      });
    },
    [dispatch]
  );

  const clearForm = useCallback(() => {
    // @ts-ignore
    dispatch({
      type: 'CLEAR_FORM',
    });
  }, [dispatch]);

  useEffect(() => {
    if (callback) {
      callback();
    }
  }, [callback, setFormData, clearForm]);

  return [formState, inputHandler, setFormData, clearForm];
};
