import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNextRepositories } from "../actions";
import { Link } from 'react-router-dom';
import {ROW_PER_PAGE} from "../config/const";

class RenderRepos extends Component {
  renderRepos(items) {
    const {
      name,
      owner,
      html_url,
      description,
      id
    } = items;

    return (
        <div key={id.toString()} className="col-md-4 col-xs-12 mb-4 d-flex align-items-stretch">
          <div className="card" style={{width:"100%"}}>
            <img src={owner.avatar_url} alt={name} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title"><a href={html_url} className="card-link">{name}</a></h5>
              <p className="card-text">{description}</p>
              <br/>
              <Link to={`repositories/${id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
    );
  }

  render() {
    const { repositories, time, page } = this.props;

    const searchedItems = repositories.items || [];

    const totalCount = repositories.total_count;

    const mapItems = () => {
      if (searchedItems !== undefined) {
        return searchedItems.map(this.renderRepos);
      }
    };

    const minusPage = () => {
      this.props.loadNextRepositories(
        this.props.name,
        page - 1
      );
    }

    const plusPage = () => {
      this.props.loadNextRepositories(
        this.props.name,
        page + 1
      );
    };

    const isPaginationAvailable = () => {
      return totalCount > ROW_PER_PAGE;
    };

    const isPreviousButtonDisabled = () => {
      return this.props.page - 1 < 1;
    };

    const isNextButtonDisabled = () => {
      return this.props.page + 1 > (totalCount/ROW_PER_PAGE); 
    }

    return (
        <section>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Repositories Search:</h1>
              <p className="lead">
                  {repositories.total_count &&
                    `You found ${repositories.total_count} repositories`}
                  <br />
                  {time !== 0 && `Request time: ${time} seconds`}
              </p>
            </div>
          </div>
          <div className="rendered-box">
            <div className="row">{mapItems()}</div>
          </div>
          {repositories.total_count && isPaginationAvailable() && (
            <nav>
              <ul className="pagination justify-content-center">
                <li className={"page-item "+ (isPreviousButtonDisabled() ? 'disabled' : '')}>
                <button className="page-link"  
                    onClick={minusPage}>Previous
                  </button>
                </li>    
                <li className={"page-item "+ (isNextButtonDisabled() ? 'disabled' : '')}>
                  <button className="page-link"  
                    onClick={plusPage}>Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </section>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
  name: state.name,
  page: state.page
});

export default connect(mapStateToProps, { loadNextRepositories })(RenderRepos);
