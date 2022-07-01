import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../../components/rockets/Rockets';

describe('snapshots testing', () => {
  test('snapshots for Missions component', () => {
    const rendererComponents = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponents).toMatchSnapshot();
  });
});
