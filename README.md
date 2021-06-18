# `useReducer` WITH FINITE STATE MACHINE

```tsx
/* eslint jsx-a11y/anchor-is-valid: 1 */
import React, { useReducer } from "react";
import type { FC, Reducer } from "react";

enum FiniteStatesEnum {
  yellow = "yellow",
  red = "red",
  green = "green",
}

enum ReducerEventEnum {
  TOGGLE_FRONT = "TOGGLE_FRONT",
  TOGGLE_BACK = "TOGGLE_BACK",
}

// U OVOM SLUCAJU MACHINE JE OBICAN OBJEKAT
// NE KORISTIM NIKAKV FRAMEWORK ZA STATE MACHINE
const machine = {
  initial: FiniteStatesEnum.yellow,

  states: {
    [FiniteStatesEnum.yellow]: {
      on: {
        [ReducerEventEnum.TOGGLE_FRONT]: FiniteStatesEnum.green,
        [ReducerEventEnum.TOGGLE_BACK]: FiniteStatesEnum.red,
      },
    },
    [FiniteStatesEnum.green]: {
      on: {
        [ReducerEventEnum.TOGGLE_BACK]: FiniteStatesEnum.yellow,
        // OVO SAM SAMO URADIO ZBOG TYPESCRIPTA
        // MOGAO SAM I DA OMMIT-UJEM
        [ReducerEventEnum.TOGGLE_FRONT]: FiniteStatesEnum.green,
      },
    },
    [FiniteStatesEnum.red]: {
      on: {
        [ReducerEventEnum.TOGGLE_FRONT]: FiniteStatesEnum.yellow,
        // OVO SAM SAMO URADIO ZBOG TYPESCRIPTA
        // MOGAO SAM I DA OMMIT-UJEM
        [ReducerEventEnum.TOGGLE_BACK]: FiniteStatesEnum.red,
      },
    },
  },
};

const reducer: Reducer<FiniteStatesEnum, ReducerEventEnum> = (state, event) => {
  const nextState = machine.states[state].on[event] || state;

  return nextState;
};

const MachineWithReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, FiniteStatesEnum.yellow);

  return (
    <>
      <div id="red">{state === FiniteStatesEnum.red && "red"}</div>
      <div id="yellow">{state === FiniteStatesEnum.yellow && "yellow"}</div>
      <div id="green">{state === FiniteStatesEnum.green && "green"}</div>
      <div className="coontrols">
        <button onClick={() => dispatch(ReducerEventEnum.TOGGLE_BACK)}>
          Back
        </button>
        <button onClick={() => dispatch(ReducerEventEnum.TOGGLE_FRONT)}>
          Forth
        </button>
      </div>
    </>
  );
};

export default MachineWithReducer;
```
