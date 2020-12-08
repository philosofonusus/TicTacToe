export const Check = (grid: string[]): string => {
    const X: number[] = []
    const O: number[] = []
    let turn: boolean = false
    let result: string = ''

    // gain ids from grid
    grid.forEach((el, idx) => {
        if(!el) turn = true
        if(el === 'X') X.push(idx)
        if(el === 'O') O.push(idx)
    })

    // check for winning combinations
    const checkWinner = (ids: number[]) => {
        const str = ids.join("")
        const regex = /012|345|678|036|147|258|048|246/
        return regex.test(str)
    }

    if(checkWinner(X)) result = 'X'
    if(checkWinner(O)) result = 'O'
    if(!turn) return 'D'

    return result
}