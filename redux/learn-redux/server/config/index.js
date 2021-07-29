const dbConfig = {
  host: 'localhost',
  database: 'redux-thunk-example',
  port: 27017,
};

const getDBUri = () => {
  const localUri = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
  return localUri;
};

module.exports = { getDBUri };
