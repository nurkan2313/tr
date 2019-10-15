require('dotenv').config();
const Pool = require('pg').Pool;
const moment = require('moment');

const pool = new Pool({
  user: 'admin',
  host: '109.71.231.47',
  database: 'receiver',
  password: 'clk50011',
  port: 5432
});


async function textReceiver(req, res, next) {
  const from = req.body.msisdn;
  const to = req.body.sender;
  const text = req.body.text;
  let now = moment().format('YYYY-MM-DD hh:mm');

  await pool.query(`INSERT into data (msisdn, sender, text, date) VALUES('${from}', '${to}', '${text}', now()  AT TIME ZONE 'Asia/Bishkek')`);

  return res.status(200).send({"success": true})
}

module.exports = {
    textReceiver
}



