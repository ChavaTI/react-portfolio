import db from './config';

const getData = async (path) => {
  const fireStoreQuery = db.collection(path).get();
  return fireStoreQuery
    .then((data) => data.docs)
    .then((docs) => docs.map((doc) => doc.data()))
    .then((docsData) => docsData)
    .catch((error) => console.error(error));
};

export default getData;
