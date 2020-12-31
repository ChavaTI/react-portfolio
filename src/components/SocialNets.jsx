import React, { useEffect, useState } from 'react';
import SocialNet from './SocialNet';
import db from './../firebase/config.js';

const SocialNets = () => {
  const [socialNets, handleSocialNets] = useState([]);

  const getData = async () => {
    const fireStoreQuery = db.collection('socialNetworks').get();
    fireStoreQuery
      .then((data) => data.docs)
      .then(docs => docs.map(doc => doc.data()))
      .then(docsData => {
	handleSocialNets(docsData);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
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
