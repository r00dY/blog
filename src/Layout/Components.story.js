import React from "react";
import { storiesOf } from "@storybook/react";
import { Container, Grid } from "./Components";
import styled from "styled-components";
import { Layout } from "./Layout";

const HalfGutterLine = styled.div([
    `
    position: absolute;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: lightgrey;
    ${Layout.main.gutter.divide(-2).css("left")}
`
]);

storiesOf("Layout Components", module, module).add("Container", () => (
    <div style={{ margin: "24px 0" }}>
        <Container>
            <div style={{ border: "1px solid red" }}>
                {[...Array(20)].map((e, i) => {
                    return (
                        <span key={i}>
                            {i}
                            <br />
                        </span>
                    );
                })}
            </div>
        </Container>
    </div>
));

storiesOf("Layout Components", module).add("Grid", () => (
    <div style={{ margin: "24px 0" }}>
        <Grid
            items={[
                {
                    gridParams: {
                        xs: 12,
                        md: 12,
                        lg: 12
                    },
                    content: (
                        <div>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "100%",
                                    height: "320px"
                                }}
                            />
                        </div>
                    )
                },
                {
                    gridParams: {
                        xs: 12,
                        md: 12,
                        lg: 10
                    },
                    content: (
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    backgroundColor: "magenta",
                                    width: "100%",
                                    height: "320px"
                                }}
                            />
                            <HalfGutterLine />
                        </div>
                    )
                },
                {
                    gridParams: {
                        xs: 24,
                        md: 12,
                        lg: [6, 0, 2]
                    },
                    content: (
                        <div
                            style={{
                                backgroundColor: "blue",
                                width: "100%",
                                height: "320px"
                            }}
                        />
                    )
                },
                {
                    gridParams: {
                        xs: 24,
                        md: 12,
                        lg: [12, 6, 1]
                    },
                    content: (
                        <div
                            style={{
                                backgroundColor: "green",
                                width: "100%",
                                height: "320px"
                            }}
                        />
                    )
                }
            ]}
        />
    </div>
));
