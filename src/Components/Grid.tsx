import * as React from 'react'
import Field from "./Field";
import { Check } from "../Check";
import { useDispatch, useSelector } from "react-redux";
import { setWinnerO, setWinnerX, setDraw } from "../redux/actions";
import { useEffect } from "react";
import { RootState } from '../redux/reducers'

const Grid:React.FC = () => {
    const grid = useSelector((state: RootState) => state.field)
    const dispatch = useDispatch()
    const check = Check(grid)

    useEffect(() => {
        switch (check) {
            case 'D':
                dispatch(setDraw())
                break
            case 'X':
                dispatch(setWinnerX())
                break
            case 'O':
                dispatch(setWinnerO())
                break
            default:
                console.log('NO WINNER')
        }
    }, [grid])

    return (
        <div className="grid">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(el => {
                return <Field key={el} coordinate={el} />
            })}
        </div>
    )
}
export default Grid