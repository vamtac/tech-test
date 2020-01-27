import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import { combinationsReducer } from "../reducers/combinations"
import thunk, { ThunkMiddleware } from "redux-thunk"
import { AppActions } from "../types/actions";
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    combinations: combinationsReducer
});

export type AppState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)))


export default function configureStore(initialState:AppState) {
    return createStore(
        rootReducer,
        composeWithDevTools(
        applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
    );
}