export const Check = (grid: string[]): string => {
    const X: number[] = []
    const O: number[] = []

    // gain ids from grid
    grid.forEach((el, idx) => {
        if(el === 'X') X.push(idx)
        if(el === 'O') O.push(idx)
    })

    // check for winning combinations 3 x 3
    const checkWinner = (ids: number[]) => {
        const str = ids.join("")
        const regex = /0.?1.?2|3.?4.?5|6.?7.?8|0.?3.?6|1.?4.?7|2.?5.?8|0.?4.?8|2.?4.?6/g
        console.log(str)
        return regex.test(str)
    }
    console.log(grid.indexOf('') < 0)
    if(checkWinner(X)) return 'X'
    if(checkWinner(O)) return 'O'
    if(grid.indexOf('') < 0) return 'D'

    return ''
}