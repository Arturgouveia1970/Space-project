import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/missions/missions';

import './Reserve.css';

const Reserve = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  const ActivateMission = () => {
    dispatch(changeStatus(id));
  };

  const text = reserved ? 'Not a Member' : 'Join Mission';

  return (
    <button
      className={`join-btn ${reserved ? 'is-reserved' : 'is-not-reserved'}`}
      onClick={ActivateMission}
      type="button"
    >
      {text}
    </button>
  );
};

Reserve.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Reserve;
