export const Check = (grid: string[]): string => {
    const X: number[] = []
    const O: number[] = []

    // gain ids from grid
    grid.forEach((el, idx) => {
        if(el === 'X') X.push(idx)
        if(el === 'O') O.push(idx)
    })

    // check for winning combinations
    const checkWinner = (ids: number[]) => {
        const str = ids.join("")
        const regex = /012|345|678|036|147|258|048|246|0248/g
        console.log(str)
        return regex.test(str)
    }
    console.log(grid.indexOf('') < 0)
    if(checkWinner(X)) return 'X'
    if(checkWinner(O)) return 'O'
    if(grid.indexOf('') < 0) return 'D'

    return ''
}