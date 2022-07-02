import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../../components/rockets/Rockets';
import Profile from '../../components/profile/Profile';
import axios from '../../http-client';

jest.mock('../../http-client');

describe('Rockets Component', () => {
  beforeEach(async () => {
    const state = {
      data: [
        {
          id: 1,
          name: 'Falcon 1',
          description: 'Hans Solo Craft',
          flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        },
      ],
    };
    await axios.get.mockResolvedValue(state);
  });
  afterEach(() => {
    act(() => store.dispatch({
      type: 'spacehub/rockets/ADD_ALL_ROCKETS',
      payload: [],
    }));
  });
  it('Renders correctly', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Reserve Rocket').length).toBeGreaterThan(0);
    });
  });
  it('Reserves a rocket on reserve button click', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    const reserveBtns = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveBtns[0]);
    const reservedBadges = await screen.findAllByText('Reserved');
    expect(reservedBadges.length).toBeGreaterThan(0);
  });
  it('Cancel reservation on cancel button click', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    let reserveBtns = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveBtns[0]);
    const reservedBadges = await screen.findAllByText('Reserved');
    expect(reservedBadges.length).toStrictEqual(1);
    const cancelResBtns = await screen.findAllByText('Cancel Reservation');
    fireEvent.click(cancelResBtns[0]);
    reserveBtns = await screen.findAllByText('Reserve Rocket');
    expect(reserveBtns.length).toStrictEqual(1);
  });
  it('Renders no reserved rockets on first load of profile', async () => {
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('You have no reserved rockets')).toBeTruthy();
  });
  it('Reserves rockets and appears in the profile', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    const reserveBtns = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveBtns[0]);
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('Falcon 1')).toBeTruthy();
    render(<Provider store={store}><Rockets /></Provider>);
    const cancelResBtns = await screen.findAllByText('Cancel Reservation');
    fireEvent.click(cancelResBtns[0]);
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('You have no reserved rockets')).toBeTruthy();
  });
  it('reserves rockets that appear in the profile, then cancels and the profile is emptied', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    const reserveBtns = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveBtns[0]);
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('Falcon 1')).toBeTruthy();

    render(<Provider store={store}><Rockets /></Provider>);
    const cancelResBtns = await screen.findAllByText('Cancel Reservation');
    fireEvent.click(cancelResBtns[0]);
    render(<Provider store={store}><Profile /></Provider>);
    expect(screen.findByText('You have no reserved rockets')).toBeTruthy();
  });
});
