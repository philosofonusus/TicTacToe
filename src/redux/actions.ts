export const PUT_O = 'PUT_O'
export const PUT_X = 'PUT_X'
export const SWITCH_TO_X = 'SWITCH_TO_X'
export const RESET = "RESET"
export const SWITCH_TO_O = 'SWITCH_TO_O'
export const DRAW = "DRAW"
export const WINNER_O = "WINNER_O"
export const WINNER_X = "WINNER_X"


interface Player_Put {
    type: string,
    payload: { coordinate: number }
}

export const putO = (coordinate: number) => {
    const obj: Player_Put = {
        type: PUT_O,
        payload: { coordinate }
    }
    return obj
}
export const putX = (coordinate: number) => {
    const obj: Player_Put = {
        type: PUT_X,
        payload: { coordinate }
    }
    return obj
}


export const X_turn = () => {
    return {
        type: SWITCH_TO_X
    }
}
export const O_turn = () => {
    return {
        type: SWITCH_TO_O
    }
}


export const setWinnerO = () => {
    return{
        type: WINNER_O
    }
}
export const setWinnerX = () => {
    return{
        type: WINNER_X
    }
}
export const setDraw = () => {
    return{
        type: DRAW
    }
}

export const gameReset = () => {
    return{
        type: RESET
    }
}