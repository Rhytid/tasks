import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import logo from "./Images/Current_Novel.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Alex Sohn
            </header>

            <Container>
                <Row>
                    <Col>
                        <h2>Hello World</h2>
                        Favorite Fruits
                        <ul>
                            <li>Apples</li>
                            <li>Oranges</li>
                            <li>strawberries</li>
                        </ul>
                        <div
                            id="rectangle"
                            style={{
                                width: 200,
                                height: 500,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <img
                            src={logo}
                            width="50"
                            height="100"
                            alt="The current book I'm reading"
                        />
                        <div
                            id="rectangle"
                            style={{
                                width: 200,
                                height: 500,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
