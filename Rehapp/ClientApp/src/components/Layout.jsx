import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import { PropTypes } from "prop-types";

export class Layout extends Component {
  static displayName = Layout.name;

  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <NavMenu />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
