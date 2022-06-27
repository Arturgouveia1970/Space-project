import SpaceService from '../../services/Services';

const ADD_ROCKETS = 'spacehub/rockets/ADD_ROCKETS';

export default function rockets(state = [], action = {}) {
  switch (action.type) {
    case ADD_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}

export const getRockets = async (dispatch, getState) => {
  const currentRockets = getState().rockets;
  if (currentRockets.length === 0) {
    const { data } = await SpaceService.getRockets();
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
    }));
    dispatch({ type: ADD_ROCKETS, payload: rockets });
  }
};
