import {GetRepositoriesByName, GetRepositoriesNameByPagination,
   GetRepositoryByID, GetReadmeByOwnerAndName} from "../services/repository";
   
import * as types  from "../actions/types";


const repositoriesFetch = repositories => ({
  type: types.REPOSITORIES_FETCH,
  payload: repositories
});

const repositoriesFetchNext = repositories => ({
  type: types.REPOSITORIES_NEXT_FETCH,
  payload: repositories
});

const repositoryFetch = repository => ({
  type: types.REPOSITORY_FETCH,
  payload: repository
});

const searchedName = name => ({
  type: types.SEARCHED_NAME,
  payload: name
});

const searchedPage = page => ({
  type: types.SEARCHED_PAGE,
  payload: page
});

const detailedId = id => ({
  type: types.DETAIL_ID,
  payload: id
});

const requestReadme = readme => ({
  type: types.README_FETCH,
  payload: readme
});

const trackPerformance = time => ({
  type: types.PERFORMANCE_TIME,
  payload: time
})

export const loadRepositories = name => (dispatch, getState) => {
  
  const state = getState();
  const { repositories } = state;

  let t0 = performance.now()
  if (!repositories.length) {
    GetRepositoriesByName(name)
      .then(response => {
        const fetchAction = repositoriesFetch(response.data);
        const searchAction = searchedName(name);
        dispatch(fetchAction);
        dispatch(searchAction);
      })
      .catch(console.error);
  }
  let t1 = performance.now()

  const time = t1 - t0
  const timeAction = trackPerformance(time)
  dispatch(timeAction)
};

export const loadNextRepositories = (name, page) => (dispatch, getState) => {

  const state = getState();
  const { repositories } = state;

  GetRepositoriesNameByPagination(name, page)
      .then(response => {
        const fetchAction = repositoriesFetchNext(response.data);
        const searchAction = searchedName(name);
        const pageAction = searchedPage(page)
        dispatch(fetchAction);
        dispatch(searchAction);
        dispatch(pageAction)
      })
      .catch(console.error);
}

export const loadRepository = id => dispatch => {
  GetRepositoryByID(id)
    .then(response => {
      const actionId = detailedId(id);
      const actionResponse = repositoryFetch(response.data);
      dispatch(actionId);
      dispatch(actionResponse);
    })
    .catch(console.error);
};

export const loadReadme = (owner, name) => dispatch => {
  if (owner && name) {
    GetReadmeByOwnerAndName(owner, name)
      .then(response => {
        const readmeAction = requestReadme(response.data);
        dispatch(readmeAction);
      })
      .catch(console.error);
  }
};