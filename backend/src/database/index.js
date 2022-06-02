'user strict';

const { Sequelize } = require('sequelize');
const Config = require('../../config');

const { applyAdditionalSetup } = require('./additionalSetup');

    // db connection string
   const sequelize = new Sequelize(`postgres://${Config.USER}:${Config.PASSWORD}@${Config.HOST}:${Config.PORT}/${Config.DB}`,
{
    pool: {
        max: 50,
        min: 0,
        idle: 1000,
    },
});

// model array 
const modelDefiners = [
    require('./models/creditCard.model'),
];

// Define all models according to their files.
for (const modelDefiner of modelDefiners) {
    try {
        modelDefiner(sequelize);
    } catch (e) {
        console.error('Throw error', e);
    }
}

 // Apply any additional setup after the models are defined, such as adding associations.
 applyAdditionalSetup(sequelize);

module.exports = sequelize;
