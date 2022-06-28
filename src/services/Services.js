import http from '../http-client';

const getRockets = () => http.get('/rockets');
const getMissions = () => http.get('/missions/');

const SpaceService = {
  getRockets,
  getMissions,
};

export default SpaceService;
