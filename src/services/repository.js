import axios from 'axios';

import {ROW_PER_PAGE} from "../config/const";

const baseUrl = "https://api.github.com";

function GetRepositoriesByName(name) {
    return axios.get(`${baseUrl}/search/repositories?q=${name}&page=1&per_page=${ROW_PER_PAGE}`);
}

function GetRepositoriesNameByPagination(name, page) {
    return axios.get(`${baseUrl}/search/repositories?q=${name}&page=${page}&per_page=${ROW_PER_PAGE}`);
}

function GetRepositoryByID(id) {
    return axios.get(`${baseUrl}/repositories/${id}`);
}

function GetReadmeByOwnerAndName(owner, name) {
    return axios.get(`${baseUrl}/repos/${owner}/${name}/readme`);
}

export {GetRepositoriesByName, GetRepositoriesNameByPagination, GetRepositoryByID, GetReadmeByOwnerAndName};