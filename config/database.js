const mysql = require('mysql2/promise');
const { logger } = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'gdsc.cizaocjakvvv.ap-northeast-2.rds.amazonaws.com',
    user: 'root',
    port: '3306',
    password: 'hotmilk741',
    database: 'erd'
});

module.exports = {
    pool: pool
}