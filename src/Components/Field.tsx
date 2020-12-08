import * as React from 'react'
import { X_turn, O_turn, putX, putO } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";

const Field = <T extends { coordinate: number }>(props: T) => {
    const turn = useSelector((state: any) => state.turn)
    const grid = useSelector((state: any) => state.field)
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    const put = (e: any) => {
        e.preventDefault()
        if (!grid[props.coordinate]) {
            console.log(grid)
            if (turn === "X") {
                dispatch(putX(props.coordinate))
                setContent(turn)
                dispatch(O_turn())
            } else if (turn === "O") {
                dispatch(putO(props.coordinate))
                setContent(turn)
                dispatch(X_turn())
            }
        } else {
            console.log(`field ${props.coordinate} is not empty`)
        }
    }

    return (
        <div className="grid__field" onClick={put}>
            <h1>{content}</h1>
        </div>
    )
};

export default Field