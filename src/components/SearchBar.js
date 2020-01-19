import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRepositories } from '../actions';
import {debounce} from "lodash";

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.delayedCallback = debounce(this.fetchData, 1000)
  }

  fetchData(event) {
    this.setState({
      name: event.target.value
    })
     this.props.loadRepositories(event.target.value);
  }

  onChange(event) {
    //This will ensure that the event is not pooled
    event.persist()
    this.delayedCallback(event)
  }

  render() {
    return (
      <div className="d-flex w-100 justify-content-center">
        <input style={{minWidth: "180px"}} 
              onChange={this.onChange.bind(this)} 
              name="textSearch" 
              placeholder="Enter a repository name"/>
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  name: state.name
})

export default connect(mapStateToProps, {loadRepositories})(SearchBar)
