import React from 'react';
import { shallow } from 'enzyme';

import { ProjectBoard } from '../ProjectBoard';
import ProjectBoardEntry from '../ProjectBoardEntry';
// import Votes from '../Votes';
import * as actions from '../projectActions';
import reducer from '../projectReducer';

describe('Project Actions', () => {
  it('should have ADD_PROJECT action', () => {
    const expectedAction = {
      type: 'ADD_PROJECT'
    };
    expect(actions.addProject()).toEqual(expectedAction);
  });
  it('should have FETCHING_PROJECTS action', () => {
    const expectedAction = {
      type: 'FETCHING_PROJECTS'
    };
    expect(actions.requestProjects()).toEqual(expectedAction);
  });
  it('should have RECEIVED_PROJECTS action', () => {
    const expectedAction = {
      type: 'RECEIVED_PROJECTS',
      payload: [{ test: 'test' }]
    };
    expect(actions.receivedProjects([{ test: 'test' }])).toEqual(expectedAction);
  });
  it('should have REQUEST_PROJECTS_ERROR action', () => {
    const expectedAction = {
      type: 'REQUEST_PROJECTS_ERROR',
      error: 'error'
    };
    expect(actions.errorProjects('error')).toEqual(expectedAction);
  });
});

describe('Project Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle ADD_PROJECT', () => {
    expect(reducer(undefined, {
      type: 'ADD_PROJECT'
    })).toEqual({ projects: [{
      id: 3,
      title: 'Project Title',
      description: 'Project Description!',
      likes: 5,
      dislikes: 1
    }] });
  });
});

describe('Components', () => {
  describe('ProjectBoardEntry', () => {
    const sampleProject = {
      id: 0,
      title: 'Project Title',
      description: 'Project Description!',
      likes: 5,
      dislikes: 1
    };
    it('should show the project title and description', () => {
      const wrapper = shallow(<ProjectBoardEntry project={sampleProject} />);
      expect(wrapper.contains('Project Title')).toBe(true);
      expect(wrapper.contains('Project Description!')).toBe(true);
    });
  });

  xdescribe('Votes', () => {
    it('should render 2 buttons', () => {
      const wrapper = shallow(<Votes />);
      expect(wrapper.find('button').length).toBe(2);
    });
  });
});
