//COS
import Font from "../src/Layout/Font";
import { rslin } from "../src/Layout/ResponsiveStyles";

const FONT_GILL = `"GillSansMTPro", Arial, "Helvetica Neue", Helvetica, sans-serif`;
const FONT_FAKT = `"FaktProMedium", Arial, "Helvetica Neue", Helvetica, sans-serif`;

//NIKE
const FONT_NIKE = `"Nike TG", Arial, "Helvetica Neue", Helvetica, sans-serif`;
const FONT_HELVETICA = `"Helvetica", Arial, "Helvetica Neue", Helvetica, sans-serif`;
const FONT_FUTURA = `"Nike Futura", Arial, "Helvetica Neue", Helvetica, sans-serif`;

const COS = {
    heading1: new Font({
        fontSize: rslin(16, 16),
        fontFamily: FONT_GILL,
        lineHeight: 1.2,
        fontWeight: 500,
        textTransform: "uppercase"
    }),
    text1: new Font({
        fontSize: rslin(15, 15),
        fontFamily: FONT_GILL,
        lineHeight: 1.1,
        fontWeight: 500
    }),
    text2: new Font({
        fontSize: rslin(13, 13),
        fontFamily: FONT_GILL,
        lineHeight: 1.5,
        fontWeight: 500
    }),
    text3: new Font({
        fontSize: rslin(12, 13),
        fontFamily: FONT_GILL,
        lineHeight: 1.8,
        fontWeight: 500
    }),
    label1: new Font({
        fontSize: rslin(15, 15),
        fontFamily: FONT_FAKT,
        lineHeight: 1.1,
        fontWeight: 500,
        textTransform: "uppercase"
    }),
    label2: new Font({
        fontSize: rslin(10, 10),
        fontFamily: FONT_GILL,
        lineHeight: 1.1,
        fontWeight: 500,
        textTransform: "uppercase"
    }),
    editorial1: new Font({
        fontSize: rslin(40, 80),
        fontFamily: FONT_FAKT,
        lineHeight: 1.1,
        fontWeight: 500
    }),
    editorial2: new Font({
        fontSize: rslin(20, 24),
        fontFamily: FONT_FAKT,
        lineHeight: 1.5,
        fontWeight: 500
    }),
    editorial3: new Font({
        fontSize: rslin(15, 15),
        fontFamily: FONT_FAKT,
        lineHeight: 1.5,
        fontWeight: 500
    })
};

const NIKE = {
    heading1: new Font({
        fontSize: rslin(70, 80),
        fontFamily: FONT_FUTURA,
        lineHeight: 0.85,
        fontWeight: 400,
        textTransform: "uppercase"
    }),
    heading2: new Font({
        fontSize: rslin(24, 26),
        fontFamily: FONT_NIKE,
        lineHeight: 1.1,
        fontWeight: 400
    }),
    heading3: new Font({
        fontSize: rslin(24, 30),
        fontFamily: FONT_HELVETICA,
        lineHeight: 1.4,
        fontWeight: 400
    }),
    heading4: new Font({
        fontSize: rslin(18, 18),
        fontFamily: FONT_NIKE,
        lineHeight: 1.1,
        fontWeight: 400,
        textTransform: "uppercase"
    }),
    text1: new Font({
        fontSize: rslin(18, 18),
        fontFamily: FONT_HELVETICA,
        lineHeight: 1.5,
        fontWeight: 400
    }),
    text2: new Font({
        fontSize: rslin(16, 16),
        fontFamily: FONT_HELVETICA,
        lineHeight: 1.5,
        fontWeight: 400
    }),
    text3: new Font({
        fontSize: rslin(14, 14),
        fontFamily: FONT_HELVETICA,
        lineHeight: 1.5,
        fontWeight: 400
    })
};

const fonts = {
    COS: COS,
    NIKE: NIKE
};

export default fonts;
