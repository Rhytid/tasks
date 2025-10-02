import * as React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, updateLeft] = useState<number>(3);
    const [attemptsReq, updateReq] = useState<string>("");
    const attemptsIn = parseInt(attemptsReq) || 0;

    function changeLeft() {
        updateLeft(attemptsLeft - 1);
    }

    function changeReq() {
        updateLeft(attemptsIn + attemptsLeft);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="AttemptsReqBox">
                <Form.Label>Attempts Requesting:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        updateReq(event.target.value);
                    }}
                />
            </Form.Group>

            <span>Attempts left: {attemptsLeft}</span>
            <Button
                onClick={() => {
                    changeLeft();
                }}
                disabled={attemptsLeft <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    changeReq();
                }}
            >
                gain
            </Button>
        </div>
    );
}
