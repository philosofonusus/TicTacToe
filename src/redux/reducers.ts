import {PUT_O, PUT_X, SWITCH_TO_X, SWITCH_TO_O, DRAW, WINNER_O, WINNER_X} from './actions'
import { combineReducers } from "redux";

export type PLAYER = 'X' | 'O'

const defaultTurnState: PLAYER = 'X'
const defaultFieldState: string[] = ['', '', '', '', '', '', '', '', '']

const fieldReducer =
    <T extends { type: string, payload: any }>
    (state: string[] = defaultFieldState, action: T): string[] => {
    const temp = state.slice()
    switch (action.type){
        case PUT_O:
            temp[action.payload.coordinate] = 'O'
            return temp
        case PUT_X:
            temp[action.payload.coordinate] = 'X'
            return temp
        default:
            return [...state]
    }
}

const turnReducer =
    <T extends { type: string }>
    (state: PLAYER = defaultTurnState, action: T): PLAYER => {
    switch (action.type){
        case SWITCH_TO_X:
            return 'X'
        case SWITCH_TO_O:
            return 'O'
        default:
            return state
    }
}

const gameEndReducer =
    <T extends { type: string}>(state: PLAYER | 'D' | null = null, action: T) => {
        switch (action.type){
            case DRAW:
                return "D"
            case WINNER_O:
                return "O"
            case WINNER_X:
                return "X"
            default:
                return state
        }
    }


export const rootReducer = combineReducers({field: fieldReducer, turn: turnReducer, endGame: gameEndReducer})