import * as React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function changeEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function changeStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-on"
                    label=""
                    checked={edit}
                    onChange={changeEdit}
                />
            </div>

            <div>
                {edit && (
                    <>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="student_check"
                                label="Are you a student?"
                                checked={isStudent}
                                onChange={changeStudent}
                            />
                        </div>
                        <div>
                            <Form.Group controlId="StudentName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={changeName}
                                    disabled={!edit}
                                />
                            </Form.Group>
                        </div>
                    </>
                )}
            </div>
            <div>
                {isStudent && <span>{name} is a student</span>}
                {!isStudent && <span>{name} is not a student</span>}
            </div>
        </div>
    );
}
