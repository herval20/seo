import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
    host: 'htl-datenbank.com',
    user: 'herval20',
    password: '1INSY$data',
    database: 'herval20_seo',
    port: 28474
});