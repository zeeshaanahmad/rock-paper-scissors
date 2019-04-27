import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Game from './Game';

describe('Game', () => {
  let props;
  let shallowGame;
  let renderedGame;
  let mountedGame;

  const shallowTestComponent = () => {
    if (!shallowGame) {
      shallowGame = shallow(<Game {...props} />);
    }
    return shallowGame;
  };

  const renderTestComponent = () => {
    if (!renderedGame) {
      renderedGame = render(<Game {...props} />);
    }
    return renderedGame;
  };

  const mountTestComponent = () => {
    if (!mountedGame) {
      mountedGame = mount(<Game {...props} />);
    }
    return mountedGame;
  };  

  beforeEach(() => {
    props = {};
    shallowGame = undefined;
    renderedGame = undefined;
    mountedGame = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
