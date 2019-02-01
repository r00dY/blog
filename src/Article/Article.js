import styled from 'styled-components';
import { Container } from "../Layout/Components";

const Root = styled.div`
    & > * {
        max-width: 600px;
    }
`;

const Article = (props) => <Container>
    <Root>
        { props.children }
    </Root>
</Container>;

export default Article;