import { useReducer } from 'react';
import { Button } from 'Components/GlobalStyle.styled';
import { Count } from './Counter.styled';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`Error type ${action.type}`);
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <Count>{state.count}</Count>
      <Button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        -
      </Button>
      <Button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        +
      </Button>
    </div>
  );
};
