import { rs, rssv } from "../src/Layout/ResponsiveStyles";

const layout = {
    container: rs({
        xs: rssv("100vw").subtract(40),
        sm: rssv("100vw").subtract(80),
        md: "90vw",
        lg: "80vw",
        xl: 1400
    }),
    colNumber: 24,
    gutter: rs({
        xs: 10,
        sm: 20,
        md: 30,
        lg: 40,
        xl: 50
    })
};
export { layout };
