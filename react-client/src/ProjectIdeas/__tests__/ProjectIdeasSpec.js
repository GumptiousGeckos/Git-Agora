import React from 'react';
import { shallow } from 'enzyme';

import { ProjectBoard } from '../ProjectBoard';
import ProjectBoardEntry from '../ProjectBoardEntry';
import Votes from '../Votes';
import * as actions from '../projectActions';
import reducer from '../projectReducer';

describe('Project Actions', () => {
  it('should have ADD_PROJECT action', () => {
    const expectedAction = {
      type: 'ADD_PROJECT'
    };
    expect(actions.addProject()).toEqual(expectedAction);
  });
});

describe('Project Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle ADD_PROJECT', () => {
    expect(reducer(undefined, {
      type: 'ADD_PROJECT'
    })).toEqual({projects: [{
        id: 3,
        title: "Project Title",
        description: "Project Description!",
        likes: 5,
        dislikes: 1
    }]});
  });
});

describe('Components', () => {
  describe('ProjectBoard', () => {
    it('should render a button', () => {
      const wrapper = shallow(<ProjectBoard getProjects={actions.fetchProjects} />);
      expect(wrapper.find('button').length).toBe(1);
    });
  });

  describe('ProjectBoardEntry', () => {
    var sampleProject = {
      id: 0,
      title: "Project Title",
      description: "Project Description!",
      likes: 5,
      dislikes: 1
    };
    it('should show the project title and description', () => {
      const wrapper = shallow(<ProjectBoardEntry project={sampleProject} />);
      expect(wrapper.find('span').text()).toBe('Project Title');
      expect(wrapper.find('h4').text()).toBe('Project Description!');
    });
  });

  describe('Votes', () => {
    it('should render 2 buttons', () => {
      const wrapper = shallow(<Votes />);
      expect(wrapper.find('button').length).toBe(2);
    });
  });
});