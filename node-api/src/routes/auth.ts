import bcrypt from 'bcrypt';
import pool from '../database/db';
import validInfo from '../middleware/validinfo';
import jwtGenerator from '../utils/jwtGenerator';
import { Router, Response, Request } from 'express';

const router = Router();

router.post('/registration', validInfo, async(req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;

		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email
		]);

		if ( user.rows.length ) {
			return res.status(401).json({
				error: true,
				errorCode: 4,
				message: 'User already exist',
			});
		}

		const saltRound: number = 10;
		const salt: string = await bcrypt.genSalt(saltRound);

		const bcryptPassword: string = await bcrypt.hash(password, salt);

		const newUser = await pool.query('INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *', [
			name, email, bcryptPassword
		]);

		const token: string = await jwtGenerator(newUser.rows[0].user_id);

		res.status(200).json({
			error: false,
			token,
		});
	} catch (e) {
		console.error( e.message );

		res.status(500).send('Server Error');
	}
});

router.post('/login', validInfo, async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
			email
		]);

		if ( !user.rows.length ) {
			return res.status(401).json({
				error: true,
				errorCode: 2,
				message: 'Email is incorrect',
			});
		};

		const validPassword: boolean = await bcrypt.compare(password, user.rows[0].user_password);

		if ( !validPassword ) {
			return res.status(401).json({
				error: true,
				errorCode: 3,
				message: 'Password is incorrect',
			});
		};

		const token: string = await jwtGenerator(user.rows[0].user_id);

		res.status(200).json({
			error: false,
			token,
		});
	} catch (e) {
		console.error( e.message );

		res.status(500).send('Server Error');
	};
});

export default router