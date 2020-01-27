
import { Combination } from "../types/Combination";
import { AppActions } from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";
import uuid from "uuid";

export const addCombination = (combination: Combination): AppActions =>({
    type: "ADD_COMBINATION",
    combination
});

export const removeCombination = (id: string): AppActions =>({
    type: "REMOVE_COMBINATION",
    id
});

export const editCombination = (combination: Combination): AppActions =>({
    type: "EDIT_COMBINATION",
    combination
});

export const startAddCombination = (combinationData:{ pin:Array<string> }) => {
    return (dispatch: Dispatch<AppActions>, getState:() => AppState) => {
      const {
        pin = []
      } = combinationData;
      const combination = { pin };
      const name= "Name";
      const id = uuid();
  
      dispatch(
        addCombination({
          id,
          name,
          ...combination
        })
      );
    };
  };
  
  export const startRemoveCombination = (id: string) => {
    return (dispatch:Dispatch<AppActions>, getState:() => AppState) => {
      dispatch(removeCombination(id));
    };
  };
  
  export const startEditCombination = (combination: Combination) => {
    return (dispatch: Dispatch<AppActions>, getState:() => AppState) => {
      dispatch(editCombination(combination));
    };
  };