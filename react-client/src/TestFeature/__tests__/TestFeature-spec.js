import React from 'react';
import { shallow } from 'enzyme';
import { TestComponent } from '../TestComponent';

import * as actions from '../testAction';
import reducer from '../testReducer';

describe('test actions', () => {
  it('should change test from false to true', () => {
    const expectedAction = {
      type: 'DO_SOMETHING'
    };
    expect(actions.testFunction()).toEqual(expectedAction);
  });
});

describe('test reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle DO_SOMETHING', () => {
    expect(reducer([], {
      type: 'DO_SOMETHING'
    })).toEqual({
      test: true
    });
  });
});


describe('components', () => {
  // Hard to test components with connect
  // Dumb components are easier to test
  describe('Test Component', () => {
    it('should render h1 tag', () => {
      const wrapper = shallow(<TestComponent />);
      expect(wrapper.find('h1').text()).toBe('Hello World!');
    });
  });
});