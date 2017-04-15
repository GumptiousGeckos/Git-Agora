import React from 'react';
import { shallow } from 'enzyme';
import { RepoList } from '../RepoList.jsx';
import RepoListEntry from '../RepoListEntry.jsx';
import * as actions from '../repoListActions';
import repoListReducer from '../repoListReducer';

xdescribe('Repo List Actions', () => {
  it('should have a FETCH_REPO action', () => {
    const expectedAction = {
      type: 'FETCH_REPO'
    };
    expect(actions.fetchRepo()).toEqual(expectedAction);
  });
  it('should have a FETCH_REPO_SUCESS action', () => {
    const expectedAction = {
      type: 'FETCH_REPO_SUCCESS',
      repos: []
    };
    expect(actions.fetchSuccess()).toEqual(expectedAction);
  });
});

xdescribe('Repo List Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      isFetchingRepos: false,
      error: null,
      RepoList: []
    };
    expect(repoListReducer(undefined, {})).toEqual(expectedState);
  });
  it('should handle FETCH_REPO action', () => {
    const expectedState = {
      error: null,
      RepoList: [],
      isFetchingRepos: true
    };
    const action = {
      type: 'FETCH_REPO'
    };
    expect(repoListReducer(undefined, action)).toEqual(expectedState);
  });
  it('should handle FETCH_REPO_SUCCESS action', () => {
    const expectedState = {
      error: null,
      isFetchingRepos: false,
      RepoList: ['test']
    };
    const action = {
      type: 'FETCH_REPO_SUCCESS',
      repos: ['test']
    };
    expect(repoListReducer(undefined, action)).toEqual(expectedState);
  });
});

xdescribe('Repo List Components', () => {
  describe('RepoList', () => {

  });
});
