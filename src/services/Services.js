import http from '../http-client';

const getRockets = () => http.get('/rockets');

const SpaceService = {
  getRockets,
};

export default SpaceService;
