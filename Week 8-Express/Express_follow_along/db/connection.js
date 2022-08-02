const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('tiki_sauce_associations', 'root', 'Ifuonlyknewsome1!', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = sequelize;