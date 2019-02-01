// import Defaults from "./Defaults";
// import { ResponsiveSize } from "./ResponsiveStyles";
// import { rangeSetToCSS } from "./Ranges";
import { rs } from "./ResponsiveStyles";
import { layout } from "../../config/layout.config";

// document.addEventListener("DOMContentLoaded", function(event) {
//     document.documentElement.style.setProperty('--viewport-width', '500px');
//     console.log(document.body.clientWidth, window.innerWidth);
// });

// function parseStringToNumber(string) {
//     string = string.trim();
//
//     if (string.slice(-2) === "px") {
//         return parseInt(string);
//     } else if (string.slice(-1) === "%") {
//         return (parseInt(string) / 100) * document.body.clientWidth;
//     } else {
//         throw `Wrong value '${string}' in LayoutVariables`;
//     }
// }
//
// function parseToString(val) {
//     if (typeof val === "number") {
//         return `${val}px`;
//     }
//     return val;
// }
//
// class LayoutParams {
//     constructor(container, gutter, colNumber) {
//         if (container.width) {
//             this._width = parseToString(container.width);
//         } else {
//             this._margin = parseToString(container.margin);
//         }
//
//         this._gutter = parseToString(gutter);
//         this._colNumber = colNumber;
//
//         if (this._width) {
//             this.css = {
//                 container: this._width,
//                 margin: `calc(50vw - ${this._width}/2)`
//             };
//         } else {
//             this.css = {
//                 container: `calc(100vw - 2*${this._margin})`,
//                 margin: this._margin
//             };
//         }
//
//         this.css.gutter = this._gutter;
//         this.css.col = `calc(calc(${this.css.container} - ${colNumber - 1}*${
//             this.css.gutter
//         }) / ${colNumber})`;
//
//         this.css.calc = equation => {
//             equation = equation.replace(/gutter/g, this.css.gutter);
//             equation = equation.replace(/margin/g, this.css.margin);
//             equation = equation.replace(/container/g, this.css.container);
//             equation = equation.replace(/col/g, this.css.col);
//             return `calc(${equation})`;
//         };
//     }
//
//     get container() {
//         if (this._width) {
//             return parseStringToNumber(this._width);
//         } else {
//             return (
//                 document.body.clientWidth -
//                 2 * parseStringToNumber(this._margin)
//             );
//         }
//     }
//
//     get margin() {
//         if (this._width) {
//             return (
//                 (document.body.clientWidth - parseStringToNumber(this._width)) /
//                 2
//             );
//         } else {
//             return parseStringToNumber(this._margin);
//         }
//     }
//
//     get colNumber() {
//         return this._colNumber;
//     }
//
//     get gutter() {
//         return parseStringToNumber(this._gutter);
//     }
//
//     get col() {
//         return (
//             (this.container - (this.colNumber - 1) * this.gutter) /
//             this.colNumber
//         );
//     }
//
//     cols(n) {
//         return this.col * n + this.gutter * (n - 1);
//     }
// }
//
// class Layout {
//     constructor(config) {
//         this._colNumber = config.colNumber;
//         this._layoutParamsRangeMap = {};
//
//         Defaults.rangeSet.array.forEach(range => {
//             let layoutParams = new LayoutParams(
//                 config.container[range.name],
//                 config.gutter[range.name],
//                 config.colNumber
//             );
//
//             this._layoutParamsRangeMap[range.name] = layoutParams;
//         });
//     }
//
//     get colNumber() {
//         return this._colNumber;
//     }
//
//     params(rangeName) {
//         return this._layoutParamsRangeMap[rangeName];
//     }
//
//     get currentParams() {
//         let result;
//
//         Defaults.rangeSet.array.forEach(range => {
//             if (
//                 range.from <= document.body.clientWidth &&
//                 (range.isInfinite || document.body.clientWidth <= range.to)
//             ) {
//                 result = this.params(range.name);
//             }
//         });
//
//         return result;
//     }
//
//     get map() {
//         let map = {};
//
//         Defaults.rangeSet.array.forEach(range => {
//             map[range.name] = this.params(range.name);
//         });
//
//         return map;
//     }
//
//     /**
//      * TODO: continue this, don't return CSS, just ResponsiveSize, it will be consumed later.
//      */
//     calc(equation) {
//         let valuesRangeMap = {};
//
//         Defaults.rangeSet.array.forEach(range => {
//             valuesRangeMap[range.name] = this._layoutParamsRangeMap[
//                 range.name
//             ].css.calc(equation);
//         });
//
//         return new ResponsiveSize(valuesRangeMap);
//     }
//
//     _rs(propName) {
//         let valuesRangeMap = {};
//
//         Defaults.rangeSet.array.forEach(range => {
//             valuesRangeMap[range.name] = this._layoutParamsRangeMap[
//                 range.name
//             ].css[propName];
//         });
//
//         return new ResponsiveSize(valuesRangeMap);
//     }
//
//     get container() {
//         return this._rs("container");
//     }
//
//     get margin() {
//         return this._rs("margin");
//     }
//
//     get gutter() {
//         return this._rs("gutter");
//     }
//
//     get col() {
//         return this._rs("col");
//     }
// }

class Layout {
    constructor(config) {
        this.container = config.container;
        this.colNumber = config.colNumber;
        this.gutter = config.gutter;
        this.margin = rs("100vw")
            .subtract(config.container)
            .divide(2);

        this.col = this.container
            .subtract(this.gutter.multiply(config.colNumber - 1))
            .divide(config.colNumber);
    }

    cols(n) {
        return this.col.multiply(n).add(this.gutter.multiply(n - 1));
    }
}

Layout.normalizeGridItemParams = function(params) {
    if (typeof params === "number") {
        return {
            cols: params,
            offset: 0,
            order: 0
        };
    } else if (Array.isArray(params)) {
        return {
            cols: params[0] || 0,
            offset: params[1] || 0,
            order: params[2] || 0
        };
    }

    params.cols = params.cols || 0;
    params.offset = params.offset || 0;
    params.order = params.order || 0;

    return params;
};

Layout.main = new Layout(layout);

export { Layout };
