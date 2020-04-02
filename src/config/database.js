module.exports = {
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'admin',
	database: 'gobarber',
	define: {
		timestamp: true,
		underscored: true,
		underscoredAll: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
};
