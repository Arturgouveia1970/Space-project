import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../../components/missions/Missions';

describe('snapshots testing', () => {
  test('snapshots for Missions component', () => {
    const rendererComponents = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponents).toMatchSnapshot();
  });
});
