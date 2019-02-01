import Test from '../src/Test/Test';
import styled from "styled-components";

import { Container } from "../src/Layout/Components";

const Header = styled.h1`
    color: red;
`;

function Index() {
    return (
        <Container>
            <Header>Welcome to next.js!</Header>
            <Test />
        </Container>
    );
}

export default Index;