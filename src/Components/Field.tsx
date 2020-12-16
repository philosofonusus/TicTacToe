import * as React from 'react'
import { X_turn, O_turn, putX, putO } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";

const Field =  <T extends { coordinate: number }>(props: T): JSX.Element => {
    const turn = useSelector((state: RootState) => state.turn)
    const grid = useSelector((state: RootState) => state.field)
    const dispatch = useDispatch()

    const border = () => {
        return props.coordinate === 1 || props.coordinate === 7 ? 'bl br'
            : props.coordinate === 3 || props.coordinate === 5  ? 'bt bb'
                : props.coordinate === 4 ? "bb bt br bl" : ""
    }

    const put = (e: React.MouseEvent<HTMLDivElement>) => {
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
            {
                grid[props.coordinate]
                ? <h1 className="appear">{grid[props.coordinate]}</h1>
                : <h1> </h1>
            }
        </div>
    )
};

export default Field