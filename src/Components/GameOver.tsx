import * as React from 'react'

const GameOver = <T extends { result: string }>(props: T): JSX.Element => (
        <div className="gameOver">
            {props.result}
        </div>
    )

export default GameOver