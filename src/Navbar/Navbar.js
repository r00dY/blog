import styled from 'styled-components';
import Colors from "../../config/colors.config";
import { Container } from "../Layout/Components";
import { menuHeight } from "../../config/spacings.config";

const Navbar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    ${menuHeight.css('height')}
    background-color: ${Colors.superlightgrey};
`;

const Logo = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
`;

export default () => <Navbar>

    <Container style={{height: "100%"}}>
        <Logo>
            swiper-modules
        </Logo>
    </Container>

</Navbar>