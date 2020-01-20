import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderRepos from '../components/RenderRepos';

import SearchBar from "../components/SearchBar";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";

class RenderReposContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  render() {
    return (
      <div>
      <header className="App-header">
      <div className="github-logo">
        <img alt="logo" src={logo} />
      </div>
      <h1>Search GitHub Repositories</h1>
      <br/>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Repo Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <SearchBar></SearchBar>
        </Navbar.Collapse>
      </Navbar>
    </header>
    <main>
      <RenderRepos
      repositories={this.props.repositories}
      time={this.props.time}
      page={this.state.page}
      />
    </main>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  time: state.time,
  page: state.page
})

export default connect(mapStateToProps)(RenderReposContainer)
