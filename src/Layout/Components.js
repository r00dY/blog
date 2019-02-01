import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

import { RangeMap } from "./Ranges";
import { Layout } from "./Layout";

// import { rangeMapToCSSWithLayout, rangeSetToCSS } from "./Ranges";
// import { Layout } from "./Layout";

// Container
// const Container = styled.div`
//     ${rangeSetToCSS(
//         ({ layoutParams }) =>
//             `width: ${layoutParams.css.container}; margin: 0 ${
//                 layoutParams.css.margin
//             };`
//     )}
// `;

const Container = styled.div`
    ${Layout.main.container.css("width")}
    margin: auto;
`;

// GridRow
let gridRowStyles = `
    display: flex;
    flex-wrap: wrap;
    ${Layout.main.gutter.multiply(-2).css("margin-left")}
    ${Layout.main.gutter.multiply(-2).css("margin-right")}
`;

// gridRowStyles += rangeSetToCSS(
//     ({ layoutParams }) => `
//      margin-left: calc(${layoutParams.css.gutter} / -2);
//      margin-right: calc(${layoutParams.css.gutter} / -2);
// `
// );

const GridRow = styled.div([gridRowStyles]);

const GridItem = function(props) {
    let gridParams = new RangeMap(props.gridParams);

    let style = `
        position: relative;
        width: 100%;
        min-height: 1px;
        ${Layout.main.gutter.divide(2).css("padding-left")}
        ${Layout.main.gutter.divide(2).css("padding-right")}
    `;

    style += gridParams.css(params => {
        params = Layout.normalizeGridItemParams(params);

        return `
        flex: 0 0 ${(params.cols / Layout.main.colNumber) * 100}%;
        max-width: ${(params.cols / Layout.main.colNumber) * 100}%;
        ${
            params.offset > 0
                ? `margin-left: ${(params.offset / Layout.main.colNumber) *
                      100}%;`
                : ""
        }
        ${params.order !== 0 ? `order: ${params.order};` : ""}
        ${params.cols === 0 ? "display: none;" : ""}
        ${props.__extraStyles}
    `;
    });

    const GridItem = styled.div([style]);

    return <GridItem>{props.children}</GridItem>;
};

GridItem.propTypes = {
    gridParams: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.object
    ]),
    __extraStyles: PropTypes.string
};

GridItem.defaultProps = {
    __extraStyles: ""
};

const Grid = function(props) {
    return (
        <Container>
            <GridRow>
                {props.items.map((item, i) => (
                    <GridItem
                        key={i}
                        gridParams={item.gridParams}
                        __extraStyles={item.__extraStyles}
                    >
                        {item.content}
                    </GridItem>
                ))}
            </GridRow>
        </Container>
    );
};

Grid.propTypes = {
    items: PropTypes.array
};

export { Container, Grid };
