const Sequelize = require('sequelize');
const dbconfig = require('./config/dbconfig.js');

// init sequelize
const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
  host: dbconfig.host,
  dialect: 'mysql'
});

// model definition
const Item = sequelize.define('item', {
//  id: sequelize default,
  name: { type: Sequelize.STRING },
  lat: { type: Sequelize.DOUBLE, validate: {min: 33.06, max: 38.27} },
  lng: { type: Sequelize.DOUBLE, validate: {min: 125.04, max: 131.52} },
  type: { type: Sequelize.STRING(50), validate: {isIn:[['원룸오픈','원룸분리','투룸','쓰리룸','오피스텔']]} },
  rent: { type: Sequelize.INTEGER },
  deposit: { type: Sequelize.INTEGER },
  description: { type: Sequelize.STRING(1000) }
});

module.exports = {
  sequelize: sequelize,
  Item: Item
};
