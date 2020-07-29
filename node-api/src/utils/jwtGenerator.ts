import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();

const jwtGenerator = (user_id: string) => {
	const payload = {
		user: user_id,
	};

	// @ts-ignore
	return jwt.sign(payload, process.env.jwtSecret);
};

export default jwtGenerator