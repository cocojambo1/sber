const { Pool } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'sber',
	password: '21',
	port: 5432,
})

export default pool