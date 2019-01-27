import Document, { Head, Main, NextScript } from 'next/document'
import React from "react";
import PropTypes from "prop-types";

let css = new Set();

class CSSCollecter extends React.Component {
    getChildContext() {
        return {
            insertCss: (...styles) => styles.forEach(style => css.add(style._getCss()))
        };
    }

    render() {
        return <this.props.component {...this.props.props} />;
    }
}

CSSCollecter.childContextTypes = {
    insertCss: PropTypes.func
};

export default class MyDocument extends Document {

    static async getInitialProps({renderPage}) {
        const page = renderPage(App => props => <CSSCollecter component={App} props={props} />);
        return { ...page };
    }

    render() {

        return (
            <html>
            <Head>
                <style>{`body { margin: 0; background-color: lightgrey; }`}</style>
                <style type="text/css">{[...css].join('')}</style>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}