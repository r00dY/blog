import { stylesToCSS } from "./ResponsiveStyles";

class Font {
    constructor(styles) {
        this._styles = styles;
    }

    get css() {
        return stylesToCSS(this._styles);
    }
}

export default Font;
