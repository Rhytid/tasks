import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    let types: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question",
    ];

    const [Qtype, changeType] = useState<QuestionType>(types[0]);
    function setType(): void {
        if (Qtype === "short_answer_question") {
            changeType(types[1]);
        } else {
            changeType(types[0]);
        }
    }

    return (
        <div>
            <Button onClick={setType}>Change Type</Button>
            {Qtype === "short_answer_question" && <div>Short Answer</div>}
            {Qtype === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}
