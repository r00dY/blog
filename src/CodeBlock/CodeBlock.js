import React from "react";
import Prism from "prismjs";

class CodeBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return <pre>
          <code className="language-javascript">{this.props.code}</code>
        </pre>
    }
}

export default CodeBlock;