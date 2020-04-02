import jwt from 'jsonwebtoken';
import User from '../models/user';
import authConfig from '../../config/auth';

class SessionController {
	async store(req, res) {
		const { email, password } = req.body;
		const user = await User.findOne({
			where: { email },
		});
		if (!user) {
			return res.status(401).json({ message: 'User not found' });
		}

		const isPasswordMatch = await user.checkPassword(password);
		if (!isPasswordMatch) {
			return res.status(401).json({ message: 'Credentials not match' });
		}
		const { id, name } = user;
		return res.status(200)
			.json({
				user: {
					id,
					name,
					email,
				},
				token: jwt.sign(
					{ id, email, name },
					authConfig.secret,
					{ expiresIn: authConfig.expiresIn },
				),
			});
	}
}

export default new SessionController();
