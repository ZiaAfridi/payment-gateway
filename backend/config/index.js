require('dotenv').config();

module.exports = {
	port: process.env.APIPORT || 5000,
	HOST: process.env.HOST,
	USER: process.env.DBUSER,
	PASSWORD: process.env.DBPASSWORD,
	PORT: process.env.DBPORT,
	DB: process.env.DB,
	SCHEMA: process.env.SCHEMA,	
	SECRET: process.env.SECRET
};