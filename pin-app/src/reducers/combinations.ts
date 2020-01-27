import { Combination } from "../types/Combination";
import { CombinationActionTypes } from "../types/actions";

const combinationsReducerDefaultState:Combination[] = [];

const combinationsReducer = (state = combinationsReducerDefaultState, action: CombinationActionTypes): Combination[] => {
  switch (action.type) {
    case "ADD_COMBINATION":
      let pinAlreadyStored = state.findIndex(el => el.pin == action.combination.pin);
      if(pinAlreadyStored == -1)
        return [...state, action.combination];
      return state
    case "REMOVE_COMBINATION":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_COMBINATION":
      return state.map(combination => {
        if (combination.id === action.combination.id) {
          return {
            ...combination,
            ...action.combination
          };
        } else {
          return combination;
        }
      });
    default:
      return state;
  }
};

export {combinationsReducer}