import * as React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [colors] = useState<string[]>([
        "Red",
        "Blue",
        "Green",
        "Orange",
        "White",
        "Black",
        "Purple",
        "Teal",
    ]);
    const [chosen, setChosen] = useState<string>(colors[0]);
    function updateChosen(newColor: string) {
        setChosen(newColor);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="colorcheck"
                        onChange={() => {
                            updateChosen(color);
                        }}
                        id={`color-check-${color}`}
                        label={color}
                        value={color}
                        checked={chosen === color}
                        style={{
                            width: "150px",
                            height: "50px",
                            backgroundColor: color,
                        }}
                    />
                ))}
            </div>
            <Form.Group controlId="colored-box">
                <Form.Label>
                    You have chosen{" "}
                    {
                        <span>
                            <div
                                data-testid={"colored-box"}
                                style={{
                                    width: "150px",
                                    height: "50px",
                                    backgroundColor: chosen,
                                }}
                            >
                                {chosen}
                            </div>
                        </span>
                    }
                </Form.Label>
            </Form.Group>
        </div>
    );
}
