const DataType = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('creditCard', {
		creditCardId: {
			type: DataType.BIGINT,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		creditCardNumber: {
			type: DataType.STRING,
			allowNull: false,
		},
		creditCardCVV: {
			type: DataType.STRING,
			allowNull: false
		},
		creditCardHolder: {
			type: DataType.STRING,
			allowNull: false,
		},
		expireDate: {
			type: DataType.DATEONLY,
			allowNull: false,
		},
		createdAt: {
			type: DataType.DATE,
			defaultValue: new Date()
		},
		updatedAt: {
			type: DataType.DATE,
			allowNull: true
		},
		deletedAt: {
			type: DataType.DATE,
			allowNull: true
		}

	}, {
		tableName: 'creditCard',
		timestamps: false,
		
	});
};
