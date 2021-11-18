import React from "react";

export default class View extends React.Component {
  render() {
    return <h1>
      <div>{this.props.label}</div>
    </h1>;
  }
}
