import React, { useState } from "react";
import { Button } from "react-bootstrap";

{
    /*function ShoveBoxButton({position,setPosition,}: {position: number;setPosition: (newPosition: number) => void;}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
    }

function MoveableBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}
*/
}
export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    const box = (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
    function changePosition() {
        setPosition(4 + position);
    }
    return (
        <div>
            <span>The box is at: {position}</span>
            <div>
                <Button
                    onClick={() => {
                        changePosition();
                    }}
                >
                    Shove the Box
                </Button>
                {box}
            </div>
        </div>
    );
}
