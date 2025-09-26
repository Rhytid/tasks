import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);
    function addAttempt(): void {
        setAttempt(attempts + 1);
    }
    function StartQuiz(): void {
        setAttempt(attempts - 1);
        setActive(true);
    }
    function StopQuiz(): void {
        setActive(false);
    }
    return (
        <div>
            <div>
                <button
                    disabled={active || attempts <= 0}
                    onClick={() => {
                        StartQuiz();
                    }}
                >
                    Start Quiz
                </button>
            </div>
            <div>
                <button
                    disabled={active}
                    onClick={() => {
                        addAttempt();
                    }}
                >
                    Mulligan
                </button>
            </div>
            <div>
                <div>
                    <button
                        disabled={!active}
                        onClick={() => {
                            StopQuiz();
                        }}
                    >
                        Stop Quiz
                    </button>
                </div>
            </div>
            <div>
                Attempts: <span>{attempts}</span>
            </div>
        </div>
    );
}
