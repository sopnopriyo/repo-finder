import React, { Component } from "react";
import { connect } from "react-redux";
import { loadReadme } from "../actions";
import RenderReadme from "../components/RenderReadme";

class RenderReadmeContainer extends Component {

  constructor(props) {
    super(props)
    this.state =  { 
      owner: this.getOwnerLogin(),
      name: this.props.repository.name
    };
  }
  
  getOwnerLogin() {
    if (this.props.repository.owner !== undefined) {
      return this.props.repository.owner.login;
    }
  }

  componentDidMount() {
    if (this.props.repository.name && this.getOwnerLogin()) {
      this.props.loadReadme(this.getOwnerLogin(), this.props.repository.name);
    }
  }

  render() {
    return <RenderReadme readme={this.props.readme} />;
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository,
    readme: state.readme
  };
};

export default connect(mapStateToProps, { loadReadme })(RenderReadmeContainer);
