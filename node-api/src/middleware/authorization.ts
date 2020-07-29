import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Response, Request, NextFunction } from "express";

dotenv.config()

const authorization = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const jwtToken = await req.header('Authorization')

		if (!jwtToken) {
			return res.status(403).json({
				error: true,
				errorCode: 403,
				message: 'Not authorization',
			})
		}

		// @ts-ignore
		const payload = await jwt.verify(jwtToken, process.env.jwtSecret)

		// @ts-ignore
		req.user = payload.user

		next()
	} catch (e) {
		console.error(e.message)

		return res.status(403).json('Not authorization')
	}
}

export default authorization