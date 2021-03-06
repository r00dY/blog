import styled from 'styled-components';
import { rslin } from "../Layout/ResponsiveStyles";

import Spacings, { menuHeight } from "../../config/spacings.config";

const Root = styled.div`
    ${menuHeight.add(rslin(Spacings.m6, Spacings.d7)).css('margin-top')}
    ${rslin(Spacings.m6, Spacings.d7).css('margin-bottom')}
`;

const Page = (props) => <Root style={{height: "100%"}}>
    { props.children }
</Root>;

export default Page;