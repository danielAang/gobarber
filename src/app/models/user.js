import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.STRING,
				provider: Sequelize.BOOLEAN,
			},
			{
				sequelize,
			},
		);
		this.addHook('beforeCreate', async (user) => {
			user.password = await bcrypt.hash(user.password, 8);
		});
		return this;
	}

	checkPassword(password) {
		return bcrypt.compare(password, this.password);
	}
}

export default User;
