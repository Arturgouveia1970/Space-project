/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getMissions } from '../../redux/missions/missions';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions);
  }, []);

  const missions = useSelector((state) => state.missions);

  return (
    <div className="missions">
      <table className="missions_table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join Mission</th>
          </tr>
        </thead>
        {
      missions.map(({
        mission_id, name, description, reserved = false,
      }) => (
        <tr key={mission_id}>
          <td className="mission_name"><h1>{ name }</h1></td>
          <td className="mission_description"><p>{description}</p></td>
          <td>{ reserved ? (<span className="badge badge--primary">ACTIVE mEMBER</span>) : (<span className="badge badge--secondary">NOT A MEMBER</span>) }</td>
          <td>{ reserved ? (<button type="button" className="app-btn-danger">Leave Mission</button>) : (<button type="button" className="app-btn-ghost">Join Mission</button>) }</td>
        </tr>
      ))
    }
      </table>
    </div>
  );
};
export default Missions;
