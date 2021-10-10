//npm install mysql
//"start": "node ./src/server.js",
import mysql from 'mysql'

const conn = mysql.createConnection({
    host: "localhost",
    database: "pavadinimas duombazes kuria sukuri",
    port: 3306,
    user: "useris kuriuo jungies Sql",
    password: "password kuriuo jungies Sql"
});
function query(conn, sql, params){
    return new Promise((resolve, reject) => {
        conn.query(sql, parrams, (err, results, fields) => {
            if(err) {
                return reject (err);
            }
            return resolve({
                results,
                fields
            })
        })
    })
}
conn.connect();
console.log("prisijungiau")

let {results: r, fields: f} = await querry(conn, "select 1"); // galima rasyti:select * from zmones

console.log(r)
console.log(f)

conn.end();