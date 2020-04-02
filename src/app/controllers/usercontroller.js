import User from '../models/user';

class UserController {
	async store(req, res) {
		const existUser = await User.findOne({
			where: {
				email: req.body.email,
			},
		});
		if (existUser) {
			return res.status(409).json({ message: `User already exists with email ${req.body.email}` });
		}
		const user = await User.create(req.body);
		return res.json(user);
	}

	async update(req, res) {
		return res.json();
	}
}

export default new UserController();
