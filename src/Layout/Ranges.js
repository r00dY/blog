import { ranges } from "../../config/ranges.config";

class Range {
    constructor(name, from, to) {
        this.name = name;
        this.from = from;
        this.to = to;
    }

    get isInfinite() {
        return typeof this.to === "undefined" || this.to === null;
    }
}

class RangeSet {
    constructor(ranges) {
        this._rangesArray = [];

        let rangeEntries = Object.entries(ranges);
        rangeEntries = rangeEntries.sort((x, y) => x[1] - y[1]);

        for (let i = 0; i < rangeEntries.length; i++) {
            let rangeEntry = rangeEntries[i];

            let name = rangeEntry[0];
            let from = rangeEntry[1];
            let to;

            // If not last breakpoint
            if (i < rangeEntries.length - 1) {
                to = rangeEntries[i + 1][1] - 1;
            }

            let range = new Range(name, from, to);
            this._rangesArray.push(range);
        }
    }

    get(name) {
        for (let i = 0; i < this._rangesArray.length; i++) {
            if (this._rangesArray[i].name === name) {
                return this._rangesArray[i];
            }
        }
    }

    get map() {
        let map = {};
        this.array.forEach(range => {
            map[range.name] = range;
        });

        return map;
    }

    get array() {
        return this._rangesArray;
    }

    get first() {
        return this._rangesArray[0];
    }

    get second() {
        return this._rangesArray[1];
    }

    get last() {
        return this._rangesArray[this._rangesArray.length - 1];
    }
}

RangeSet.main = new RangeSet(ranges);

class RangeMap {
    constructor(rangeMapConfig) {
        let rangeNames = Object.keys(rangeMapConfig);

        // Convert breakpoint names to numbers
        rangeNames.forEach(name => {
            let val = rangeMapConfig[name];
            delete rangeMapConfig[name];

            rangeMapConfig[RangeMap._normalizeKey(name)] = val;
        });

        this._map = rangeMapConfig;
    }

    get rangeSet() {
        let rangeNames = Object.keys(this._map);

        let rangesConfig = {};

        rangeNames.forEach(name => {
            rangesConfig[name] = parseInt(name);
        });

        return new RangeSet(rangesConfig);
    }

    get(arg) {
        return this._map[arg];
    }

    set(arg, val) {
        this._map[arg] = val;
    }

    value(res) {
        let result;

        this.forEach((val, range) => {
            if (range.from <= res && (range.isInfinite || res <= range.to)) {
                result = val;
            }
        });

        return result;
    }

    forEach(callback) {
        this.rangeSet.array.forEach(range => {
            callback(this._map[range.name], range);
        });
    }

    crosssect(that) {
        let rangeSet1 = this.rangeSet;
        let rangeSet2 = that.rangeSet;

        let i = 0; // index of range1
        let j = 0; // index of range2
        let minBreakpoint = 0;
        let newBreakpoint;

        let range1, range2;
        let activeRange1 = null;
        let activeRange2 = null;

        let config = {};

        let run = () => {
            if (newBreakpoint !== minBreakpoint) {
                config[minBreakpoint] = {
                    val1: this.get(activeRange1.name),
                    val2: that.get(activeRange2.name)
                };
            }
        };

        while (1) {
            range1 = rangeSet1.array[i];
            range2 = rangeSet2.array[j];

            if (range1 === undefined && range2 === undefined) {
                newBreakpoint = null;
                run();
                break;
            } else if (range1 === undefined) {
                newBreakpoint = range2.from;
                run();
                activeRange2 = range2;
                j++;
            } else if (range2 === undefined) {
                newBreakpoint = range1.from;
                run();
                activeRange1 = range1;
                i++;
            } else if (range1.from >= range2.from) {
                newBreakpoint = range2.from;
                run();
                activeRange2 = range2;
                j++;
            } else {
                newBreakpoint = range1.from;
                run();
                activeRange1 = range1;
                i++;
            }

            minBreakpoint = newBreakpoint;
        }

        return new RangeMap(config);
    }

    css(callback) {
        let style = "";

        this.forEach((content, range) => {
            style += `
            @media only screen and (min-width: ${range.from}px) ${
                !range.isInfinite ? `and (max-width: ${range.to}px)` : ""
            } {
                ${callback(content, range)}
            }
        `;
        });

        return style;
    }
}

RangeMap._normalizeKey = function(key) {
    if (typeof key === "string" && isNaN(parseInt(key))) {
        return RangeSet.main.get(key).from;
    }
    return key;
};

//
// // Doesn't take cross-sections with Layout
// function rangeMapForEach(rangeMap, callback) {
//     let rangeSet = createRangeSetFromRangeMap(rangeMap);
//
//     rangeSet.array.forEach(range => {
//         callback(rangeMap[range.name], { range });
//     });
// }

// function rangeMapForEachWithLayout(rangeMap, callback) {
//     let rangeSet = createRangeSetFromRangeMap(rangeMap);
//
//     let i = 0; // index of ranges from map
//     let j = 0; // index of canonical ranges
//     let minBreakpoint = 0;
//     let newBreakpoint;
//
//     let canonicalRange, range;
//     let activeCanonicalRange = null;
//     let activeRange = null;
//
//     function run() {
//         if (newBreakpoint !== minBreakpoint) {
//             let newRange = new Range(
//                 null,
//                 minBreakpoint,
//                 newBreakpoint === null ? null : newBreakpoint - 1
//             );
//
//             callback(activeRange ? rangeMap[activeRange.name] : null, {
//                 range: newRange,
//                 layoutParams: Defaults.layout.params(activeCanonicalRange.name)
//             });
//         }
//     }
//
//     while (1) {
//         range = rangeSet.array[i];
//         canonicalRange = Defaults.rangeSet.array[j];
//
//         if (range === undefined && canonicalRange === undefined) {
//             newBreakpoint = null;
//             run();
//             break;
//         } else if (range === undefined) {
//             newBreakpoint = canonicalRange.from;
//             run();
//             activeCanonicalRange = canonicalRange;
//             j++;
//         } else if (canonicalRange === undefined) {
//             newBreakpoint = range.from;
//             run();
//             activeRange = range;
//             i++;
//         } else if (range.from >= canonicalRange.from) {
//             newBreakpoint = canonicalRange.from;
//             run();
//             activeCanonicalRange = canonicalRange;
//             j++;
//         } else {
//             newBreakpoint = range.from;
//             run();
//             activeRange = range;
//             i++;
//         }
//
//         minBreakpoint = newBreakpoint;
//     }
// }
//
// function rangeMapToCSS(rangeMap, callback) {
//     let style = "";
//
//     rangeMapForEach(rangeMap, (content, { range }) => {
//         style += `
//             @media only screen and (min-width: ${range.from}px) ${
//             !range.isInfinite ? `and (max-width: ${range.to}px)` : ""
//         } {
//                 ${callback(content, { range })}
//             }
//         `;
//     });
//
//     return style;
// }
//
// function rangeMapToCSSWithLayout(rangeMap, callback) {
//     let style = "";
//
//     rangeMapForEachWithLayout(rangeMap, (content, { range, layoutParams }) => {
//         style += `
//             @media only screen and (min-width: ${range.from}px) ${
//             !range.isInfinite ? `and (max-width: ${range.to}px)` : ""
//         } {
//                 ${callback(content, { range, layoutParams })}
//             }
//         `;
//     });
//
//     return style;
// }
//
// function rangeSetToCSS(callback) {
//     let style = "";
//
//     rangeMapForEachWithLayout(
//         Defaults.rangeSet.map,
//         (content, { range, layoutParams }) => {
//             style += `
//             @media only screen and (min-width: ${range.from}px) ${
//                 !range.isInfinite ? `and (max-width: ${range.to}px)` : ""
//             } {
//                 ${callback({ range, layoutParams })}
//             }
//         `;
//         }
//     );
//
//     return style;
// }

// Object.defineProperty(RangeSet, "main", {
//     get: function() {
//         return Defaults.rangeSet;
//     }
// });

export {
    Range,
    RangeSet,
    RangeMap
    // createRangeSetFromRangeMap,
    // rangeMapForEach,
    // rangeMapForEachWithLayout,
    // rangeMapToCSS,
    // rangeMapToCSSWithLayout,
    // rangeSetToCSS,
    // rangeMapValue
};
