import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMissions = () => {
  const reservedMissions = useSelector((state) => (
    state.missions.filter((mission) => mission.reserved)
  ));

  return (
    <div className="reserved-missions">
      <h2>My Missions</h2>
      <ul className="missions-list">
        {reservedMissions.length > 0
          ? reservedMissions.map((mission) => (
            <li className="missions-list-item" key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))
          : 'you have not joined any mission'}
      </ul>
    </div>
  );
};

export default ReservedMissions;
