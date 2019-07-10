import { Pool } from 'pg'

const pool = new Pool({
  user: 'idmcalculus',
  host: 'localhost',
  database: 'user_db',
  password: 'ma13ka2la',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

export default pool;