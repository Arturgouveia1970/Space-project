import React from 'react';
import './Profile.css';
import ReservedRockets from './ReservedRockets/ReservedRockets';
import ReservedMissions from './ReservedMissions';

const Profile = () => (
  <div id="profile=section">
    <ReservedRockets />
    <ReservedMissions />
  </div>
);

export default Profile;
