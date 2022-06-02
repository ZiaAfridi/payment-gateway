// const Config = require('../../config');

async function applyAdditionalSetup(sequelize) {
	// get models from sequelize
	// const {
	// 	creditCard,
	// } = sequelize.models;
    
    // Check enviroment 
	// if (Config.environment === 'debug') {
	// 	do something
	// }
	await sequelize.sync();
    // Here apply association on models 
    // Example.
	// creditCard.belongsTo(user, { foreignKey: 'userId' });
	
}

module.exports = { applyAdditionalSetup };
