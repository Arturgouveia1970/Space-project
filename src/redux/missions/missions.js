import SpaceService from '../../services/Services';

const ADD_MISSIONS = 'spacehub/missions/ADD_MISSIONS';
const TOGGLE_JOIN_MISSION = 'spacehub/missions/TOGGLE_JOIN_MISSION';

export default function missions(state = [], action = {}) {
  switch (action.type) {
    case ADD_MISSIONS:
      return action.payload;
    case TOGGLE_JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, Active: !mission.Active };
      });
    default:
      return state;
  }
}

export const getMissions = async (dispatch, getState) => {
  const currentMission = getState().missions;
  if (currentMission.length === 0) {
    const { data } = await SpaceService.getMissions();
    const missions = data.map((mission) => ({
      id: mission.id,
      name: mission.mission_name,
      description: mission.description,
      status: false,

    }));
    dispatch({ type: ADD_MISSIONS, payload: missions });
  }
};

export const joinMission = (id) => ({ type: TOGGLE_JOIN_MISSION, payload: id });
