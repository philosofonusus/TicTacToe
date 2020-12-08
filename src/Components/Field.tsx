import * as React from 'react'
import { X_turn, O_turn, putX, putO } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Field = <T extends { coordinate: number }>(props: T) => {
    const turn = useSelector((state: any) => state.turn)
    const grid = useSelector((state: any) => state.field)
    const border = () => {
        return props.coordinate === 1 || props.coordinate === 7 ? 'bl br'
            : props.coordinate === 3 || props.coordinate === 5  ? 'bt bb'
                : props.coordinate === 4 ? "bb bt br bl" : ""
    }
    const dispatch = useDispatch()

    const put = (e: any) => {
        e.preventDefault()
        if (!grid[props.coordinate]) {
            if (turn === "X") {
                dispatch(putX(props.coordinate))
                dispatch(O_turn())
            } else if (turn === "O") {
                dispatch(putO(props.coordinate))
                dispatch(X_turn())
            }
        }
    }

    return (
        <div className={`grid__field ${border()}`} onClick={put}>
            <h1>{grid[props.coordinate]}</h1>
        </div>
    )
};

export default Field