import React, { Component } from "react";

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: this.props.start == null ? 1 : this.props.start,
      lan: "language-" + this.props.language
    };
  }

  componentDidMount() {
    window.Prism.highlightAll();
  }

  render() {
    return (
      <div class="codeBlock line-numbers">
        <pre data-start={this.state.line}>
          <code class={this.state.lan}>{this.props.code}</code>
        </pre>
      </div>
    );
  }
}

export default CodeBlock;
