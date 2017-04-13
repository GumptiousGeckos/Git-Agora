import React from 'react';
import { shallow } from 'enzyme';

import { NavBar } from '../NavBar';

import * as actions from '../navActions';
import reducer from '../navReducer';

describe('NavBar Actions', () => {
  it('should have a CHANGE_TAB action', () => {
    const expectedAction = {
      type: 'CHANGE_TAB',
      payload: 'test'
    };
    expect(actions.changeTab('test')).toEqual(expectedAction);
  });
});

describe('NavBar Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle CHANGE_TAB', () => {
    expect(reducer(undefined, {
      type: 'CHANGE_TAB',
      payload: 'test'
    })).toEqual('test');
  });
});

describe('NavBar Components', () => {
  describe('NavBar', () => {
    it('should render git-agora home tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains('git-agora')).toBe(true);
    });
    it('should render News tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains(' News')).toBe(true);
    });
    it('should render Projects tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains(' Projects')).toBe(true);
    });
    it('should render Categories tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains(' Categories')).toBe(true);
    });
    it('should render Users tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains(' Users')).toBe(true);
    });
    it('should render Sign up tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains('Sign up')).toBe(true);
    });
    it('should render Log in tab', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper.contains('Log in')).toBe(true);
    });
  });
});