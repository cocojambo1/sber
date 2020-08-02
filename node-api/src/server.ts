import http from 'http';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';

const app = express();

const server = http.createServer(app)

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

const allowedOrigins = ['http://localhost:3000', 'http://vahella.me:3000'];

app.use(cors({
	origin: function(origin: any, callback: any){
		if(!origin) return callback(null, true);

		if(allowedOrigins.indexOf(origin) === -1) {
			const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

			return callback(new Error(msg), false);
		}

		return callback(null, true);
	}
}));

app.use('/user', authRouter);

server.listen(8000, () => {
	console.log('listening on *:8000');
});