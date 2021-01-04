import React, { useEffect, useState } from 'react';
import SocialNet from './SocialNet';
import getData from '../firebase/service.js';

const SocialNets = () => {
  const [socialNets, handleSocialNets] = useState([]);

  const fetchData = async () => {
    const data = await getData('socialNetworks').then((data) => data);
    handleSocialNets(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="social-networks">
      {socialNets.map((sn) => (
        <SocialNet key={sn.name} socialNet={sn} />
      ))}
    </div>
  );
};

export default SocialNets;
