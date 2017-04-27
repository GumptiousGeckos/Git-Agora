import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../HomePage';

import * as actions from '../homepageActions';
import reducer from '../homepageReducer';

xdescribe('HomePage Actions', () => {
  describe('Hot Projects actions', () => {
    it('should have a FETCHING_HOT_PROJECTS action', () => {
      const expectedAction = {
        type: 'FETCHING_HOT_PROJECTS'
      };
      expect(actions.requestHotProjects()).toEqual(expectedAction);
    });
    it('should have a RECEIVED_HOT_PROJECTS action', () => {
      const expectedAction = {
        type: 'RECEIVED_HOT_PROJECTS',
        payload: []
      };
      expect(actions.receivedHotProjects([])).toEqual(expectedAction);
    });
    it('should have a REQUEST_HOT_PROJECTS_ERROR action', () => {
      const expectedAction = {
        type: 'REQUEST_HOT_PROJECTS_ERROR',
        error: 'error'
      };
      expect(actions.errorHotProjects('error')).toEqual(expectedAction);
    });
  });

  xdescribe('Hot News actions', () => {
    it('should have a FETCHING_HOT_NEWS action', () => {
      const expectedAction = {
        type: 'FETCHING_HOT_NEWS'
      };
      expect(actions.requestHotNews()).toEqual(expectedAction);
    });
    it('should have a RECEIVED_HOT_NEWS action', () => {
      const expectedAction = {
        type: 'RECEIVED_HOT_NEWS',
        payload: []
      };
      expect(actions.receivedHotNews([])).toEqual(expectedAction);
    });
    it('should have a REQUEST_HOT_NEWS_ERROR action', () => {
      const expectedAction = {
        type: 'REQUEST_HOT_NEWS_ERROR',
        error: 'error'
      };
      expect(actions.errorHotNews('error')).toEqual(expectedAction);
    });
  });
});

xdescribe('Project Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle FETCHING_HOT_PROJECTS', () => {
    expect(reducer(undefined, {
      type: 'FETCHING_HOT_PROJECTS'
    })).toEqual({
      fetchingHotProjects: true
    });
  });
  it('should handle RECEIVED_HOT_PROJECTS', () => {
    expect(reducer(undefined, {
      type: 'RECEIVED_HOT_PROJECTS',
      payload: []
    })).toEqual({
      hotProjects: [],
      fetchingHotProjects: false
    });
  });

  it('should handle FETCHING_HOT_NEWS', () => {
    expect(reducer(undefined, {
      type: 'FETCHING_HOT_NEWS'
    })).toEqual({
      fetchingHotNews: true
    });
  });
  it('should handle RECEIVED_HOT_NEWS', () => {
    expect(reducer(undefined, {
      type: 'RECEIVED_HOT_NEWS',
      payload: []
    })).toEqual({
      hotNews: [],
      fetchingHotNews: false
    });
  });
});

xdescribe('HomePage Components', () => {
  describe('HomePage', () => {
    it('should render Trending Tech News', () => {
      const wrapper = shallow(<HomePage
        getHotProjects={(actions.fetchHotProjects)}
        getHotNews={actions.fetchHotNews}
      />);
      expect(wrapper.contains('Trending Tech News')).toBe(true);
    });
    it('should render Hot Projects', () => {
      const wrapper = shallow(<HomePage
        getHotProjects={(actions.fetchHotProjects)}
        getHotNews={actions.fetchHotNews}
      />);
      expect(wrapper.contains('Hot Projects')).toBe(true);
    });
  });
});
