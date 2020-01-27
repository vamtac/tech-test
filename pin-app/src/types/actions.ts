import {Combination} from "./Combination"

export const ADD_COMBINATION = "ADD_COMBINATION"
export const EDIT_COMBINATION = "EDIT_COMBINATION"
export const REMOVE_COMBINATION = "REMOVE_COMBINATION"

export interface AddCombinationAction {
    type: typeof ADD_COMBINATION;
    combination: Combination;
}

export interface EditCombinationAccion {
    type: typeof EDIT_COMBINATION;
    combination: Combination;
}

export interface RemoveCombinationAccion {
    type: typeof REMOVE_COMBINATION;
    id: string;
}

export type CombinationActionTypes = AddCombinationAction | EditCombinationAccion | RemoveCombinationAccion

export type AppActions = CombinationActionTypes