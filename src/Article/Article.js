import styled from 'styled-components';
import { Container } from "../Layout/Components";

const Root = styled.div`
    & > * {
        position: relative;
        max-width: 720px;
        width: 100%;
    }
`;

const Article = (props) => <Container>
    <Root>
        { props.children }
    </Root>
</Container>;

export default Article;