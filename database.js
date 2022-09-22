
let mysql = require('mysql')

let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: ''
})

// connecting to database

conn.connect(function(err) {

        if(err) throw err;
        console.log('Database is connected successfully')


        // if(err) {
        //         console.log("error in the connection")
        //         console.log(err)
        // }
        // else {
        //         console.log('Database Connected')
        //         conn.query('show databases', function (err, result) {

        //                 if(err) console.log(`error executing the query - ${err} `)

        //                 else console.log("Result: ", result)

        //         })
        // }
})

module.exports = conn;
