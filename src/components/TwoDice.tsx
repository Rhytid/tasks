import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [Die1, setDie1] = useState<number>(1);
    const [Die2, setDie2] = useState<number>(3);
    function newDie1() {
        setDie1(d6);
    }
    function newDie2() {
        setDie2(d6);
    }
    return (
        <div>
            <div>
                Die1: <span data-testid="left-die">{Die1}</span>
                &nbsp; &nbsp; &nbsp; Die2:{" "}
                <span data-testid="right-die">{Die2}</span>
            </div>
            <div>
                <button
                    onClick={() => {
                        newDie1();
                    }}
                >
                    Roll Left
                </button>
                <button
                    onClick={() => {
                        newDie2();
                    }}
                >
                    Roll Right
                </button>
            </div>
            <div>{Die1 === Die2 && Die1 === 1 && <div>You Lose!</div>}</div>
            <div>{Die1 === Die2 && Die1 !== 1 && <div>You Win!</div>}</div>
        </div>
    );
}
