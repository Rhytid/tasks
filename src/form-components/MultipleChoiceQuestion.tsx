import * as React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>("");
    function changeChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Answers">
                <Form.Label>Answers</Form.Label>
                <Form.Select value={choice} onChange={changeChoice}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            {choice === expectedAnswer && <span>✔️</span>}
            {choice != expectedAnswer && <span>❌</span>}
        </div>
    );
}
